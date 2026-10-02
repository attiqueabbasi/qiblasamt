# قبلة سمت — QiblaSamt

Free Arabic Qibla direction finder: shows the direction of the Kaaba from the visitor's location, with a live compass on phones and a static north-up bearing on desktops.

**Live site: [https://qiblasamt.com](https://qiblasamt.com)**

## What it does

- Calculates the Qibla bearing (great-circle initial bearing from true north) and the distance to Makkah.
- Live compass on mobile using the device magnetometer (iOS permission flow and Android `deviceorientationabsolute`), with a true/magnetic north toggle based on the WMM magnetic declination.
- Static fallback for devices without a compass sensor.
- Location from the browser Geolocation API, with a city search fallback (OpenStreetMap Nominatim).
- Arabic (RTL) content: usage guide, city bearing table, methodology, FAQ, and legal pages (privacy, terms, cookies, disclaimer, about, contact).
- Light and dark themes, offline-capable via a service worker.

## Tech stack

- Next.js 15 (App Router, static export), React 19, TypeScript
- Tailwind CSS 3
- next-intl 3 (single locale, structured for adding more)
- `geomagnetism` for client-side magnetic declination
- No backend, database or paid APIs — everything runs in the browser

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
```

This exports the static site to `out/`, copies `.htaccess` into it, and writes `qiblasamt-deploy.zip`. Upload the contents of the zip to `public_html` on shared hosting.

## Project layout

```
src/app          pages (home + legal pages), sitemap, robots, 404
src/components   UI components and homepage sections
src/lib          Qibla math, geolocation, geocoding, declination, content data
public           icons, images, manifest, service worker, .htaccess
```

## Links

- Website: https://qiblasamt.com
- About: https://qiblasamt.com/about/
- Contact: https://qiblasamt.com/contact/
