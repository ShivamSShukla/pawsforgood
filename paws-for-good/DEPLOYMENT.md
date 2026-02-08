# Deployment Guide - Paws For Good

## Complete Step-by-Step Deployment to Vercel

### Prerequisites Checklist
- [ ] GitHub account
- [ ] Vercel account (free) - https://vercel.com/signup
- [ ] Amazon Associates account (US) - https://affiliate-program.amazon.com/
- [ ] Amazon Associates account (UK) - https://affiliate-program.amazon.co.uk/
- [ ] Resend account (free) - https://resend.com/signup
- [ ] Node.js 18+ installed locally

---

## PART 1: Local Setup & Testing

### Step 1: Clone and Install Dependencies

```bash
cd paws-for-good
npm install
```

### Step 2: Create Environment Variables

Create `.env.local` file in the root directory:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Paws For Good

# Email Service (get from Resend)
RESEND_API_KEY=re_123456789

# Amazon Associates Tags
AMAZON_ASSOCIATE_TAG_US=pawsforgood-20
AMAZON_ASSOCIATE_TAG_UK=pawsforgood-21

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=support@pawsforgood.org
```

### Step 3: Add GIF Assets

Before running, add these animated GIFs to `/public/`:

1. **dog-cursor.gif** (32x32px) - Small cursor animation
   - Find free options at GIPHY
   - Search: "dog paw cursor" or "dog cursor"

2. **dog-welcome.gif** (200x200px) - Welcome dog animation
   - Find at GIPHY or Tenor
   - Search: "cute dog waving" or "dog hello"

### Step 4: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Email signup form appears
- [ ] Welcome dog animation shows (first visit)
- [ ] Custom cursor works (desktop only)
- [ ] Products load on shop page

---

## PART 2: Amazon Associates Setup

### Step 1: US Account

1. Go to https://affiliate-program.amazon.com/
2. Sign up / Log in
3. Complete application:
   - Website: Your Vercel URL (you'll add this after deployment)
   - Description: "Ethical shopping platform supporting animal rescue"
   - Traffic sources: Social media, direct
4. Wait for approval (usually 24-48 hours)
5. Once approved, get your Associate Tag (format: yourname-20)

### Step 2: UK Account

1. Go to https://affiliate-program.amazon.co.uk/
2. Repeat same process as US
3. Get UK Associate Tag (format: yourname-21)

### Step 3: Update Tags

Add both tags to your `.env.local` file:
```
AMAZON_ASSOCIATE_TAG_US=yourname-20
AMAZON_ASSOCIATE_TAG_UK=yourname-21
```

---

## PART 3: Email Service Setup (Resend)

### Step 1: Create Account

1. Go to https://resend.com/signup
2. Sign up with email
3. Free tier: 3,000 emails/month (perfect for starting)

### Step 2: Get API Key

1. Go to Dashboard → API Keys
2. Click "Create API Key"
3. Name: "Paws For Good Production"
4. Copy the key (starts with `re_`)

### Step 3: Add to Environment

```
RESEND_API_KEY=re_your_actual_key_here
```

### Step 4: Verify Domain (Optional but Recommended)

For production:
1. Go to Domains → Add Domain
2. Add your custom domain (e.g., pawsforgood.org)
3. Add DNS records they provide
4. Wait for verification (15-30 minutes)

If verified, update email sender in `src/lib/email.ts`:
```typescript
from: 'Paws For Good <noreply@yourdomain.com>'
```

---

## PART 4: Deploy to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Paws For Good"
git branch -M main
git remote add origin https://github.com/yourusername/paws-for-good.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js

### Step 3: Configure Environment Variables

In Vercel project settings → Environment Variables, add:

```
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
NEXT_PUBLIC_SITE_NAME = Paws For Good
RESEND_API_KEY = re_your_actual_key
AMAZON_ASSOCIATE_TAG_US = yourname-20
AMAZON_ASSOCIATE_TAG_UK = yourname-21
NEXT_PUBLIC_CONTACT_EMAIL = support@pawsforgood.org
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Visit your live site at `https://your-project.vercel.app`

