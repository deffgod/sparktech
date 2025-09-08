# SparkTech Trading Website

A modern, responsive corporate website for SparkTech Trading FZCO, built with Next.js 14 and the latest web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with Apple-inspired mobile menu
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Animations**: Smooth animations using Framer Motion
- **TypeScript**: Fully typed for better development experience
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Radix UI primitives

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sparktech-trading-website.git
cd sparktech-trading-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your actual configuration values.

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
sparktech/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── services.tsx      # Services section
│   ├── contact.tsx       # Contact section
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Tailwind utilities
└── public/              # Static assets
```

## 🎨 Components

### Header
- Responsive navigation with mobile menu
- Apple-inspired design with backdrop blur
- Smooth scroll navigation
- Animated mobile overlay

### Hero
- Gradient background with animated blobs
- Call-to-action buttons
- Company statistics
- Feature highlights with icons

### About
- Company information and mission
- Interactive feature cards
- Banking and contact details
- Animated on scroll

### Services
- Six main service categories
- Interactive service cards
- Process timeline
- Call-to-action section

### Contact
- Contact form with validation
- Company contact information
- Banking details
- Leadership team

### Footer
- Company information
- Quick links
- Social media links
- Scroll to top button

## 📱 Mobile Experience

The website features a native app-like mobile experience with:
- Apple-inspired mobile menu animation
- Backdrop blur effects
- Smooth transitions
- Touch-friendly interface
- Optimized performance on mobile devices

## 🎯 SEO & Performance

- Server-side rendering with Next.js
- Optimized images with Next.js Image component
- Meta tags and Open Graph data
- Semantic HTML structure
- Fast loading times
- Mobile-first approach

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` and `globals.css`.

### Content
Modify component content in the respective component files in the `components/` directory.

### Styling
The project uses Tailwind CSS utility classes. Custom styles can be added to `globals.css`.

## 📄 Company Information

SparkTech Trading FZCO is a Dubai-based international trading company specializing in:
- Mobile Phones & Accessories
- Power Generation Equipment
- Household Appliances
- Electronics & Appliances
- Clothing & Personal Items
- Vehicle Trading

**Address**: Dubai Silicon Oasis, Techno Hub 2, 66th Street, Nr 20, B224-1, Nad Al Hessa, Dubai, UAE
**Bank**: First Abu Dhabi Bank
**SWIFT**: NBADAEAA

## 🚀 Deployment

### Quick Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/sparktech-trading-website)

1. Fork this repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy with one click

### Manual Deployment

1. Push your code to GitHub
2. Connect your repository to your hosting provider
3. Set environment variables
4. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📞 Support

For any questions or support, please contact:
- Email: spartech77@gmail.com
- Phone: +971 XX XXX XXXX

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software belonging to SparkTech Trading FZCO.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ for SparkTech Trading FZCO