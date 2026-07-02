# Metric Homes — Website

Marketing website for **Metric Homes Pvt. Ltd.** — a premium‑affordable real‑estate developer in Mumbai & Maharashtra.
**Built on Trust. Designed for Life.**

Static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html               # Homepage
horizon-grande.html      # Flagship project (Horizon Grande, Tarkarli)
blog.html                # Blog index
blog-stamp-duty-gst.html
blog-tarkarli-investment.html
blog-coastal-construction.html
careers.html
channel-partner.html
nri.html                 # NRI Corner
privacy-policy.html
terms.html
disclaimer.html
404.html                 # Branded not-found page
sitemap.xml
robots.txt
_headers                 # Security + caching headers (Netlify)
images/                  # Logos, project photos, drone video, MahaRERA assets
```

## Run locally

It's plain static files — open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8080
# Node
npx serve .
```

(`_serve.ps1` is an optional Windows/PowerShell dev server — not needed for deployment.)

## Deploy (recommended: Netlify)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from GitHub** (or drag‑and‑drop the folder).
3. Build command: *none*. Publish directory: `/` (root).

Netlify automatically applies:
- **`_headers`** → CSP, HSTS, X‑Frame‑Options, etc.
- **`404.html`** → served on missing routes.
- **Netlify Forms** → the two site‑visit forms (`data-netlify="true"`) capture leads in the Netlify dashboard.

## Contact / config to update before launch
- Phone / WhatsApp: `+91 99872 21188`
- MahaRERA (Horizon Grande): `P52900048510`
- GSTIN: `27AANCM2087M1ZT`
- Email inboxes referenced: `hello@`, `careers@`, `partners@`, `nri@`, `privacy@metrichomes.in`
- Social: Facebook, Instagram, Google Business, Google Maps, LinkedIn (links in footer)

---
© 2026 Metric Homes Pvt. Ltd.
