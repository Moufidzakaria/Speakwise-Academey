# English Teaching Training – Fès, Morocco

Next.js 14 (App Router) + TypeScript + Tailwind CSS 3 + Lucide icons.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
cp .env.example .env.local   # set the site URL and Resend email settings
npm run build
npm run start
```

## Deploy (Vercel, simplest)
1. Push the project to GitHub.
2. On vercel.com: Add New → Project → import the repository.
3. In Resend, verify a domain and create an API key.
4. In Vercel → Project → Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, and `RESEND_FROM_EMAIL`. Use a sender address on the domain verified with Resend.
5. Redeploy. Registration requests will be emailed to both contact addresses. Keep `RESEND_API_KEY` private; never add it to client-side code.

## Where to edit
- `lib/site.ts`: contact details, prices, FAQ, package options, WhatsApp message.
- `app/*/page.tsx`: page content and SEO metadata.
- `components/RegistrationForm.tsx`: form validation and submission status.
- `app/api/register/route.ts`: server-side validation and email delivery through Resend.
- `tailwind.config.ts`: brand colors.

## Registration
The form validates and sends registration requests to both contact email addresses through Resend. The website does not store submissions in a database. WhatsApp is also available after a successful email submission. A request is not a confirmed reservation until you confirm it.
Because the registration endpoint is public, add rate limiting or CAPTCHA protection if you receive spam.

## Later: French and Moroccan Arabic
Move the texts from `lib/site.ts` and the pages into one dictionary per language
(`lib/i18n/en.ts`, `fr.ts`, `ar.ts`), then move the pages under `app/[locale]/`.
For Arabic, set `dir="rtl"` on `<html>`.

## To check yourself
- Run Lighthouse (Chrome DevTools) on the deployed site. No score is claimed here.
- Add an Open Graph image (`app/opengraph-image.png`, 1200x630).
