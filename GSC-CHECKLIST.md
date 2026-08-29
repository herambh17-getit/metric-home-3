# Metric Homes — Google Search Console Checklist

**Goal:** get `/horizon-grande`, `/blog`, and the rest re-crawled and indexed after the technical SEO fixes.
**Property:** https://www.metrichomes.in/  ·  **Console:** https://search.google.com/search-console

> ✅ Pre-verified for you (no action needed): sitemap returns 200 with 13 URLs; **all 13 URLs return HTTP 200 with no redirects**; robots.txt allows crawling and declares the sitemap; canonical tags are self-referential extensionless URLs; structured data validates.

---

## Step 1 — Resubmit the sitemap  (2 min)
1. Open Search Console → left menu → **Sitemaps**.
2. If `sitemap.xml` is listed with an old status, that's fine — under **Add a new sitemap** type: `sitemap.xml` → **Submit**.
3. Confirm **Status = Success** and **Discovered URLs = 13** (may take a few minutes).

## Step 2 — Request indexing for the priority pages  (5 min)
For **each** URL below: paste it into the **URL inspection** bar at the top → wait for the check → click **Request indexing**.
- `https://www.metrichomes.in/horizon-grande`
- `https://www.metrichomes.in/blog`
- `https://www.metrichomes.in/sea-view-homes-tarkarli`

*(Optional, if you want them prioritized too: `/nri`, `/blog-stamp-duty-gst`, `/blog-tarkarli-investment`, `/blog-coastal-construction`.)*

> Note: "Request indexing" has a daily quota — do the 3 priority pages first. Google decides timing; this only nudges the queue.

## Step 3 — Confirm the rich results / schema  (3 min)
Open the **Rich Results Test**: https://search.google.com/test/rich-results
Test each and confirm it detects the item type with **no errors**:
- `https://www.metrichomes.in/horizon-grande` → should detect **Breadcrumbs** (and read ApartmentComplex)
- `https://www.metrichomes.in/blog-stamp-duty-gst` → should detect **Breadcrumbs** + **Article**
- `https://www.metrichomes.in/` → should read **Organization / WebSite / FAQ**

## Step 4 — Validate the old errors  (2 min)
1. Left menu → **Pages** (Indexing report).
2. Open any issue that previously listed `/horizon-grande.html` or `/blog.html` (e.g. "Alternate page with proper canonical", "Page with redirect", "Crawled – currently not indexed").
3. Click **Validate Fix** so Google formally re-checks.

## Step 5 — Wait, then check  (3–7 days later)
- **Pages → Indexed:** confirm `/horizon-grande`, `/blog`, `/sea-view-homes-tarkarli` moved to **Indexed**.
- **Performance:** impressions/clicks should start appearing for those pages.
- **Sitemaps:** status stays **Success**.

---

## What to expect (set expectations)
- Indexing is **not instant** — new/updated pages commonly take **days**, sometimes 1–2 weeks, even when technically perfect.
- The technical blocker (canonical pointing to a redirecting `.html` URL) is **fixed**, so pages are now eligible; the rest is Google's crawl schedule.
- Keep the Google verification file and sitemap in place — do not remove them.

## If a page still isn't indexed after ~2 weeks
- Re-run **URL Inspection** → read the "Page indexing" reason it gives.
- Send me that exact reason and I'll diagnose the specific cause.

---
*Prepared for Metric Homes · all site-side technical SEO (Phases 1–3 + GA4) is deployed and verified live.*
