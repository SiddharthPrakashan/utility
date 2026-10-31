# PWA rules

Read this before adding or changing a manifest, service worker, icon or offline behavior.

## Files

- Each utility has its own files in `public/<utility>/`: `manifest.json`, `sw.js`, and `icons/` (`icon-192.png`, `icon-512.png`, `maskable-512.png`).
- Files in `public/` are copied as-is to `dist/`. `sw.js` is a plain file and is never bundled by Vite.
- The site pages (about, privacy-policy, terms, contact, credits) have no service worker.

## Manifest

- Each manifest has its own `id`, `start_url` (`/<utility>/`), `scope` (`/<utility>/`), `name`, `short_name` and icon paths.
- The `id` is what makes the browser treat each utility as a separate installable app.
- Link it from the utility's HTML entry: `<link rel="manifest" href="/<utility>/manifest.json" />`, plus `theme-color` and `apple-touch-icon`.

## Service worker

- Register it with `registerSW("<utility>")` from `src/shared/lib/registerSW.ts`, with scope `/<utility>/`. Register in production only (`import.meta.env.PROD`).
- Derive the cache name from the scope (`app:/<utility>/:<version>`).
- On activate, delete only caches that start with this utility's own prefix. Never delete another app's caches.
- Handle same-origin GET requests only.
- Navigations: network first, fall back to the cached `/<utility>/` page when offline.
- Hashed `/assets/*` files: cache first.
- Never cache user files, parsed results or other sensitive data.
- Bump `VERSION` in `sw.js` to force clients to refresh caches.

## Shared origin

- All utilities share one origin, so `localStorage`, IndexedDB and Cache Storage are shared. Prefix storage keys per app (for example `instagram:settings`).
- Links to other utilities are outside an installed app's scope, so the browser opens them outside the app window.

## Hosting

- Serve `sw.js` with `Cache-Control: no-cache`. Hashed assets can be cached for a year.
- Installability needs HTTPS, a manifest with 192px and 512px icons, and a registered service worker.

## Testing

Test installation and offline behavior for each utility independently (Chrome DevTools, Application tab, Manifest and Service Workers).
