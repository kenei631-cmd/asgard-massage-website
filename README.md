# Asgard Massage website rebuild

A static, multi-page rebuild for Asgard Massage in Arlington, Washington. The site uses the current live sailboat logo, its inherited ocean-blue palette, and selected current-site imagery. The content is organized around a clear BrandScript journey where the client is the hero and the next step is always clear.

## Included pages

The build contains a booking-focused homepage and human-readable pages for massage services, wellness massage, medical-massage scheduling information, the Wellness Program, therapists, About, first visit, reviews, gift certificates, and contact/location. It keeps the current Mindbody booking URL and Locbox gift-certificate URL.

No contact form is included. A form should only be added after its provider, receipt destination, and delivery workflow are verified.

## Visual sources

The `docs/assets/` directory contains only the selected current-site logo and imagery used on the public site. The complete preserved current-site visual archive, video library, source URLs, dimensions, and metadata remain outside this repository in the taskâ€™s source-asset manifest. Do not add all legacy assets to deployment without checking present-day branding, rights, and page purpose.

## Local preview

From the `docs/` directory, serve the static files locally:

```powershell
py -m http.server 8080 --bind 127.0.0.1
```

Then use the local preview provided by the development environment. The declared site routes are available at `/manus-routes.json` from the `docs/` deployment root. This project has no package or build dependency.

## Netlify

`netlify.toml` deploys the dedicated `docs/` public directory directly with `true` as the build command. It provides safe baseline security headers and cache directives. Creating or selecting a Netlify site and connecting its assigned URL are separate from changing the existing `asgardmassage.com` DNS. Do not move the existing domain until the owner explicitly approves a final cutover.

## Before production cutover

Confirm the public business name, weekly hours, current session menu, first-visit offer, Wellness Program terms, active therapist roster, therapist specialties/headshots, float/sauna status, and photo/video permissions. Retest Mindbody, Locbox, telephone, email, and directions links. Update `sitemap.xml` and relevant metadata when the final `asgardmassage.com` domain cutover is approved.
