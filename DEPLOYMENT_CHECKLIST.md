# Vercel Deployment Guide - Complete Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup

Before deploying, you MUST set these in Vercel Dashboard:

**Required Variables:**
```
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US=pawsforgood-20
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK=pawsforgood-21
```

**Optional Variables:**
```
NEXT_PUBLIC_SITE_NAME=Paws For Good
NEXT_PUBLIC_CONTACT_EMAIL=support@pawsforgood.org
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. File Checklist

Ensure these files exist in your repository:

- [x] `.gitignore` - Prevents committing sensitive files
- [x] `.env.local.example` - Template for environment variables
- [x] `next-env.d.ts` - TypeScript environment definitions
- [x] `next.config.js` - Next.js configuration
- [x] `vercel.json` - Vercel deployment configuration
- [x] `package.json` - Dependencies and scripts
- [x] `tsconfig.json` - TypeScript configuration
- [x] `tailwind.config.js` - Tailwind CSS configuration
- [x] `postcss.config.js` - PostCSS configuration

### 3. Image Assets

The following placeholder SVG files have been created:
- [x] `public/dog-cursor.svg` - Custom cursor (fallback)
- [x] `public/dog-welcome.svg` - Welcome animation (fallback)
- [x] `public/favicon.svg` - Site icon

**Optional GIF upgrades** (download from GIPHY.com):
- [ ] `public/dog-cursor.gif` (32x32px) - Animated cursor
- [ ] `public/dog-welcome.gif` (200x200px) - Animated welcome dog

## 🚀 Deployment Steps

### Step 1: Verify Local Build

```bash
# Install dependencies
npm install

# Run local build test
npm run build

# If successful, start production server locally
npm start
```

**Common Build Errors:**
- Missing dependencies → Run `npm install`
- TypeScript errors → Check `next-env.d.ts` is present
- Environment variable errors → Create `.env.local` from `.env.local.example`

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment setup"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/paws-for-good.git

# Push to GitHub
git push -u origin main
```

### Step 3: Import to Vercel

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js framework
5. Click "Deploy" (it will fail without env vars - that's expected)

### Step 4: Add Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable:
   - Variable name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-project.vercel.app` (update after first deploy)
   - Environment: Production, Preview, Development
3. Repeat for all required variables

**Critical Variables:**
```
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
RESEND_API_KEY=re_your_key_from_resend_dashboard
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US=pawsforgood-20
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK=pawsforgood-21
```

### Step 5: Redeploy

1. Go to Deployments tab
2. Click "Redeploy" on the latest deployment
3. Wait 2-3 minutes for build to complete
4. Visit your live site!

## 🔧 Post-Deployment Configuration

### 1. Get Your Vercel URL

After successful deployment:
1. Copy your Vercel URL (e.g., `https://paws-for-good.vercel.app`)
2. Update `NEXT_PUBLIC_SITE_URL` environment variable with this URL
3. Redeploy

### 2. Setup Amazon Associates

**US Account:**
1. Go to https://affiliate-program.amazon.com/
2. Sign up / Login
3. Add your Vercel URL to "Website List"
4. Get your Associate Tag (e.g., `yourname-20`)
5. Update `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US` in Vercel

**UK Account:**
1. Go to https://affiliate-program.amazon.co.uk/
2. Repeat process
3. Get UK tag (e.g., `yourname-21`)
4. Update `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK` in Vercel

### 3. Setup Email Service (Resend)

1. Go to https://resend.com/signup
2. Create free account
3. Dashboard → API Keys → Create API Key
4. Copy key (starts with `re_`)
5. Update `RESEND_API_KEY` in Vercel
6. Redeploy

**Domain Verification (Optional but Recommended):**
1. Resend Dashboard → Domains
2. Add your custom domain
3. Add DNS records provided by Resend
4. Update `from` email in `src/lib/email.ts`

## 🧪 Testing Your Deployment

### Test Checklist:

1. **Homepage Loads**
   - [ ] Visit your Vercel URL
   - [ ] Check all images load
   - [ ] Verify welcome dog appears
   - [ ] Check custom cursor (desktop only)

2. **Navigation**
   - [ ] Test all menu links
   - [ ] Check mobile menu works
   - [ ] Verify all pages load

3. **Shop Page**
   - [ ] Products display correctly
   - [ ] Category filter works
   - [ ] Affiliate links include correct tags
   - [ ] Region detection works (US/UK)

4. **Email Signup**
   - [ ] Form appears on homepage
   - [ ] Consent checkbox required
   - [ ] Welcome email sends
   - [ ] Unsubscribe link present in email

5. **Legal Pages**
   - [ ] Privacy Policy accessible
   - [ ] Terms of Use loads
   - [ ] Affiliate Disclosure visible
   - [ ] Footer links work

6. **Performance**
   - [ ] Page load speed acceptable
   - [ ] Mobile responsive
   - [ ] Cookie consent appears
   - [ ] Analytics tracking (if enabled)

## 🐛 Common Issues & Fixes

### Issue: "Build Failed - Missing Dependencies"
**Solution:**
```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### Issue: "Environment Variable Not Found"
**Solution:**
1. Vercel Dashboard → Settings → Environment Variables
2. Add missing variable
3. Redeploy from Deployments tab

### Issue: "Images Not Loading"
**Solution:**
1. Check `next.config.js` has correct image domains
2. Verify image URLs are HTTPS
3. Check browser console for errors

### Issue: "Email Not Sending"
**Solution:**
1. Verify `RESEND_API_KEY` is correct
2. Check Resend dashboard for errors
3. Ensure API key has send permissions
4. Test with different email address

### Issue: "Affiliate Links Not Working"
**Solution:**
1. Verify Amazon Associate tags are correct
2. Check you're approved in Amazon Associates
3. Add Vercel URL to Amazon account
4. Test in incognito mode

### Issue: "Welcome Dog Not Showing"
**Solution:**
1. Clear browser cache
2. Open in incognito/private window
3. Check browser console for errors
4. Verify SVG file exists in `/public/`

## 📊 Monitoring Your Site

### Vercel Analytics (Free)
1. Vercel Dashboard → Analytics
2. View page views, performance, and errors
3. No code changes needed

### Optional: Google Analytics
1. Get GA4 tracking ID
2. Add to `NEXT_PUBLIC_GA_ID` env var
3. Redeploy

## 🔄 Making Updates

After initial deployment:

```bash
# Make your changes locally
# Test with npm run dev

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys on push!
```

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Site loads at Vercel URL
- ✅ All pages accessible
- ✅ Products display with correct affiliate links
- ✅ Email signup sends welcome email
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Legal pages accessible

## 📞 Need Help?

1. Check Vercel build logs (Deployments → View Logs)
2. Review browser console errors (F12)
3. Check environment variables are set
4. Verify all files committed to GitHub
5. Test locally with `npm run build`

## 🔐 Security Best Practices

- ✅ Never commit `.env.local` file
- ✅ Use environment variables for all secrets
- ✅ Keep dependencies updated
- ✅ Review Vercel security alerts
- ✅ Use HTTPS only (automatic with Vercel)

---

**Congratulations!** Your Paws For Good platform should now be live! 🐾

Visit: https://your-project.vercel.app
