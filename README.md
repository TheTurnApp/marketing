# Regent Golf Operations Platform - Marketing Website

A sophisticated marketing website for Regent, a premium golf operations platform that modernizes on-course beverage ordering.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion (subtle)
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Playfair Display (display) + Inter (body)

## 🎨 Brand Identity

### Colors
- **Navy**: Primary brand color (#1B2951)
- **Gold**: Accent color (#D4A574)
- **Silver**: Secondary color (#A8B2C1)
- **Ivory**: Background color (#F8F6F0)

### Typography
- **Display Font**: Playfair Display (headings, brand)
- **Body Font**: Inter (UI, content)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts and SEO
│   ├── page.tsx            # Homepage
│   ├── how-it-works/       # Process explanation page
│   ├── about/              # Company story page
│   ├── contact/            # Contact form and calendar
│   ├── api/
│   │   ├── contact/        # Contact form API
│   │   └── newsletter/     # Newsletter signup API
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with newsletter
│   ├── Hero.tsx            # Homepage hero section
│   ├── ContactForm.tsx     # Contact form component
│   ├── NewsletterForm.tsx  # Newsletter signup
│   └── StructuredData.tsx  # SEO structured data
└── lib/
    ├── utils.ts            # Utility functions
    └── validations.ts      # Form validation schemas
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd regent-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the environment variables in `.env.local` as needed.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form and newsletter signup are configured to work with various email services:

### For Development
- Forms log submissions to console
- No actual emails sent

### For Production
- **Contact Form**: Configure `CONTACT_TO` and `CONTACT_FROM`
- **Newsletter**: Integrate with ConvertKit, Mailchimp, or similar
- **Email Service**: Use Postmark, SendGrid, or similar

## 🎯 SEO Features

- **Metadata**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

## 🔒 Security Features

- **Rate Limiting**: API routes include rate limiting
- **Spam Protection**: Honeypot fields in forms
- **Validation**: Zod schemas for type-safe form validation
- **CORS**: Proper cross-origin request handling

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- **WCAG AA Compliance**
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Skip navigation link

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds on main branch

### Manual Build
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ in all categories
- **Core Web Vitals**: Green scores
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimal with font-display: swap

## 🎨 Customization

### Colors
Update brand colors in `src/app/globals.css` under the `@theme inline` section.

### Content
- **Homepage**: Edit `src/app/page.tsx`
- **About**: Edit `src/app/about/page.tsx`
- **How It Works**: Edit `src/app/how-it-works/page.tsx`
- **Contact**: Edit `src/app/contact/page.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component-specific: Use Tailwind classes
- Brand colors: Available as Tailwind utilities (e.g., `text-navy`, `bg-gold`)

## 📝 Content Strategy

### Voice & Tone
- **Voice**: Sophisticated, authoritative, timeless, refined
- **Avoid**: "Revolutionary," "game-changing," "disruptive"
- **Use**: "Elevate," "refined operational control," "sophisticated service"

### Key Messages
1. Operational excellence over technology for technology's sake
2. Understanding of golf culture and service standards  
3. Enhancing rather than replacing personal service

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Analytics

Google Analytics integration is ready - just add your tracking ID to the environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary to Regent. All rights reserved.
