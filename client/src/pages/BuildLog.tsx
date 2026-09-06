import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

const buildLogs = [
  {
    date: "January 13, 2026",
    title: "Site Refactored to Professional Portfolio",
    description: "Restructured the entire site from a single Jasper Springs page to a multi-page professional portfolio. Created separate routes for Home, About, Work, Projects, Creative Lab, and Contact. Professional pages now present Jesse Springer as the primary identity, with Jasper Springs moved to a dedicated Creative Lab section.",
    tags: ["Architecture", "UX", "Refactor"]
  },
  {
    date: "January 12, 2026",
    title: "Music Video NFT Added",
    description: "Added 'Overstand It - Music Video' as a video collectible NFT. Implemented video preview modal with click-to-watch functionality. Encoded video with H.264 Constrained Baseline + AAC-LC for maximum browser compatibility.",
    tags: ["NFT", "Video", "Creative"]
  },
  {
    date: "January 10, 2026",
    title: "Physical Book Redemption Flow",
    description: "Built /redeem page for 'My Rhyme Book' physical fulfillment. Added shipping form with validation, success confirmation, and 2-3 week delivery estimate. Physical collectibles now have a complete end-to-end flow.",
    tags: ["Fulfillment", "Forms", "UX"]
  },
  {
    date: "January 8, 2026",
    title: "Audio Playback System",
    description: "Implemented click-to-play audio on NFT cards with global audio manager. Only one track plays at a time. Added visual play/pause feedback and proper audio state management.",
    tags: ["Audio", "UX", "Frontend"]
  },
  {
    date: "January 5, 2026",
    title: "Dual Payment Options",
    description: "Added both crypto (SOL) and credit card (Stripe) payment options for NFT purchases. Wallet connection flow with mock Solana integration. Stripe checkout redirect with session management.",
    tags: ["Payments", "Crypto", "Stripe"]
  },
  {
    date: "January 3, 2026",
    title: "NFT Collection Gallery",
    description: "Built music NFT collection with filtering by genre. 16-track 'In The Flow' album with unique artwork per track. Special editions tab for collectibles like My Rhyme Book.",
    tags: ["NFT", "Gallery", "Frontend"]
  },
  {
    date: "January 1, 2026",
    title: "Project Kickoff",
    description: "Started building Jasper Springs: On Chain using Replit Agent. Initial setup with React, Tailwind CSS, Express backend, and Solana integration scaffolding. Hero section with AI persona transformation effect.",
    tags: ["Launch", "Setup", "AI"]
  }
];

export default function BuildLog() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-buildlog-title">
                Build Log
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Chronological record of building this project in public. Each entry documents decisions, implementations, and learnings.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {buildLogs.map((log, index) => (
                <Card key={index} data-testid={`card-buildlog-${index}`}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="font-mono text-xs">
                          {log.date}
                        </Badge>
                        <h2 className="font-semibold text-lg">{log.title}</h2>
                      </div>
                      <p className="text-muted-foreground">{log.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {log.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
