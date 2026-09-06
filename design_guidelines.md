# Design Guidelines: Jasper Springs: On Chain

## Design Approach

**Reference-Based Approach** drawing from:
- **NFT Platforms**: Magic Eden, OpenSea (grid layouts, metadata display, wallet integration)
- **Music Platforms**: Spotify, SoundCloud (audio players, track listings)
- **Web3 Portfolio**: Foundation, Zora (artistic flair, blockchain connectivity)
- **Hip Hop Aesthetic**: Bold typography, vibrant gradients, urban energy

**Core Principle**: Fusion of street art culture with cutting-edge web3 technology, showcasing both artistic expression and technical expertise.

## Typography

**Primary Font**: "Inter" or "DM Sans" (modern, clean, tech-forward)
**Accent Font**: "Space Grotesk" or "Bebas Neue" (bold headlines, hip hop energy)

**Hierarchy**:
- Hero Headlines: 4xl-6xl, bold weight, tight letter-spacing
- Section Headers: 3xl-4xl, semibold
- Body Text: base-lg, regular weight
- Metadata/Labels: sm-xs, medium weight, uppercase tracking

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, gap-12, py-16, py-24)

**Container Strategy**:
- Full-width hero: w-full with max-w-7xl inner content
- Content sections: max-w-6xl centered
- Grid layouts: 1-2-3 column responsive (mobile-tablet-desktop)

## Core Sections & Components

### 1. Hero Section (80vh)
- Large animated cartoon AI persona illustration (center or left-aligned)
- Bold typographic introduction: "Jasper Springs" + tagline about AI x Hip Hop x Blockchain
- Dual CTA buttons: "Connect Wallet" + "Explore Music"
- Floating wallet address display badge (top-right)
- Subtle gradient background with geometric patterns

### 2. About/Journey Section
- Two-column layout: Image (persona variations) + Text (story)
- Timeline component showing evolution of skills
- Social proof indicators: LinkedIn/X follower counts, project milestones
- Call-to-action: "Follow the Journey" with social links

### 3. Music NFT Collection
- Masonry or grid layout (3-4 columns desktop, 2 tablet, 1 mobile)
- NFT Cards featuring:
  - Album/track artwork
  - Title, duration, mint number
  - Metadata badges (Solana network, rarity)
  - Dual action buttons: "Buy with Crypto" + "Buy with Card"
  - Audio preview play button overlay
- Filtering options: All, Minted, Available, Genre

### 4. Payment Integration UI
- Modal/overlay for checkout
- Tab switcher: Crypto Payment | Credit Card
- Crypto tab: Wallet connection status, SOL/USDC price display, transaction preview
- Stripe tab: Clean card input form
- Clear pricing, gas fee estimates, security badges

### 5. Portfolio Showcase
- Three-column grid: Product Management + Blockchain + Music
- Project cards with images, descriptions, tech stack tags
- "Skills Demonstrated" section with progress indicators
- LinkedIn recommendation snippets

### 6. Footer
- Newsletter signup: "Join the Journey"
- Quick links: Music, Portfolio, Smart Contract, Docs
- Social media icons (LinkedIn, X, Solana Explorer link)
- Wallet connection status
- "Built with Solana + Stripe + AI" badge

## Component Library

**Buttons**:
- Primary: Rounded-lg, bold text, px-8 py-4
- Secondary: Outlined variant
- Icon buttons: Circular for social media, square for actions
- Wallet connect: Special styling with wallet icon

**Cards**:
- NFT Cards: Rounded-xl, shadow-lg, hover lift effect
- Feature Cards: Rounded-lg, border subtle
- Testimonial/Proof Cards: Compact, rounded-md

**Navigation**:
- Sticky header with transparent-to-solid on scroll
- Logo (Jasper Springs wordmark + cartoon icon)
- Nav links: Music, Portfolio, About, Connect
- Wallet status indicator (always visible)

**Audio Player**:
- Embedded mini-player (Spotify-inspired)
- Waveform visualization
- Play/pause, progress bar, volume
- Track info display

**Modals/Overlays**:
- Wallet connection modal (list of supported wallets)
- Payment checkout modal
- NFT detail view
- Dark backdrop with blur

**Data Display**:
- Blockchain transaction status (pending/confirmed/failed)
- NFT metadata tables
- Pricing tiers comparison

## Visual Treatment

**Gradients**: Use sparingly in hero and card backgrounds (purple-to-blue, orange-to-pink for hip hop energy)

**Borders**: Subtle borders on cards (1px), thicker accent borders on active states (2-3px)

**Shadows**: Layered shadows for depth - sm for subtle, lg for emphasis, xl for modals

**Icons**: Heroicons via CDN for UI elements, custom Solana/crypto icons via placeholder comments

## Images

**Large Hero Image**: YES - Cartoon AI persona illustration (custom artwork or commissioned)
- Placement: Hero section, either centered or left-aligned with text on right
- Style: Vibrant, colorful cartoon/vector art reflecting hip hop culture and tech aesthetic
- Background: Gradient or abstract geometric pattern

**Additional Images**:
- Album/track artwork for each NFT (music covers)
- Portfolio project screenshots
- Behind-the-scenes photos of music production
- Persona variations (different outfits/poses) for About section

**Image Treatment**: Rounded corners (rounded-xl for large images, rounded-lg for thumbnails), subtle shadow overlays for text readability

## Animations

**Minimal & Purposeful**:
- Hero persona: Subtle float/breathing animation
- Wallet connection: Success confirmation pulse
- NFT card hover: Gentle lift + shadow increase
- Payment success: Checkmark animation
- NO scroll-triggered effects, NO parallax, NO auto-playing carousels