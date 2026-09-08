import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

const timeline = [
  { year: "2026", title: "Building with Claude Code", description: "Shifted rapid-prototyping workflow to Claude Code and Claude Cowork — shipping production-ready prototypes for outside projects and startups, including Ekho Music Platform." },
  { year: "2025", title: "Building in Public", description: "Shipped AI + blockchain prototypes through Replit. Explored creator experiments and generative media." },
  { year: "2024", title: "Director of Product", description: "Leading crypto and payments product strategy. Building regulated systems at enterprise scale." },
  { year: "2023", title: "Web3 Exploration", description: "Deep dive into Solana, NFT standards, and decentralized systems. Hands-on prototyping and experimentation." },
  { year: "2022", title: "KYC Platform Lead", description: "Led product for identity verification and compliance infrastructure across regulated financial services." },
];

const values = [
  { title: "Ship, Don't Pitch", description: "I validate ideas with working prototypes, not slide decks. Building in public forces clarity and creates accountability." },
  { title: "Strategic + Technical", description: "Great product work requires both vision and execution. I stay hands-on with the tools to stay grounded in technical reality." },
  { title: "Rapid Experimentation", description: "AI tools have changed how fast we can test ideas. I started with Replit and ChatGPT; today I build end-to-end with Claude Code, shipping concepts in hours, not months." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-about-title">
                  About Jesse
                </h1>
                <p className="text-xl text-muted-foreground">
                  Product leader with a builder's mindset and a bias toward shipping.
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                <p className="text-muted-foreground">
                  I'm a product leader with deep expertise in payments, crypto, compliance, and rapid prototyping. I've built regulated payment systems, led KYC platform efforts, and now explore the intersection of AI and blockchain through live prototypes.
                </p>
                <p className="text-muted-foreground">
                  By day, I lead product for critical financial infrastructure. By night, I build experimental projects that push my skills into new territory: AI personas, music NFTs, and generative media experiments.
                </p>
                <p className="text-muted-foreground">
                  I believe the best product leaders ship, not just strategize. I prototyped early on with Replit Agent, now build end-to-end with Claude Code, ship on Solana, and continuously publish working projects that demonstrate evolving capabilities.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="gap-2" asChild data-testid="button-linkedin">
                  <a href="https://www.linkedin.com/in/jesse-springer-123642b/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild data-testid="button-twitter">
                  <a href="https://twitter.com/jessespringer21" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="h-4 w-4" />
                    Follow on X
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <h2 className="font-display text-3xl font-bold" data-testid="text-journey-title">
                The Journey
              </h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6" data-testid={`timeline-item-${index}`}>
                    <div className="flex flex-col items-center">
                      <Badge variant="secondary" className="font-semibold">
                        {item.year}
                      </Badge>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <h2 className="font-display text-3xl font-bold" data-testid="text-values-title">
                How I Work
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} data-testid={`card-value-${index}`}>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold">
                Want to see the creative side?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Explore Jasper Springs—my AI persona and creative exploration project with music tokenization, NFT utilities, and generative media.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/creative">
                  Explore Creative Lab
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
