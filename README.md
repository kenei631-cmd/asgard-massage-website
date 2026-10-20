# Asgard Massage website rebuild

A fully pre-rendered static HTML rebuild for Asgard Massage in Arlington, Washington. The site uses the current live sailboat logo, its inherited ocean-blue palette, selected current-site imagery, and a BrandScript journey where the client is the hero and the next step is clear.

## Canonical routes

The published content is directory-based and uses one preferred trailing-slash URL per page:

- /
- /services/
- /wellness-massage/
- /deep-tissue-massage/
- /sports-massage/
- /prenatal-massage/
- /swedish-massage/
- /float-therapy/
- /infrared-sauna/
- /medical-massage/
- /wellness-program/
- /meet-the-massage-therapists/
- /about/
- /first-visit/
- /reviews/
- /gift-certificates/
- /contact/

Every page contains meaningful static HTML, a unique title and description, a production canonical for https://asgardmassage.com/, matching Open Graph and Twitter metadata, and page-level JSON-LD. The site never adds third-party Google, Yelp, or Mindbody ratings to review schema.

The static files use relative directory links, so a subdirectory preview can render correctly. Netlify Pretty URLs normalizes slashless requests to their trailing-slash equivalent. docs/_redirects permanently maps the former temporary .html pages and useful legacy WordPress appointment, team, and profile URLs to the preferred routes. It deliberately does not redirect obsolete legacy plugin/tutorial and test pages to the home page.

## Included content

The build contains a booking-focused homepage and human-readable pages for massage services, wellness massage, Deep Tissue, Sports, Prenatal, Swedish, Float Therapy, and Infrared Sauna information, medical-massage scheduling information, the Wellness Program, therapists, About, first visit, reviews, gift certificates, and contact/location. It keeps the current Mindbody booking URL and Locbox gift-certificate URL. No contact form is included; one should be added only after its provider, receipt destination, and delivery workflow are verified.

## Visual sources

The docs/assets/ directory contains only selected current-site logo and imagery used on the public site. The complete preserved current-site visual archive, video library, source URLs, dimensions, and metadata remain outside this repository in the task source-asset manifest. Do not add legacy assets to deployment without checking present-day branding, rights, and page purpose.

## Local preview

From docs/, serve the static files locally:

powershell
py -m http.server 8080 --bind 127.0.0.1

This project has no package or build dependency. The declared site routes are available from /manus-routes.json at the docs/ deployment root.

## Netlify staging and production

netlify.toml deploys the dedicated docs/ public directory with safe baseline security headers and cache directives. The staging site intentionally uses Disallow: / in robots.txt so that the Netlify subdomain does not compete with the intended production origin.

Do not point asgardmassage.com to Netlify without the owner’s separate approval. At production cutover, confirm live business facts and integrations, assign the custom domain, replace the staging robots file with an allow-crawl policy and production sitemap declaration, validate redirect behavior, and submit https://asgardmassage.com/sitemap.xml in Google Search Console.
