# BunStreet — Static demo site

This is a small static demo for the BunStreet burger website.

Files added:
- `Index.html` — Homepage
- `styles.css` — Styles
- `script.js` — Small JS for menu filter and mobile nav
- `logo.svg` — Simple SVG logo

How to open:
- Open `Index.html` in your browser directly (double-click). For a local server, you can run a simple Python server:

  PowerShell:
  ```powershell
  cd d:\Project_Burger; python -m http.server 8000
  ```

This is intentionally lightweight and framework-free so you can iterate quickly.

Next steps you might want:
- Add more menu items and images
- Hook the contact form to a backend or service (Formspree, Netlify Forms)
- Improve accessibility (aria attributes) and add tests
