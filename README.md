# NRG Radio Uganda - Countdown Timer Website

A sleek, professional countdown timer website for NRG Radio Uganda featuring a 12-hour countdown with auto-restart functionality.

## 🎯 Features

- **12-Hour Countdown Timer** - Counts down from 12 hours and auto-restarts
- **Professional Design** - NRG Radio branding with red/black color scheme
- **Responsive Layout** - Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Hover effects, transitions, and visual feedback
- **Auto-Restart** - Automatically starts a new countdown when completed
- **Ultra-Lightweight** - Only 1.4 kB main page, fast loading
- **No Distractions** - Clean countdown-only experience

## 🚀 Live Demo

**Production URL:** https://website-r5fud6oxs-olaropetercelestines-projects.vercel.app

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics

## 📱 How It Works

1. **Page loads** → Shows 12-hour countdown timer
2. **Countdown runs** → Timer counts down with smooth animations
3. **Countdown completes** → Shows "Website is Live!" celebration message
4. **Auto-restarts** → Immediately starts a new 12-hour countdown
5. **Never shows website** → Only countdown timer is visible

## 🎨 Design Features

- **Animated clock icon** with spinning effect
- **Pulsing title text** for attention
- **Hover effects** on time display boxes
- **Progress bar** showing countdown progress
- **Gradient backgrounds** and shadows
- **Mobile-optimized** responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OlaroPeterCelestine/nrg-countdown-timer.git
cd nrg-countdown-timer
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

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main countdown timer page
│   └── layout.tsx            # Root layout (no player components)
├── components/
│   └── CountdownTimer.tsx    # Countdown timer component
└── globals.css               # Global styles
```

## 🎯 Key Components

### CountdownTimer Component
- Real-time countdown calculation
- Auto-restart functionality
- Responsive design
- Professional styling
- Completion celebration

### Main Page
- Clean, minimal structure
- Only countdown timer visible
- No other website content
- Optimized for performance

## 🔧 Customization

### Change Countdown Duration
Edit the countdown duration in `src/app/page.tsx`:
```typescript
const twelveHoursFromNow = now + (12 * 60 * 60 * 1000) // 12 hours
```

### Modify Styling
Update colors and styling in `src/components/CountdownTimer.tsx`:
- Change color scheme
- Modify animations
- Adjust responsive breakpoints

## 📊 Performance

- **Bundle Size:** 1.4 kB (main page)
- **First Load JS:** 117 kB
- **Build Time:** ~2.5s
- **Lighthouse Score:** 95+ (Performance)

## 🚀 Deployment

The website is automatically deployed to Vercel on every push to the main branch.

### Manual Deployment
```bash
npx vercel --prod
```

## 📝 License

This project is part of NRG Radio Uganda's digital presence.

## 🤝 Contributing

This is a specialized countdown timer for NRG Radio Uganda. For modifications or improvements, please contact the development team.

## 📞 Contact

**NRG Radio Uganda**
- Website: [Live Countdown Timer](https://website-r5fud6oxs-olaropetercelestines-projects.vercel.app)
- Location: Nakasero, Kampala, Uganda

---

*Built with ❤️ for NRG Radio Uganda - The Number One Name in Music*