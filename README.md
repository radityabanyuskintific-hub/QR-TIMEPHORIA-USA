# Timephoria Stellar

Standalone English product card and camera virtual try-on for Stellar Dust Lip Stain, copied from the Timephoria Malaysia app. Uses Next.js, React, TypeScript, Tailwind CSS and the bundled MediaPipe face-tracking runtime.

## Run

Requires Node.js 22.13 or newer.

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. For a production run:

```powershell
npm run build
npm start
```

Run `npm run check` for lint, shade-data tests, type checking and a production build.

The camera works on localhost or an HTTPS host. Allow camera permission when prompted. A phone accessing a plain HTTP LAN address will require HTTPS before camera access works.

## Content

- One Stellar product card with the original artwork, description and four swatch slides.
- Nine selectable Stellar shades from the Malaysia SKU mapping in source history at `b9c80bd`.
- Camera try-on with shade selection, intensity, effect comparison, camera switch, aspect ratio, fullscreen and photo capture.
- English is the page and interface language.
- MediaPipe model and WASM files are included under `public/vendor/mediapipe/`; `next.config.ts` routes the versioned camera asset URLs.

Original swatch images show the full printed range. The availability list and camera selectors use the nine Malaysia SKU variants. Color values are the existing display approximations, not measured color matches.

The source project and pre-existing files in this folder are preserved. No environment secrets, repository history or existing deployment links were copied. No account or database is needed for this product card and camera flow.
