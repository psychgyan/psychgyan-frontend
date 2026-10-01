# PsychGyan Frontend

High-converting frontend application for PsychGyan Live Masterclass and confirmed Registration Thank You page. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🌟 Pages & Features

- **Landing Page (`/`)**: High-converting masterclass landing page with video teaser, learnings breakdown, bonus vouchers, and a fixed bottom registration CTA dock.
- **Thank You Page (`/thankyou`)**: Post-payment confirmation page with VIP WhatsApp Community invite popup, Psychometric test trigger, and session summary.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and set your URLs:
```env
# Payment Gateway Link (Razorpay, Instamojo, Cosmofeed, etc.)
NEXT_PUBLIC_PAYMENT_URL=https://your-payment-link.com

# VIP WhatsApp Community Invite Link
NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL=https://chat.whatsapp.com/YOUR_COMMUNITY_LINK

# Psychometric Test Link
NEXT_PUBLIC_PSYCHOMETRIC_TEST_URL=https://your-psychometric-test-link.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
src/
├── app/                  # Next.js App Router (pages & metadata)
│   ├── layout.tsx        # Global Layout & Fonts
│   ├── page.tsx          # Landing Page Route (/)
│   ├── thankyou/         # Thank You Page Route (/thankyou)
│   ├── thank-you/        # Thank You Alias Route (/thank-you)
│   ├── not-found.tsx     # 404 handler
│   └── globals.css       # Global styles & keyframe animations
│
├── features/             # Feature-based domain modules
│   ├── landing/          # Landing Page components, data & types
│   └── thankyou/         # Thank You Page components, data & types
│
├── components/           # Reusable UI primitives
│   └── ui/               # Badge, Button, PulseDot, StickyCtaDock
│
└── lib/                  # Utilities & config loader
    ├── config.ts         # Environment variables helper
    └── utils.ts          # Class merging utility (clsx + twMerge)
```
