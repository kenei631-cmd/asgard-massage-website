# Asgard Massage website rebuild plan

## Purpose

Rebuild the public Asgard Massage website as a lightweight, multi-page static HTML site that makes the prospective client the hero, uses the current live brand assets, maintains the existing booking and gift-certificate integrations, and is ready for GitHub and Netlify deployment.

## Information and content source

The current public website is the source for business content, service descriptions, team directory, booking and gift-certificate links, phone number, address, logo, photography, and video archive. Rewritten copy will clarify the real source material for people and search/LLM systems without creating unsupported medical or operational claims.

## Design system

**Design movement.** Pacific Northwest wellness clarity: a fresh, spacious local-care site built around Asgardâ€™s inherited sailboat mark and layered ocean blues.

**Core principles.** The site stays calm rather than precious, client-led rather than company-led, clear rather than modality-heavy, and concrete about the next action.

**Color philosophy.** The original sailboat mark provides the palette: Asgard Ocean Blue `#006CA8` owns primary calls to action; Deep Navy `#283C64` provides grounded contrast; Wave Blue `#3C78C8` and pale blue create motion and open space. White and cool gray protect the logoâ€™s clarity.

**Layout paradigm.** A waterline journey rather than centered card stacks: full-width visual moments, offset content blocks, generous open intervals, a small proof band, and a persistent conversion path.

**Signature elements.** A sailboat-logo header, thin layered wave dividers, and carefully cropped inherited massage photography. The current heart mark is a secondary care motif only.

**Interaction and animation.** Navigation, buttons, and disclosure panels respond quickly and subtly. Motion is limited to gentle entrance transitions and header state changes; `prefers-reduced-motion` disables nonessential motion.

**Typography.** A clear, humanist system sans stack supports scanability. The logo stays as the authentic logo image. Large headings use a strong but approachable weight; body copy is relaxed, short, and plainspoken.

**Brand essence.** Customized local massage care that helps Arlington-area clients feel like themselves again. Personality: reassuring, capable, down-to-earth.

**Brand voice.** Direct and supportive: â€œGet back to feeling like yourself.â€ â€œTell us what needs attention. Weâ€™ll help you choose a next step.â€

## Site structure

- `docs/index.html`: BrandScript homepage and primary booking path.
- `docs/services.html`: Service-selection page for wellness, targeted tension, prenatal, sports, and recovery support.
- `docs/wellness-massage.html`: Customizable wellness-massage explanation.
- `docs/medical-massage.html`: Call-first page for qualifying auto-accident and workplace-injury care.
- `docs/membership.html`: Current Wellness Program value and terms, marked for final operational confirmation.
- `docs/therapists.html`: Current published therapist directory with source-supported detailed profiles.
- `docs/about.html`: Founder story and team-care philosophy.
- `docs/first-visit.html`: Three-step first-visit pathway and introductory offer context.
- `docs/reviews.html`: Review proof direction and review-platform links without reproducing unverified quotations.
- `docs/gift-certificates.html`: Maintains the current Locbox purchase path.
- `docs/contact.html`: Location, phone, directions, booking link, and visible operational verification note.
- `docs/assets/`: Only the selected, inherited logo and approved source imagery used by the public build.
- `docs/site.css` and `docs/site.js`: Shared accessible presentation and navigation behavior.
- `docs/manus-routes.json`, `docs/sitemap.xml`, and `docs/robots.txt`: Crawl and route declarations for the static site.

## Technical approach

The site will use semantic static HTML, responsive CSS, and dependency-free JavaScript. It will retain direct, external links to the existing Mindbody booking experience and Locbox gift certificates. No contact form will be added until a validated form integration and delivery destination are available. A `LocalBusiness` JSON-LD block will identify the business without unverified review markup.

Only approved current-site assets will be copied into the public `assets/` directory. The full preserved source library remains outside the deployed site. The existing brand archive includes a 331 Ã— 86 pixel live header logo, 31 image assets, and 3 videos; sources and provenance remain in the task asset manifest.

## Publication

The `docs/` deployment directory will be checked over a local static HTTP preview before its GitHub source is updated. After user-approved Netlify site creation or selection, the verified repository root will be deployed to Netlify as the custom public site. Existing `asgardmassage.com` DNS will not be changed without an additional explicit domain cutover approval.
