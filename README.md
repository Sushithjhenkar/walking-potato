# The Walking Potato

A vibrant single-page website for **The Walking Potato**, an Indian street food truck. The site highlights weekly routes, signature menu items, catering information, quotes celebrating Indian street food culture, and contact details with social media links.

## Getting Started

You can serve the static files locally or deploy them with Cloudflare Pages.

### Local preview

```bash
# Serve the public directory with any static file server
python3 -m http.server 8080 --directory public
```

Then open <http://localhost:8080> in your browser.

### Cloudflare Pages deployment

This repository includes a `wrangler.toml` that tells Cloudflare to upload everything in `public/` and use the lightweight Worker in `worker.js` to serve those assets. In the Cloudflare Pages project settings:

1. Set the **Build command** to `npx wrangler deploy` (or run the command manually from your terminal).
2. Leave the **Build output directory** blank; Wrangler handles the upload based on the configuration file.
3. Ensure that the project has access to your Cloudflare account ID (for example through the `CF_ACCOUNT_ID` environment variable) so Wrangler can deploy.

Wrangler will automatically install (if necessary) and deploy the Worker along with the bundled static assets. No additional build step is required.

## Project Structure

```
.
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css      # Core styling and responsive design
│   │   └── js
│   │       └── main.js         # Mobile navigation toggle & dynamic year
│   └── index.html              # Landing page content
├── worker.js                   # Serves static assets & falls back to index.html
└── wrangler.toml               # Cloudflare deployment configuration
```

## Features

- Hero section with weekly route highlights and quick calls-to-action
- Menu section showcasing signature dishes and pricing
- Indian street food quote gallery for brand storytelling
- Catering inquiry form and event highlights
- Contact information with phone, email, and service area
- Footer with newsletter sign-up and social media icons
- Responsive layout optimized for mobile, tablet, and desktop

## Customization Tips

- Update weekly route and menu details directly in `public/index.html`
- Adjust colors, typography, or layout in `public/assets/css/styles.css`
- Extend interactivity (e.g., form handling) in `public/assets/js/main.js`

Enjoy sharing the bold flavors of The Walking Potato!
