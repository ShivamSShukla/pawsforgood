# Quick Setup Guide

## 🚀 Get Started in 10 Minutes

### 1. Install Dependencies (2 min)

```bash
cd paws-for-good
npm install
```

### 2. Add Required GIF Files (3 min)

Download and add these to `/public/`:

**dog-cursor.gif** (32x32px)
- Source: GIPHY, search "dog paw cursor"
- Place in: `/public/dog-cursor.gif`

**dog-welcome.gif** (200x200px)
- Source: GIPHY, search "cute dog waving"
- Place in: `/public/dog-welcome.gif`

### 3. Create Environment File (2 min)

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:
- Your email for contact
- Temporary Amazon tags (update later)

### 4. Run Development Server (1 min)

```bash
npm run dev
```

Open http://localhost:3000

### 5. Test Everything (2 min)

- [ ] Home page loads
- [ ] Navigation works
- [ ] Welcome dog appears (first visit only)
- [ ] All pages accessible
- [ ] Custom cursor visible (desktop)

---

## ✅ You're Ready for Development!

Next steps:
1. Sign up for Amazon Associates
2. Sign up for Resend (email service)
3. Follow `docs/DEPLOYMENT.md` for production deployment

---

## 📁 Project Structure Quick Reference

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop page
│   ├── campaign/          # Campaign page
│   └── api/subscribe/     # Email API
├── components/            # React components
│   ├── Header.tsx
│   ├── EmailSignup.tsx
│   └── WelcomeDog.tsx
└── lib/                   # Utilities
    ├── products.ts        # Product data
    ├── email.ts          # Email functions
    └── analytics.ts      # Tracking
```

---

## 🔧 Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

---

## 📝 Quick Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Orange theme
  accent: { ... },   // Green theme
}
```

### Add Products

Edit `src/lib/products.ts`:
```typescript
export const products = [
  { id: '...', title: '...', ... }
]
```

### Update Campaign

Edit `src/app/campaign/page.tsx`:
- Change location
- Update progress numbers
- Modify description

---

## 🆘 Need Help?

1. Check README.md for full documentation
2. Check docs/DEPLOYMENT.md for deployment guide
3. Review the code comments
4. Test locally before deploying

---

## 🎨 Design Features

✨ **Special Features:**
- Custom dog cursor (desktop only)
- Animated welcome dog on first visit
- Smooth page transitions
- Mobile-responsive design
- Cookie consent banner
- Email signup with validation

---

**Ready to deploy? Follow `docs/DEPLOYMENT.md`** 🚀
