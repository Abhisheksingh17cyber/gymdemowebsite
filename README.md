# IRONFORGE GYM - Premium Fitness Website

A modern, professional gym website built with Next.js 14, TypeScript, Tailwind CSS, and Three.js for 3D animations.

## 🏋️ Features

- **Modern Design**: Premium dark theme with red and gold accents
- **8+ Pages**: Home, About, Programs, Classes, Trainers, Pricing, Gallery, Blog, Contact
- **3D Animation**: Interactive bicep curl demonstration using Three.js
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ironforge-gym.git
cd ironforge-gym
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: Git Integration

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── programs/page.tsx   # Programs page
│   ├── classes/page.tsx    # Classes/Schedule page
│   ├── trainers/page.tsx   # Trainers page
│   ├── pricing/page.tsx    # Pricing page
│   ├── gallery/page.tsx    # Gallery page
│   ├── blog/page.tsx       # Blog page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── BicepCurlAnimation.tsx # 3D animation component
└── styles/
    └── globals.css         # Global styles
```

## ✨ Pages

1. **Home**: Hero section with 3D animation, stats, programs preview, testimonials
2. **About**: Company story, timeline, values, leadership team
3. **Programs**: Training programs with features and pricing
4. **Classes**: Interactive weekly schedule with booking
5. **Trainers**: Team profiles with specialties and social links
6. **Pricing**: Membership plans with comparison table and FAQs
7. **Gallery**: Filterable image gallery with lightbox
8. **Blog**: Articles with categories and newsletter signup
9. **Contact**: Contact form, map, and quick contact options

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary: Red (#dc2626)
- Accent: Gold (#f59e0b)
- Background: Dark (#0a0a0a)

### Fonts
The site uses:
- Display: Oswald
- Body: Roboto
- Sans: Inter

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
