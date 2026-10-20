# Asgard Massage Website

A responsive, plain HTML/CSS/JavaScript homepage for **Asgard Massage** in Arlington and Smokey Point, Washington. It is intentionally dependency-free so it can be previewed locally and deployed through GitHub Pages or any static host.

## Files

- `index.html` — page content, links, semantic markup, and local-business structured data.
- `styles.css` — responsive design system and mobile layout.
- `script.js` — mobile navigation, sticky-header state, and automatic copyright year.
- `favicon.svg` — lightweight SVG browser icon.
- `robots.txt` and `sitemap.xml` — search-engine files for the eventual production domain.

## Local preview

Open `index.html` in a browser for a quick preview. For a local web server from this folder, run:

```powershell
py -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publishing through GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. When the domain is ready, connect `asgardmassage.com` through the domain registrar and GitHub Pages custom-domain settings. Update the `sitemap.xml` and schema URL only if the final public domain differs.

## Content details to verify before launch

The public audit found conflicting third-party listings. Before publishing, confirm the exact business name, weekly hours—especially Sunday—current price menu, weekend premium, active therapist roster, and whether float therapy and infrared sauna belong in the public offer. Replace the team-page link with a new on-site directory after current staff headshots and specialties are confirmed.

The current booking, directions, gift-certificate, phone, email, address, service, and membership details were sourced from the existing public website and public listings as of October 2026. Re-test every external link before public launch.