---

## PART 5: Post-Deployment Configuration

### Step 1: Add Domain to Amazon Associates

1. Log into Amazon Associates (US and UK)
2. Go to Account Settings → Website List
3. Add your Vercel URL: `https://your-project.vercel.app`
4. Save changes

### Step 2: Test Email Flow

1. Go to your live site
2. Subscribe with a test email
3. Check inbox for welcome email
4. Verify all links work

### Step 3: Test Affiliate Links

1. Click a product on shop page
2. Verify it redirects to Amazon with your tag
3. Check URL contains `?tag=yourname-20` or `?tag=yourname-21`

### Step 4: Add Analytics (Optional)

Vercel Analytics is free and automatic:
1. Go to your Vercel project
2. Navigate to Analytics tab
3. Enable Vercel Analytics
4. No code changes needed!

---

## PART 6: Custom Domain (Optional)

### Step 1: Purchase Domain

Buy from:
- Namecheap
- Google Domains
- GoDaddy
- Any registrar

### Step 2: Add to Vercel

1. Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., pawsforgood.org)
4. Vercel provides DNS records

### Step 3: Configure DNS

At your domain registrar:
1. Add A record: `76.76.21.21`
2. Add CNAME: `cname.vercel-dns.com`
3. Wait 15-60 minutes for propagation

### Step 4: Update Environment Variables

```
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

Redeploy from Vercel dashboard.

---

## PART 7: Ongoing Maintenance

### Monthly Tasks

1. **Generate Impact Report**
   - Calculate total commissions from Amazon dashboard
   - Purchase food and collect receipts
   - Take distribution photos
   - Create PDF report
   - Send via Resend to all subscribers

2. **Update Campaign Progress**
   - Edit `src/app/campaign/page.tsx`
   - Update progress numbers
   - Add new photos
   - Redeploy

3. **Review Analytics**
   - Check Vercel Analytics
   - Monitor email open rates
   - Track popular products

### Adding New Products

Edit `src/lib/products.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Product Name',
  category: 'Category Name',
  price: 29.99,
  image: 'amazon-image-url',
  amazonUrlUS: 'https://www.amazon.com/dp/PRODUCT_ID',
  amazonUrlUK: 'https://www.amazon.co.uk/dp/PRODUCT_ID',
  description: 'Short description',
  trending: true, // optional
}
```

Commit and push to trigger automatic deployment.

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
- Check package.json has all dependencies
- Run `npm install` locally first
- Commit `package-lock.json`

**Error: "Environment variable not found"**
- Double-check all env vars in Vercel dashboard
- Redeploy after adding env vars

### Emails Not Sending

- Verify RESEND_API_KEY is correct
- Check Resend dashboard for error logs
- Ensure API key has send permissions
- Verify sender email domain

### Affiliate Links Not Working

- Check Amazon Associate tags are correct
- Ensure products have both US and UK links
- Verify you're approved in Amazon Associates
- Test links in incognito mode

### Welcome Dog Not Showing

- Check `/public/dog-welcome.gif` exists
- Clear browser cache
- Test in different browser
- Check browser console for errors

---

## Security Checklist

- [ ] Never commit `.env.local` to GitHub
- [ ] Use environment variables for all secrets
- [ ] Keep dependencies updated (`npm update`)
- [ ] Monitor Vercel security alerts
- [ ] Use HTTPS only (automatic with Vercel)
- [ ] Review Resend access logs monthly

---

## Support

If you encounter issues:

1. Check GitHub Issues
2. Review Next.js documentation
3. Check Vercel documentation
4. Email: support@pawsforgood.org

---

## Success Metrics to Track

- Monthly visitors (Vercel Analytics)
- Email subscribers count
- Affiliate clicks
- Commissions earned
- Food purchased (kg)
- Animals fed

Monitor these monthly to measure impact and growth.

---

**Congratulations! Your ethical pet support platform is now live! 🐾**
