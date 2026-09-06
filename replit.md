# Jesse Springer: Professional Portfolio

## Project Overview
Multi-page professional portfolio website for Jesse Springer, a Director-level Product leader with deep expertise in payments, crypto, compliance, and rapid prototyping. Features professional credibility with a dedicated Creative Lab showcasing the Jasper Springs AI persona and music NFTs on Solana.

**Status**: In active development
**Last Updated**: January 13, 2026

## Site Architecture

### Routes
- `/` - Professional home page (Jesse Springer)
- `/about` - About Jesse with journey timeline and values
- `/work` - Product & technical work experience
- `/projects` - Side projects and experiments
- `/creative` - Creative Lab (Jasper Springs AI persona)
- `/build-log` - Chronological build log of project updates
- `/contact` - Contact information and opportunities
- `/redeem` - Physical book redemption form

### Two Identity Modes
1. **Professional (Jesse Springer)**: Clean, minimalist, credible presentation for recruiters, founders, and senior product leaders
2. **Creative Lab (Jasper Springs)**: Expressive AI persona exploring music, blockchain, and generative media

### Contact Links
- LinkedIn: https://www.linkedin.com/in/jesse-springer-123642b/
- X (Twitter): https://twitter.com/jessespringer21

## Architecture

### Frontend (React + TypeScript)
- **Framework**: React with Wouter routing
- **Styling**: Tailwind CSS with Shadcn UI components
- **Key Components**:
  - `ProfessionalHeader`: Navigation for professional pages (includes Creative Lab, Build Log)
  - `Header`: Navigation for creative/Jasper Springs pages
  - `ProfessionalHome`: Executive summary, 4 pillars, featured work
  - `Creative`: Full Jasper Springs experience with NFT collection
  - `BuildLog`: Chronological project updates

### Backend (Node.js + Express)
- **Storage**: In-memory (MemStorage) for MVP
- **API Routes**:
  - `/api/nfts` - Fetch music NFT collection
  - `/api/wallet` - Solana wallet operations (mock)
  - `/api/mint` - NFT minting on Solana (mock)
  - `/api/stripe` - Payment processing (mock)

### Blockchain Integration (Planned)
- **Network**: Solana
- **Tools**: @solana/web3.js, Metaplex SDK
- **Features**: NFT minting, wallet connection, transaction tracking

## Featured Projects

### The Energy App
Real-time venue popularity and gamification mobile concept. Users receive notifications when arriving at a venue, rate the energy (thumbs up/thumbs down), and others can view recent high-energy spots nearby. Includes location heatmap UX and user feedback loop concept.

### Jasper Springs AI Persona
AI persona and creative exploration project with music catalog tokenization, NFT utilities, generative persona media, and creative experiments around blockchains and identity.

## Data Model

### MusicNFT
- `id`: UUID
- `title`: Track name
- `artwork`: Album cover image path
- `duration`: Track length (or page count for collectibles)
- `mintNumber`: Edition number
- `priceSOL`: Price in SOL
- `priceUSD`: Price in USD
- `genre`: Music genre (Hip Hop, Rap, R&B) or "Collectible"
- `available`: Mint status
- `solanaAddress`: NFT address on Solana (if minted)
- `audioUrl`: Audio file URL (null for collectibles)
- `album`: Album name
- `trackNumber`: Position in album tracklist (null for collectibles)
- `description`: Description text
- `type`: "track" | "collectible" - differentiates audio vs special editions
- `physicalIncluded`: Boolean - whether physical item ships with NFT
- `editionSize`: Display text for edition limit (e.g., "100 Editions")
- `videoUrl`: Video file URL (for video collectibles like music videos)

### Current Album: "In The Flow"
16-track hip hop album with unique artwork per track:
- Tracks 1-16 with individual PNG artwork in `/client/public/music/artwork/`
- MP3 audio files in `/client/public/music/audio/`
- Album cover and back art also available

## Development Notes

### Current Implementation Status
✅ **Completed Features:**
- **Multi-page architecture** with professional and creative sections
- **Professional Home**: Personalized executive hero with 4 core pillars, featured work cards
- **About Page**: Journey timeline, values, real social links
- **Work Page**: Product and technical experience with achievements
- **Projects Page**: Real project details (Energy App, blockchain prototypes)
- **Creative Lab**: Full Jasper Springs experience with proper framing context
- **Build Log**: Chronological record of project updates
- **Contact Page**: Real LinkedIn/X links and opportunity categories
- **Hero Section**: Dramatic fade/crossfade transformation (real photo ↔ AI cartoon) with glitch effects
- **NFT Collection**: Personalized AI persona artwork across all music NFTs
- **My Rhyme Book Collectible**: Special edition with physical hardcover book
- **Overstand It - Music Video Collectible**: AI-generated animated music video
- **Audio Playback**: Click-to-play functionality with global audio manager
- **Tools & Technologies Section**: AI Development and Creative Production tools displayed
- **Physical Redemption Page**: `/redeem` route for book fulfillment
- Backend API routes for wallet, NFT data, and payment endpoints
- Wallet connection flow with WalletContext state management
- Crypto and Stripe payment flows

### Stripe Integration
**Current Status**: Mock implementation with redirect to Stripe Checkout

**To enable live credit card payments:**
1. **Option A (Recommended)**: Use Replit Stripe connector
2. **Option B**: Manual setup with API keys

### Solana Integration
**Current Status**: Mock wallet generation and NFT minting

**To enable real blockchain functionality:**
1. Install Solana Web3 dependencies
2. Implement real NFT minting using Metaplex
3. Add Solana wallet adapter to frontend

### Testing Results
✅ E2E tests completed successfully:
- All page navigation works correctly
- Personalized content displays on all pages
- Build Log shows chronological entries
- Creative Lab displays Jasper Springs content with proper framing
- Social links point to real profiles

## Folder Structure
```
/client          - React frontend
  /src/pages     - Page components (ProfessionalHome, About, Work, Projects, Creative, BuildLog, Contact)
  /src/components - Reusable components
/server          - Express backend
/onchain         - Solana smart contracts (future)
/metadata        - NFT metadata storage (future)
```

## User Preferences
- Professional, credible aesthetic for business audience
- Creative expressiveness contained in /creative route
- Calm, non-sensational language throughout
- Purple/blue gradient color scheme on creative pages
- Space Grotesk display font for headers
- Building in public on LinkedIn/X
