// Vercel serverless function — forwards a lead to Privyr's incoming webhook.
// Secrets (PRIVYR_WEBHOOK_URL, PRIVYR_AUTH_TOKEN) live ONLY here, server-side.
// They are NEVER sent to the browser.
// CommonJS is used deliberately: this project has no package.json, so a bare
// .js file in /api runs as CommonJS on Vercel's Node runtime.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // Body may arrive parsed (JSON) or as a raw string depending on runtime.
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};

  // Honeypot: silently accept & drop bot submissions (never forwarded to Privyr).
  if (b._gotcha && String(b._gotcha).trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  // Server-side validation (mirrors client-side required fields).
  const name = String(b.name || '').trim();
  const phone = String(b.phone || '').trim();
  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: 'Missing name or phone' });
  }

  const url = process.env.PRIVYR_WEBHOOK_URL;
  const token = process.env.PRIVYR_AUTH_TOKEN; // optional; only if your webhook needs X-TOKEN
  if (!url) {
    return res.status(500).json({ ok: false, error: 'Lead service not configured' });
  }

  // Standard Privyr fields = name / phone / email / lead_source.
  // Everything else goes into other_fields so nothing is lost.
  const other = {};
  if (b.project)  other['Project'] = String(b.project).trim();
  if (b.config)   other['Configuration'] = String(b.config).trim();
  if (b.visit)    other['Preferred visit'] = String(b.visit).trim();
  if (b.page_url) other['Page URL'] = String(b.page_url).trim();

  const payload = {
    name: name,
    phone: phone,
    lead_source: String(b.source || 'Metric Homes Website').trim(),
    other_fields: other
  };
  const email = String(b.email || '').trim();
  if (email) payload.email = email;

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['X-TOKEN'] = token;

    const r = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      return res.status(502).json({ ok: false, error: 'Lead service rejected the request' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'Could not reach lead service' });
  }
};
