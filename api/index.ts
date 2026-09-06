/**
 * Vercel Serverless Function entry point.
 *
 * DEMO / PROTOTYPE NOTE: This is intentionally a single self-contained file with
 * no imports from /server, /shared, or path aliases (@/, @shared/), and no
 * zod/drizzle dependencies. Everything here is mock data for portfolio demo
 * purposes only — there is no real Solana wallet, no real Stripe checkout, and
 * no real database. Keeping it self-contained avoids TypeScript path-alias and
 * ESM/CommonJS resolution issues that Vercel's Node function bundler can choke
 * on, since those don't matter for a demo that isn't wired to real services.
 */
import express, { type Request, type Response, type NextFunction } from "express";
import { randomBytes, randomUUID } from "crypto";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

type MusicNFT = {
  id: string;
  title: string;
  artwork: string;
  duration: string;
  mintNumber: string;
  priceSOL: string;
  priceUSD: string;
  genre: string;
  available: boolean;
  solanaAddress: string | null;
  audioUrl: string | null;
  videoUrl: string | null;
  videoProvider?: "youtube" | "vimeo" | null;
  videoId?: string | null;
  album: string | null;
  trackNumber: string | null;
  description: string | null;
  royaltyShare: string | null;
  type: string;
  physicalIncluded: boolean;
  editionSize: string | null;
};

const ROYALTY_DESC =
  "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.";

const TRACKS: Array<[string, string, string, string, string, string, string]> = [
  // [title, artworkSlug, mp3Slug, duration, mintNumber, priceSOL, priceUSD, genre] -- see loop below for genre
  ["In The Flow Intro", "01-in-the-flow-intro", "0:58", "001", "0.25", "35", "Hip Hop"],
  ["Elevated Thinking", "02-elevated-thinking", "3:01", "002", "0.5", "75", "Hip Hop"],
  ["In The Flow", "03-in-the-flow", "2:55", "003", "0.75", "110", "Hip Hop"],
  ["Kinetic", "04-kinetic", "3:19", "004", "0.6", "85", "Rap"],
  ["She Melts Me Away", "05-she-melts-me-away", "2:46", "005", "0.55", "80", "R&B"],
  ["The Maestro", "06-the-maestro", "3:29", "006", "0.65", "95", "Hip Hop"],
  ["Love You Lovin' You", "07-love-you-lovin-you", "1:43", "007", "0.4", "55", "R&B"],
  ["Everybody Wants It", "08-everybody-wants-it", "2:40", "008", "0.5", "75", "Hip Hop"],
  ["'Round We Go", "09-round-we-go", "3:00", "009", "0.55", "80", "Hip Hop"],
  ["On The Rocks", "10-on-the-rocks", "3:09", "010", "0.6", "85", "Hip Hop"],
  ["Dream Catcher", "11-dream-catcher", "3:24", "011", "0.65", "95", "Hip Hop"],
  ["The Past Was The Present", "12-the-past-was-the-present", "2:52", "012", "0.55", "80", "Hip Hop"],
  ["Silver Linings", "13-silver-linings", "3:18", "013", "0.6", "85", "Hip Hop"],
  ["No Apologies", "14-no-apologies", "3:34", "014", "0.65", "95", "Rap"],
  ["Time To Flex On 'Em", "15-time-to-flex", "3:37", "015", "0.7", "100", "Rap"],
  ["Defy The Odds", "16-defy-the-odds", "2:38", "016", "0.75", "110", "Hip Hop"],
] as any;

function buildMockNFTs(): MusicNFT[] {
  const cacheBust = Date.now();
  const nfts: MusicNFT[] = TRACKS.map((t: any) => {
    const [title, slug, duration, mintNumber, priceSOL, priceUSD, genre] = t;
    return {
      id: randomUUID(),
      title,
      artwork: `/music/artwork/${slug}.png?v=${cacheBust}`,
      duration,
      mintNumber,
      priceSOL,
      priceUSD,
      genre,
      available: true,
      solanaAddress: null,
      audioUrl: `/music/audio/${slug}.mp3`,
      videoUrl: null,
      album: "In The Flow",
      trackNumber: mintNumber,
      description: ROYALTY_DESC,
      royaltyShare: "50",
      type: "track",
      physicalIncluded: false,
      editionSize: null,
    };
  });

  nfts.push({
    id: randomUUID(),
    title: "My Rhyme Book",
    artwork: `/assets/My%20Rhyme%20Book%20-%20Jasper%20Springs%20Cover_1764279761481.png?v=${cacheBust}`,
    duration: "157 pages",
    mintNumber: "SPECIAL-001",
    priceSOL: "2.5",
    priceUSD: "350",
    genre: "Collectible",
    available: true,
    solanaAddress: null,
    audioUrl: null,
    videoUrl: null,
    album: null,
    trackNumber: null,
    description:
      "The complete Jasper Springs lyric anthology. Song lyrics over album art for every song ever created, with context and origin stories. Physical coffee table book shipped to your door.",
    royaltyShare: null,
    type: "collectible",
    physicalIncluded: true,
    editionSize: "100 Editions",
  });

  nfts.push({
    id: randomUUID(),
    title: "Overstand It - Music Video",
    artwork: `/assets/In%20The%20Flow%20Album%20Cover_1764044252337.png?v=${cacheBust}`,
    duration: "3:42",
    mintNumber: "SPECIAL-002",
    priceSOL: "1.5",
    priceUSD: "200",
    genre: "Collectible",
    available: true,
    solanaAddress: null,
    audioUrl: null,
    videoUrl: null,
    videoProvider: "youtube",
    videoId: "e4ZVmdWuWkI",
    album: "In The Flow",
    trackNumber: null,
    description:
      "Exclusive animated music video featuring Jasper Springs' AI persona. A unique visual journey through the world of 'Overstand It' - where hip hop meets cutting-edge AI animation.",
    royaltyShare: null,
    type: "collectible",
    physicalIncluded: false,
    editionSize: "50 Editions",
  });

  return nfts;
}

// In-memory store — resets on cold start, which is fine for a demo prototype.
let musicNFTs: MusicNFT[] = buildMockNFTs();

// ---------- NFT routes ----------
app.get("/api/nfts", (_req: Request, res: Response) => {
  res.json({ success: true, nfts: musicNFTs });
});

app.get("/api/nfts/:id", (req: Request, res: Response) => {
  const nft = musicNFTs.find((n) => n.id === req.params.id);
  if (!nft) {
    return res.status(404).json({ success: false, error: "NFT not found" });
  }
  res.json({ success: true, nft });
});

// ---------- Mock wallet routes (demo only — no real Solana calls) ----------
app.post("/api/wallet/generate", (_req: Request, res: Response) => {
  const mockPublicKey = randomBytes(32).toString("hex").slice(0, 44);
  res.json({
    success: true,
    wallet: {
      publicKey: mockPublicKey,
      message: "Wallet generated successfully. This is a demo — no real wallet was created.",
    },
  });
});

app.get("/api/wallet/balance/:address", (_req: Request, res: Response) => {
  const mockBalance = (Math.random() * 10).toFixed(4);
  res.json({ success: true, balance: mockBalance, currency: "SOL" });
});

// ---------- Mock Stripe routes (demo only — no real Stripe calls) ----------
app.post("/api/stripe/create-checkout", (req: Request, res: Response) => {
  const { nftId, priceUSD, title } = req.body || {};
  if (!nftId || !priceUSD || !title) {
    return res.status(400).json({ success: false, error: "nftId, priceUSD, and title are required" });
  }
  const mockSessionId = `cs_mock_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  res.json({
    success: true,
    sessionId: mockSessionId,
    checkoutUrl: `https://checkout.stripe.com/pay/${mockSessionId}`,
    message: "Demo mode — this does not create a real Stripe checkout session.",
  });
});

app.post("/api/stripe/webhook", (_req: Request, res: Response) => {
  res.json({ received: true });
});

// ---------- Mock mint routes (demo only — no real Solana minting) ----------
app.post("/api/mint", (req: Request, res: Response) => {
  const { nftId, walletAddress } = req.body || {};
  if (!walletAddress || String(walletAddress).trim().length === 0) {
    return res.status(400).json({ success: false, error: "Valid wallet address is required" });
  }
  const nft = musicNFTs.find((n) => n.id === nftId);
  if (!nft) {
    return res.status(404).json({ success: false, error: "NFT not found" });
  }
  if (!nft.available) {
    return res.status(400).json({ success: false, error: "NFT already minted" });
  }

  nft.available = false;
  nft.solanaAddress = `nft_${Math.random().toString(36).slice(2, 9)}`;

  res.json({
    success: true,
    transaction: `tx_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    nftAddress: nft.solanaAddress,
    message: "Demo mode — no real NFT was minted on Solana.",
  });
});

app.get("/api/mint/status/:transactionId", (_req: Request, res: Response) => {
  res.json({ success: true, status: "confirmed", confirmations: 32 });
});

// ---------- Error handler ----------
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;
