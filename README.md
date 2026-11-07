# Ali Abdelazim — Performance Marketing Atelier Portfolio

> An art-directed, bilingual personal portfolio and performance showcase for **Ali Abdelazim**, Performance Marketer & Media Buyer.

---

## ✦ Creative Concept & Visual Identity

This portfolio is deliberately designed to stand in stark contrast to generic AI-generated templates and cliché digital marketing websites. Instead of neon gradients, blurry glassmorphism, or fake dashboard screenshots, this site is crafted as an **editorial performance atelier** — marrying the typographic discipline of independent Swiss design publications with the empirical precision of high-scale media buying.

- **Primary Canvas:** Warm Alabaster Chalk (`#F8F7F4`)
- **Primary Ink:** Deep Obsidian Ink (`#111312`)
- **Performance Accent:** International Signal Vermilion (`#EE4D2A`)
- **Typography:**
  - **Latin:** *Plus Jakarta Sans* (Grotesque Headlines & UI), *Instrument Serif* (Editorial Nuance), *JetBrains Mono* (Attribution & Tabular Metrics)
  - **Arabic:** *Alexandria* (Google Fonts geometric sans-serif engineered for digital readability and visual harmony with grotesque Latin typefaces)
- **Bilingual Architecture:** Full native English and Arabic with complete RTL layout mirroring, natural marketing phrasing, and document direction switching.

---

## ✦ Key Features

1. **Editorial Hero Section:**
   - Original positioning headline: *"Engineering Demand. Measured in Returns."*
   - Live Cairo local time (`UTC+2`) and real-time project availability indicator.
   - Live Media Buyer Attribution Telemetry (Meta Event Match Score, CBO Advantage+ status, 14-day creative fatigue cycle).
   - High-impact verified metric counters ($180K+ spend, 3.6x blended ROAS, -34% CPA reduction, 140+ ad sets).

2. **Continuous Editorial Ticker:**
   - Seamless running discipline ticker highlighting core competencies in both languages.

3. **Strategic Philosophy & Mindset (About Me):**
   - Natural, human, jargon-free explanation of Ali's behavioral economics approach to media buying.
   - 3 Core Operating Axioms: The Creative Testing Engine, Attribution & Data Integrity, and Commercial Unit Economics.
   - Transparency Standard commitment.

4. **Verified Deep Case Studies & Interactive Modal:**
   - **Case 01:** Scaling an Apparel & Lifestyle Brand from $4K to $22K/mo at 3.84x ROAS (Advantage+ Shopping, UGC creative matrix).
   - **Case 02:** Slashing Cost Per Lead by 58% for an Executive Professional Certification Program (Two-step qualifying funnel, CAPI tracking).
   - **Case 03:** Generating $140K+ in Closed Client Contracts from $5.2K Meta Ad Spend (High-ticket geo-fencing, WhatsApp screening).
   - **Interactive Modal:** Deep-dive modal with dedicated tabs for Overview & Challenge, Funnel Architecture, Creative Testing Matrix, and Results & Learnings.

5. **Discipline & Core Capabilities:**
   - 6 detailed capability modules covering Meta Ads Architecture, Creative Testing & Fatigue, CAPI Tracking Rigor, Funnel Strategy & CRO, Audience Segmentation, and Analytics & Reporting.
   - Interactive split view with real deliverables and execution scopes.

6. **7-Stage Working Methodology:**
   - Structured interactive sequence from Stage 01 (Research & Discovery) to Stage 07 (Performance Reporting & Iteration) with specific phase deliverables.

7. **Interactive Unit Economics & ROAS Simulator:**
   - Interactive tool allowing founders and marketing directors to model Monthly Ad Spend, Average Order Value (AOV), Conversion Rate, and Target ROAS to project required CPA, required CPC, customer volume, and net contribution margin.

8. **Professional Journey & Timeline:**
   - Verified 2-year timeline presenting Ali's real-world media buying experience and certifications with integrity.

9. **High-Conversion Contact & Growth Audit Form:**
   - One-click copy email button with instant feedback.
   - Direct WhatsApp routing with pre-filled growth consultation message.
   - Interactive audit intake form with budget selector and business objective dropdown.

---

## ✦ Tech Stack & Architecture

- **Frontend Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS 3.4 with custom editorial design tokens
- **Icons:** Lucide React
- **Deployment Target:** Netlify (Zero-configuration with `netlify.toml` pre-configured for SPA routing and asset caching)

---

## ✦ Getting Started & Local Development

### Prerequisites
- Node.js (v18 or higher, tested on v26)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository and navigate into the folder
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
This compiles optimized static assets into the `dist/` directory.

### Previewing the Production Build
```bash
npm run preview
```

---

## ✦ How to Deploy on Netlify

### Option 1: Automatic Git Deployment (Recommended)
1. Push this repository to GitHub or GitLab.
2. Log in to [Netlify](https://www.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your repository.
5. Netlify will automatically detect `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**.

### Option 2: Drag and Drop Manual Deployment
1. Run `npm run build` locally.
2. Drag and drop the generated `dist/` folder directly into the Netlify Dashboard.

---

## ✦ How Ali Can Update Content

All content (text, case studies, metrics, capabilities, methodology steps, and contact details) is centralized in a clean, maintainable TypeScript file:

👉 `src/data/content.ts`

To update any text or add a new case study:
1. Open `src/data/content.ts`.
2. Locate the corresponding section under `en` (English) or `ar` (Arabic).
3. Modify the text, metrics, or tags.
4. Run `npm run build` to update the production bundle.

---

## ✦ Checklist of Information Ali Should Personalize

Before launching publicly, Ali should review and update the following placeholders in `src/data/content.ts`:

- [x] **Contact Email:** Integrated (`ali.performance.ads@gmail.com`).
- [x] **WhatsApp Phone Number:** Integrated (`+20 155 322 4824` / `wa.me/201553224824`).
- [x] **LinkedIn Profile URL:** Integrated (`https://linkedin.com/in/ali-abdelazim`).
- [ ] **Custom Domain:** Link `aliabdelazim.com` or chosen domain in Netlify DNS settings.
- [ ] **Optional Personal Headshot:** If Ali wishes to add a portrait photo in the About section, place it in `public/` and reference it.

---

## ✦ License & Ownership

Designed and engineered for **Ali Abdelazim**. All rights reserved. © 2026.
