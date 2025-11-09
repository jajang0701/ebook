# Design Guidelines: Ebook Landing Page - "Cara Keluar dari Judi Online"

## Design Approach

**Reference-Based Approach:** Drawing inspiration from high-converting Indonesian digital product sales pages (Tokopedia's urgency patterns, Shopee's social proof density) combined with Western conversion-optimized landing pages (ClickFunnels, Russell Brunson style).

**Core Principle:** Emotional storytelling with aggressive conversion optimization - every section drives toward the purchase decision.

**Color Psychology Strategy:**
- **Primary Red (#DC2626 to #EF4444):** Urgency, action, stopping pain
- **Gold/Yellow Accents (#F59E0B to #FBBF24):** Wealth, success, transformation
- **Dark backgrounds (#1F2937, #111827):** Premium feel, focus on content
- **White/Light sections:** Testimonials, trust-building areas

## Typography

**Font Selection:**
- Headlines: **Inter Bold/Black** (800-900 weight) - modern, impactful, readable in Indonesian
- Body: **Inter Regular/Medium** (400-500 weight) - clean, professional
- Numbers/Stats: **Inter Bold** with larger sizing for emphasis

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (bold, attention-grabbing)
- Section Headers: text-3xl md:text-4xl lg:text-5xl
- Subheadings: text-xl md:text-2xl
- Body Text: text-base md:text-lg (optimized for readability)
- Testimonial Names: text-lg font-semibold
- CTAs: text-lg md:text-xl font-bold (uppercase for urgency)

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 (consistent rhythm)
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: gap-6 md:gap-8
- Container max-width: max-w-7xl for full sections, max-w-4xl for reading content

**Grid Strategy:**
- Hero: Single column, centered
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features/Benefits: grid-cols-1 md:grid-cols-2
- Before/After: Two-column comparison on desktop, stacked mobile
- FAQ: Single column, max-w-3xl centered

## Component Library

### 1. Hero Section (Full viewport with image)
- Full-width background image (gambling chips transforming to forex charts, dark overlay)
- Centered content with max-w-4xl
- Headline with red-to-gold gradient text effect
- Subheadline emphasizing transformation ("Dari Rugi Ratusan Juta ke Profit Konsisten $10,000")
- Dual CTA buttons: Primary (Red, "DAPATKAN EBOOK SEKARANG"), Secondary (Outline gold, "Lihat Testimoni")
- Trust badges below CTAs: "✓ 2000+ Sudah Berubah" "✓ Panduan Lengkap" "✓ Gratis Konsultasi"

### 2. Pain Point Section (Dark background)
- Grid of 4 pain points with red warning icons
- Emotional copywriting: "Gaji Habis Sebelum Tanggal 15?", "Bohong ke Keluarga Jadi Kebiasaan?"
- Each card has subtle red border-left accent
- Stats overlay: "78% Penjudi Online Depresi" (fabricated for impact)

### 3. Solution Preview Section (Light background)
- 2-column layout: Left (eBook mockup image), Right (bullet points of what's inside)
- Gold checkmark icons for each chapter
- "Bukan Teori Kosong - Langkah Praktis dari Pengalaman Nyata" tagline
- Embedded "Lihat Daftar Isi Lengkap" expandable component

### 4. Testimonial Section (White/light gray background)
- 6 testimonial cards in 3-column grid
- Each card: Profile photo (stock images of Indonesian people), Name, Age, Location, Quote, Result ($-amount)
- Use specific numbers: "Profit $12,847 dalam 6 bulan", "Keluar dari hutang 180 juta"
- 5-star ratings below each testimonial
- Screenshots of trading results (blurred for authenticity)

### 5. Before/After Transformation (Dramatic split design)
- Two-column comparison with dark divider
- Left (red tint): "DULU" - debt numbers, depression stats, broken relationships
- Right (gold tint): "SEKARANG" - profit numbers, mental health, family restored
- Visual contrast with icons and bold typography

### 6. Urgency/Scarcity Section (Red gradient background)
- Countdown timer (fictional deadline: "Promo Berakhir Dalam")
- "HANYA 50 SLOT TERSISA HARI INI" with live counter animation
- Bonus stack visualization: Main eBook + Bonus Template Strategi + Akses Grup Support
- Strikethrough original price (Rp 497.000) → Promo price (Rp 97.000)

### 7. OrderOnline Form Section (Seamless integration)
- Embedded within clean white container
- Section headline: "Investasi Terkecil untuk Perubahan Terbesar"
- Form wrapper with subtle shadow and border
- Trust badges above form: "🔒 Pembayaran Aman", "📱 Akses Instant", "💯 Garansi 7 Hari"

### 8. FAQ Section (Light background)
- Accordion-style expandable questions
- 8-10 questions addressing: Apakah ini scam?, Berapa modal trading?, Apa bedanya dengan judi?, etc.
- Each answer includes reassurance and mini-CTA

### 9. Final CTA Section (Dark with gold accents)
- Large centered CTA: "UBAH HIDUPMU SEKARANG - KLIK DI SINI"
- Money-back guarantee badge: "Garansi Uang Kembali 100% dalam 7 Hari"
- Urgency reminder: "Jangan sampai menyesal besok ketika harga naik"

### 10. Floating Elements
- Sticky bottom CTA bar (mobile): Red button "BELI SEKARANG - Rp 97K"
- Floating WhatsApp button (green): "Tanya Admin" with chat bubble animation

## Images Strategy

**Hero Section:** 
Large, dramatic image showing contrast - left side: person stressed with gambling apps, right side: same person confident with laptop showing forex charts. Dark overlay (opacity-60) for text readability.

**Ebook Mockup:**
3D rendered image of ebook cover with title clearly visible, slight shadow effect, angled perspective.

**Testimonial Photos:**
6 stock photos of diverse Indonesian individuals (ages 25-40, mix of genders, casual professional attire). Images should feel authentic, not overly polished.

**Before/After Graphics:**
Split-screen imagery - gambling apps/debt collectors on "before" side, trading platform with green profits on "after" side.

**Trust Badges:**
Small icon graphics for security, instant access, guarantee - simple line icons with brand colors.

## Micro-interactions

- CTA buttons: Scale on hover (scale-105), shadow expansion
- Testimonial cards: Lift effect on hover (translate-y slight)
- Countdown timer: Pulse animation on numbers
- Form fields: Border color change to gold on focus
- FAQ accordions: Smooth height transitions
- Scroll-triggered fade-ins for testimonials and stats

## Mobile Optimization

- Single column layouts throughout
- Sticky header with mini-CTA collapses on scroll
- Larger touch targets (min 48px) for all buttons
- Simplified hero with shorter headline
- Testimonials show 1 per row with horizontal scroll option
- Form fills full width with larger input fields

**Key Conversion Elements:**
Multiple CTAs every 2-3 scrolls, social proof density (testimonials, stats, trust badges), scarcity throughout (countdown, limited slots), risk reversal (guarantee), emotional storytelling (pain → solution → transformation).