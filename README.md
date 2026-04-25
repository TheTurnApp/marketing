# The Turn — Marketing Website

Marketing website for **The Turn**, on-course ordering for modern golf clubs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom brand palette
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Fonts**: Playfair Display (display) + Inter (body)

## Brand

Matches the mobile app palette used in the sibling `monorepo/apps/golfer` project.

### Colors

| Token       | Hex       | Use                                  |
| ----------- | --------- | ------------------------------------ |
| `primary`   | `#9ecb3d` | Primary brand green                  |
| `primary-600` | `#7aa32f` | Primary button / link color        |
| `gold`      | `#f38e48` | Warm accent / CTAs                   |
| `sky`       | `#4da6ff` | Optional cool accent                 |
| `ivory`     | `#f9fbf6` | Page background                      |
| `ink`       | `#20251f` | Text, dark surfaces, footer          |
| `silver`    | `#93988a` | Muted UI / borders                   |

All scales (`50`–`900`) are defined in `src/app/globals.css`.

### Typography

- **Display**: Playfair Display (headings, brand)
- **Body**: Inter (UI, content)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO
│   ├── page.tsx            # Homepage
│   ├── how-it-works/       # Process explanation
│   ├── about/              # Company story
│   ├── contact/            # Contact form + calendar
│   ├── invite/             # Deep-link landing page
│   ├── api/
│   │   ├── contact/        # Contact form handler
│   │   ├── newsletter/     # Newsletter signup
│   │   └── .well-known/    # Apple AASA + Android assetlinks
│   ├── icon.tsx            # Dynamic favicon
│   ├── sitemap.ts          # Sitemap
│   └── globals.css         # Tailwind theme + brand palette
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   ├── NewsletterForm.tsx
│   └── StructuredData.tsx
└── lib/
    ├── utils.ts
    └── validations.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Name                        | Purpose                                    |
| --------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_MEETING_URL`   | Calendly (or similar) embed URL            |

## Deployment

Static export to GitHub Pages. Domain: `trytheturn.com`.

`npm run build` produces `out/`, which is published by `.github/workflows/deploy.yml` on every push to `main`.

### One-time setup

1. In repo Settings → Pages, set **Source** to "GitHub Actions".
2. Point DNS for `trytheturn.com` at GitHub Pages (`A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, plus `AAAA` for IPv6 if desired). The `public/CNAME` file in this repo handles the GitHub side.
3. Fill in real values in `public/.well-known/apple-app-site-association` (Apple Team ID) and `public/.well-known/assetlinks.json` (Android SHA256 fingerprint) before deeplinking will work.

### TODOs

- `ContactForm.tsx` and `NewsletterForm.tsx` log submissions to the console — wire to a third-party form handler (Formspree, Basin) or mailing service (ConvertKit, Mailchimp) before launch.

## Scripts

- `npm run dev` — development server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint
