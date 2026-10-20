# Asgard Massage website rebuild plan

## Purpose

Rebuild the public Asgard Massage website as a lightweight, multi-page static HTML site that makes the prospective client the hero, uses the current live brand assets, maintains the existing booking and gift-certificate integrations, and is ready for GitHub source control and Netlify publication.

## Information and content source

The current public website is the source for business content, service descriptions, team directory, booking and gift-certificate links, phone number, address, logo, photography, and video archive. Rewritten copy will clarify the real source material for people and search or LLM systems without creating unsupported medical or operational claims.

## Design system

**Design movement.** Pacific Northwest wellness clarity: a fresh, spacious local-care site built around Asgard’s inherited sailboat mark and layered ocean blues.

**Core principles.** The site stays calm rather than precious, client-led rather than company-led, clear rather than modality-heavy, and concrete about the next action.

**Color philosophy.** The original sailboat mark provides the palette: Asgard Ocean Blue `#006CA8` owns primary calls to action; Deep Navy `#283C64` provides grounded contrast; Wave Blue `#3C78C8` and pale blue create motion and open space. White and cool gray protect the logo’s clarity.

**Layout paradigm.** A waterline journey rather than centered card stacks: full-width visual moments, offset content blocks, generous open intervals, a small proof band, and a persistent conversion path.

**Signature elements.** A sailboat-logo header, thin layered wave dividers, and carefully cropped inherited massage photography. The current heart mark is a secondary care motif only.

**Interaction and animation.** Navigation, buttons, and disclosure panels respond quickly and subtly. Motion is limited to gentle entrance transitions and header state changes; `prefers-reduced-motion` disables nonessential motion.

**Typography.** A clear, humanist system sans stack supports scanability. The authentic logo remains an image asset. Large headings use a strong but approachable weight; body copy is relaxed, short, and plainspoken. Desktop headline wrapping stays natural. Only on the mobile homepage, the hero promise is deliberately composed as two semantic lines—“Get back to” and “feeling like yourself.”—with the type scale reduced only as needed to keep the second line inside narrow phone viewports.

**Brand essence.** Customized local massage care that helps Arlington-area clients feel like themselves again. Personality: reassuring, capable, down-to-earth.

**Brand voice.** Direct and supportive: “Get back to feeling like yourself.” “Tell us what needs attention. We’ll help you choose a next step.”

## Static site and URL architecture

The published website will use semantic, pre-rendered HTML with directory-style canonical pages. Every preferred public page is an `index.html` inside its own route folder, so it is served at a trailing-slash URL:

- `/`
- `/services/`
- `/wellness-massage/`
- `/medical-massage/`
- `/wellness-program/`
- `/meet-the-massage-therapists/`
- `/about/`
- `/first-visit/`
- `/reviews/`
- `/gift-certificates/`
- `/contact/`

Each page uses the same directory-style paths in the header, footer, body links, XML sitemap, Open Graph URL, and self-referencing canonical. Internal links remain relative to their route so the static build also works from a subdirectory preview.

Netlify Pretty URLs is the trailing-slash normalizer. It redirects requests such as `/services` to `/services/` and standardizes `.html` paths. Explicit forced 301 rules will preserve the current temporary `.html` files and useful old WordPress pages, including published therapist-profile paths, the historic team routes, and the booking page. Obsolete old plugin/tutorial and test URLs will remain absent so that Netlify returns a genuine 404 rather than redirecting them to irrelevant content.

## Search, social, and schema markup

`https://asgardmassage.com/` is the intended production origin. Every canonical page will contain its self-referencing absolute canonical URL plus matching `og:url`; titles and descriptions are per-route and already embedded in initial HTML. The homepage HTML title exactly inherits the current live browser title, `Deep Tissue, Sports, Swedish Massage for Arlington, Marysville, Smokey Point, Stanwood WA`; its newer branded Open Graph and Twitter titles remain separate social-card copy. The sitemap contains only those 11 canonical production URLs. The Netlify staging address remains blocked from indexing until the owner authorizes a domain cutover.

The homepage will publish a shared `HealthAndBeautyBusiness` entity with the production `@id` `https://asgardmassage.com/#business`. Every public page will receive a static `WebPage` graph referring to that entity, while the home page also provides `WebSite` markup. About, Contact, Services, and the therapist directory can use a more specific page type where it accurately describes visible content. `Service`, `Person`, FAQ, opening-hours, price-range, geo, and image fields will be added only after the corresponding current business information is confirmed. Third-party Google, Mindbody, Yelp, and similar review ratings will never be placed in `AggregateRating` or review schema.

## Project structure

- `docs/index.html`: BrandScript homepage and primary booking path.
- `docs/<route>/index.html`: Canonical trailing-slash content pages.
- `docs/404.html`: Real not-found response, marked `noindex`.
- `docs/_redirects`: Permanent legacy and `.html` redirects for Netlify.
- `docs/assets/`: Selected inherited logo and approved source imagery used by the public build.
- `docs/site.css` and `docs/site.js`: Shared accessible presentation and navigation behavior.
- `docs/manus-routes.json`, `docs/sitemap.xml`, and `docs/robots.txt`: Crawl and route declarations for the static site.
- `netlify.toml`: Static deployment, headers, and cache policy.

## Technical approach

The site uses semantic static HTML, responsive CSS, and dependency-free JavaScript. It retains direct external links to the existing Mindbody booking experience and Locbox gift certificates. No contact form will be added until a validated form integration and delivery destination are available. The full preserved source library stays outside the public deployment directory; only approved current-site assets are copied into `docs/assets/`. The supplied evergreen reception photo will replace the Contact hero’s generic service image, and the supplied float-tank photo will support a factual Float Therapy feature on Services. The supplied Christmas reception photo is a seasonal asset and remains out of evergreen navigation and content until an owner-approved November–January campaign or social post calls for it.

The approved studio email is a human-only contact method. It must not appear in static HTML, static mail links, metadata, schema, sitemap, or publicly committed prose. Visitors will activate a keyboard-accessible “Reveal email address” control; only that activated browser session receives a visible, clickable email link. The no-JavaScript fallback directs visitors to call the studio instead. This lowers ordinary crawler and source-scraper exposure, although no client-side obfuscation can guarantee secrecy from a determined automated actor.

## Publication

The `docs/` directory is validated before source is committed and deployed. Netlify hosts the staged static build. Existing `asgardmassage.com` DNS will not be changed until the owner separately approves the final cutover. At that cutover, Netlify will be assigned the domain, staging robots controls will be changed to allow crawling, the production sitemap will be submitted in Google Search Console, and the active business facts and integrations will be rechecked.
