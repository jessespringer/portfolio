import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Music } from "lucide-react";
const realPhoto = "/assets/jesse-real-photo.jpg";
const aiPersona = "/assets/ai-persona-hero.jpg";

export default function HeroSection() {
  const handleConnectWallet = () => {
    console.log("Connect wallet from hero");
  };

  const handleExploreMusic = () => {
    console.log("Explore music clicked");
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-medium" data-testid="badge-tagline">
                AI × Hip Hop × Blockchain
              </Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Jasper Springs
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Building at the intersection of AI, music, and Web3
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Director of Product Management in crypto/payments by day. Hip hop artist pushing the boundaries of blockchain technology by night. Follow my journey as I showcase evolving skills through music NFTs on Solana.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleConnectWallet}
                size="lg"
                className="gap-2 px-8"
                data-testid="button-hero-connect"
              >
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </Button>
              <Button
                onClick={handleExploreMusic}
                size="lg"
                variant="outline"
                className="gap-2 px-8"
                data-testid="button-hero-explore"
              >
                <Music className="h-5 w-5" />
                Explore Music
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-3xl" />
              
              <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden">
                {/* Real Photo - fades out with shuddering */}
                <img
                  src={realPhoto}
                  alt="Jasper Springs - Real Photo"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl animate-real-fade"
                  data-testid="img-hero-real"
                />
                
                {/* AI Persona - fades in with shuddering */}
                <img
                  src={aiPersona}
                  alt="Jasper Springs - AI Persona"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl animate-ai-reveal"
                  data-testid="img-hero-ai"
                />

                {/* Glitch/Pixel blend overlay for transformation effect */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-3xl z-20"
                  data-testid="glitch-overlay"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(255, 255, 255, 0.15) 1px, rgba(255, 255, 255, 0.15) 2px)',
                    animation: 'glitchOverlay 4s ease-in-out infinite',
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
