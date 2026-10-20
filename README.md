# APS Land Services - Design Exploration V1

Static HTML/CSS/JavaScript redesign based on the October 20, 2026 source files. Production copy and existing service content are retained. No new claims were introduced.

## Structure
- index.html, about.html, services.html, contact.html
- css/styles.css, css/index.css, css/about.css, css/services.css, css/contact.css
- js/main.js, js/services.js, js/us-map.js (original supplied map script, unchanged)
- assets/APSLand_Logo_cropped.png

## IMPORTANT: Missing source assets
The source HTML refers to `assets/mark_photo1.png`, `assets/zane_photo1.jpg`, `assets/ISN_Badge.png`, and favicon files. These were not supplied with the source bundle. Add the original files at the indicated paths before considering the redesign complete. `assets/imagery/hero-landscape.jpg` is an optional licensed photograph; the design has a dark gradient fallback until added.

## Preview
Run `python -m http.server 8000` in this directory, then visit http://localhost:8000. Test all links, map interactions, and mobile layouts. No form submission backend is included because the original contact page uses phone/email links.

## Status
Design prototype, not production approved. Validate against original site and check images, favicon, accessibility, responsiveness, performance, and client content before deployment.


Assets are organized under assets/branding/, assets/images/, and assets/favicons/. All four HTML pages reference these folders.
