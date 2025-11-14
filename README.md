# The Walking Potato

A vibrant single-page website for **The Walking Potato**, an Indian street food truck. The site highlights weekly routes, signature menu items, catering information, quotes celebrating Indian street food culture, and contact details with social media links.

## Getting Started

Cloudflare Pages (or any static host) can deploy the site directly from this repository. To preview locally:

```bash
# Serve the site with any static file server
python3 -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

## Project Structure

```
.
├── assets
│   ├── css
│   │   └── styles.css      # Core styling and responsive design
│   └── js
│       └── main.js         # Mobile navigation toggle & dynamic year
└── index.html              # Landing page content
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

- Update weekly route and menu details directly in `index.html`
- Adjust colors, typography, or layout in `assets/css/styles.css`
- Extend interactivity (e.g., form handling) in `assets/js/main.js`

Enjoy sharing the bold flavors of The Walking Potato!
