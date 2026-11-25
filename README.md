# English Teaching Training – Fès, Morocco

Next.js 14 (App Router) + TypeScript + Tailwind CSS 3 + Lucide icons.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your real domain
npm run build
npm run start
```

## Deploy (Vercel, simplest)
1. Push the project to GitHub.
2. On vercel.com: Add New → Project → import the repository.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` (your domain, with https://).
4. Deploy. HTTPS is automatic. Netlify works the same way.

## Where to edit
- `lib/site.ts`: contact details, prices, FAQ, package options, WhatsApp message.
- `app/*/page.tsx`: page content and SEO metadata.
- `components/RegistrationForm.tsx`: form validation and message building.
- `tailwind.config.ts`: brand colors.

## Registration
No backend: the form validates the data, then prepares a WhatsApp message and an email.
Nothing is stored. Nothing says a seat is confirmed before you confirm it.
If you add an API route later: validate on the server, add rate limiting and a captcha.

## Later: French and Moroccan Arabic
Move the texts from `lib/site.ts` and the pages into one dictionary per language
(`lib/i18n/en.ts`, `fr.ts`, `ar.ts`), then move the pages under `app/[locale]/`.
For Arabic, set `dir="rtl"` on `<html>`.

## To check yourself
- Run Lighthouse (Chrome DevTools) on the deployed site. No score is claimed here.
- Add an Open Graph image (`app/opengraph-image.png`, 1200x630).
