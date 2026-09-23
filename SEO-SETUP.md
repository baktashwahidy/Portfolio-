# Baktash Wahidy SEO deployment checklist

## What was changed

- Stronger page titles and meta descriptions.
- Self-referencing canonical URLs using `www.baktashwahidy.com`.
- Open Graph and Twitter metadata.
- Index/follow robots directives.
- Person + WebSite + ProfilePage + CreativeWork structured data.
- Name variants for entity disambiguation, including common Latin spellings and Arabic/Persian-script variants.
- All portfolio project URLs added to the XML sitemap.
- Clearer full-name signals in visible page content.
- Better metadata for portfolio case-study pages.
- `robots.txt` points to the canonical sitemap.

## After deployment

1. Open Google Search Console and verify `baktashwahidy.com` as a Domain property.
2. Submit:
   `https://www.baktashwahidy.com/sitemap.xml`
3. Use URL Inspection for:
   - `https://www.baktashwahidy.com/`
   - `https://www.baktashwahidy.com/work`
   - each `/work/<slug>` page
   Request indexing after the final deployment.
4. Verify the same domain in Bing Webmaster Tools and submit the sitemap.
5. Enable/submit IndexNow in Bing Webmaster Tools for updated URLs.
6. Keep the same canonical domain everywhere. The project uses `https://www.baktashwahidy.com`.
7. Build and deploy normally. The source project passes TypeScript checking. A production build must be run in an environment with the correct Linux Next.js SWC binary available.

## Important SEO limitation

Search engines do not provide a guaranteed way to force a page to rank for every typo or every language query. The implementation gives search engines strong entity and relevance signals, but ranking and indexing remain algorithmic.

Do not add a hidden block of repeated keywords. Google explicitly treats keyword stuffing as spam. The name variants are used as entity signals instead.
