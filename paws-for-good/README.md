# Paws For Good - Ethical Pet Support Platform

## Project Overview
A fully functional, production-ready affiliate commerce website that helps feed street dogs and cats. Users shop everyday products through affiliate links, and 100% of commissions go toward purchasing food for rescued animals.

## Core Principles
- Trust First
- Full Transparency
- Legal Compliance
- No Spam
- User Consent for Emails
- Clear Impact Documentation

## Project Structure

```
paws-for-good/
├── README.md
├── package.json
├── next.config.js
├── .gitignore
├── .env.local.example
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
│
├── public/
│   ├── favicon.ico
│   ├── dog-cursor.gif
│   ├── dog-welcome.gif
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── campaign-placeholder.jpg
│   │   └── receipt-placeholder.jpg
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   ├── campaign/
│   │   │   └── page.tsx
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   ├── transparency/
│   │   │   └── page.tsx
│   │   ├── impact-reports/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── affiliate-disclosure/
│   │   │   └── page.tsx
│   │   ├── terms-of-use/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── subscribe/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── EmailSignup.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── WelcomeDog.tsx
│   │   └── CustomCursor.tsx
│   │
│   ├── lib/
│   │   ├── products.ts
│   │   ├── analytics.ts
│   │   └── email.ts
│   │
│   └── types/
│       └── index.ts
│
└── docs/
    ├── DEPLOYMENT.md
    └── SETUP.md
```

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend (Free Tier)
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel
- **Region Detection**: IP-based geolocation

## Features
✅ Responsive mobile-first design
✅ Custom dog cursor animation
✅ Welcome dog animation on landing
✅ Amazon Associates integration (US & UK)
✅ Email opt-in with consent
✅ Cookie consent banner
✅ SEO optimized
✅ Accessibility compliant
✅ Legal pages (Privacy, Terms, Disclosure)
✅ Impact transparency
✅ No spam, no misleading claims

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Vercel account (free)
- Resend account (free tier)
- Amazon Associates accounts (US & UK)

### Local Development

1. **Clone and Install**
```bash
cd paws-for-good
npm install
```

2. **Environment Variables**
Create `.env.local` file:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id (optional)
AMAZON_ASSOCIATE_TAG_US=your-us-tag
AMAZON_ASSOCIATE_TAG_UK=your-uk-tag
```

3. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Deployment to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables
- Deploy

3. **Configure Amazon Associates**
- Sign up for Amazon Associates (US): https://affiliate-program.amazon.com/
- Sign up for Amazon Associates (UK): https://affiliate-program.amazon.co.uk/
- Add your website URL to both accounts
- Get your associate tags and add to environment variables

4. **Configure Email Service**
- Sign up for Resend: https://resend.com
- Get API key from dashboard
- Add to Vercel environment variables
- Verify your domain (optional for production)

## Content Management

### Adding Products
Edit `src/lib/products.ts` to add/remove products. Each product needs:
- Title
- Category
- Price
- Image URL
- Amazon US link
- Amazon UK link
- Description

### Adding Impact Reports
Upload reports to `public/images/reports/` and update the impact reports page.

### Campaign Updates
Edit `src/app/campaign/page.tsx` to update:
- Monthly target
- Progress
- Photos
- Updates

## Legal Compliance

✅ GDPR compliant (cookie consent, privacy policy)
✅ CCPA compliant (privacy rights, data deletion)
✅ FTC compliant (clear affiliate disclosure)
✅ Email opt-in only (no pre-checked boxes)
✅ Unsubscribe in every email
✅ Cookie consent before tracking

## Analytics & Tracking

The site includes basic analytics:
- Page views
- Email signups
- Affiliate link clicks
- Region detection (US/UK)

All tracking respects cookie consent choices.

## Support & Contact

For questions or issues:
- Email: support@example.org (update with your email)
- GitHub Issues: [Create an issue](your-repo-url/issues)

## License
This project is proprietary. All rights reserved.

## Acknowledgments
Built with ❤️ for street dogs and cats around the world.

---

**Important Notes:**
- Replace all placeholder emails and URLs with actual values
- Add real product images to `/public/images/products/`
- Add actual impact report PDFs/images
- Test email signup flow before launch
- Review and customize all legal pages
- Set up Amazon Associates accounts before going live
