# SparkTech Trading Website - Deployment Guide

This guide covers different deployment options for the SparkTech Trading website.

## 🚀 Quick Start

1. **Setup the project:**
```bash
chmod +x setup.sh
./setup.sh
```

2. **Run development server:**
```bash
npm run dev
```

3. **Visit:** http://localhost:3000

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best experience for Next.js applications:

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Environment Variables:**
   Add these in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Your contact email
   - `NEXT_PUBLIC_CONTACT_PHONE`: Your phone number

### 2. Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Create netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

1. **Add to package.json:**
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

2. **Deploy:**
```bash
npm run export
# Push the 'out' folder to gh-pages branch
```

### 4. Traditional Web Hosting

1. **Build static site:**
```bash
npm run build
```

2. **Upload contents of `.next/static` and `out` folders to your web server**

### 5. Docker Deployment

1. **Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and run:**
```bash
docker build -t sparktech-website .
docker run -p 3000:3000 sparktech-website
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=spartech77@gmail.com
NEXT_PUBLIC_CONTACT_PHONE="+971 XX XXX XXXX"
```

### Custom Domain

1. **Update site URL** in environment variables
2. **Update sitemap.ts** with your domain
3. **Update manifest.ts** with your domain
4. **Configure DNS** to point to your hosting provider

### Analytics (Optional)

Add Google Analytics:

1. **Get tracking ID** from Google Analytics
2. **Add to environment variables:**
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. **Add tracking code** to `app/layout.tsx`

### Form Handling

For contact forms, consider using:
- **Formspree**: Easy form handling service
- **Netlify Forms**: Built-in form handling
- **Custom API**: Build your own form handler

## 📊 Performance Optimization

### Images
- Use WebP format when possible
- Optimize images before upload
- Use Next.js Image component for automatic optimization

### Fonts
- Google Fonts are pre-loaded for performance
- Consider using font-display: swap for better loading

### Bundle Size
```bash
npm run build
# Check bundle analyzer output
```

## 🔍 SEO Checklist

- ✅ Meta tags configured
- ✅ Open Graph tags added  
- ✅ Sitemap.xml generated
- ✅ Robots.txt created
- ✅ Structured data (JSON-LD)
- ✅ Mobile-friendly design
- ✅ Fast loading speed

## 🚨 Pre-deployment Checklist

- [ ] Update contact information
- [ ] Replace placeholder content
- [ ] Add real images
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test performance with Lighthouse
- [ ] Setup analytics
- [ ] Configure error monitoring
- [ ] Test in different browsers

## 🔒 Security

- Enable HTTPS (automatic with most hosting providers)
- Set proper security headers
- Regular dependency updates
- Monitor for vulnerabilities

## 📞 Support

For deployment support:
- Check the hosting provider's documentation
- Review Next.js deployment docs
- Contact your development team

---

**SparkTech Trading FZCO**
Dubai Silicon Oasis, UAE
spartech77@gmail.com