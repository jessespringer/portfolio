import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MusicCollection from "@/components/MusicCollection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const realPhoto = "/assets/jesse-real-photo.jpg";
const aiPersona = "/assets/ai-persona-hero.jpg";

export default function Creative() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 bg-muted/50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-background/80">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-2" asChild data-testid="button-back-professional">
                    <Link href="/">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Professional Site
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-lg border border-border shadow-md overflow-hidden" data-testid="img-jasper-transform-creative">
                      <img
                        src={realPhoto}
                        alt="Jesse Springer - Real Photo"
                        className="absolute inset-0 w-full h-full object-cover animate-real-fade"
                      />
                      <img
                        src={aiPersona}
                        alt="Jasper Springs - AI Persona"
                        className="absolute inset-0 w-full h-full object-cover animate-ai-reveal"
                      />
                      <div 
                        className="absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(255, 255, 255, 0.15) 1px, rgba(255, 255, 255, 0.15) 2px)',
                          animation: 'glitchOverlay 4s ease-in-out infinite',
                          mixBlendMode: 'overlay'
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground" data-testid="text-creative-framing">
                      <span className="font-semibold text-foreground">Jasper Springs</span> is an AI persona and creative exploration project. It includes music catalog tokenization, NFT utilities, generative persona media, and creative experiments around blockchains and identity. This work supports visual themes, AI-generated performances, and NFT-tied music experiences.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      This is experimental by design—a sandbox for testing how identity, ownership, and creativity evolve in an AI-driven world.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <HeroSection />
        <MusicCollection />
        <PortfolioSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
