import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CreditCard, Blocks, Bot, Music } from "lucide-react";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";
import RotatingPhoto from "@/components/RotatingPhoto";
const headshotImage = "/assets/jesse-real-photo.jpg";
const headshotSerious = "/assets/jesse-headshot-serious.jpg";
const headshotSmiling = "/assets/jesse-headshot-smiling.jpg";

const pillars = [
  {
    title: "Payments & Financial Infrastructure",
    description: "Built regulated payment systems and led KYC platform efforts — from small-business merchant gateway integrations to scaling a nationwide bitcoin ATM network.",
    icon: CreditCard,
    link: "/work"
  },
  {
    title: "Crypto & Blockchain",
    description: "Exploring AI and blockchain integration through live prototypes. Wallet infrastructure, tokenization, and smart contract design.",
    icon: Blocks,
    link: "/work"
  },
  {
    title: "AI & Rapid Prototyping",
    description: "Started with Replit Agent, now building working prototypes end-to-end with Claude Code and Claude Cowork. Shipping ideas fast to validate product concepts.",
    icon: Bot,
    link: "/projects"
  },
  {
    title: "Creative Systems",
    description: "Music catalog tokenization, generative persona media, and creative experiments around identity and ownership.",
    icon: Music,
    link: "/creative"
  }
];

const featuredWork = [
  {
    title: "Ekho Music Platform — Rapid Prototyping",
    description: "Partnered with a startup founder to rapid-prototype a two-sided artist/fan platform in Claude Code — live prototype, automated insights, and investor-ready video, all shipped in real time.",
    tags: ["AI Rapid Prototyping", "Claude Code", "Startups"],
    link: "/projects"
  },
  {
    title: "Jasper Springs AI Persona",
    description: "AI persona and creative exploration project with music tokenization, NFT utilities, and generative persona media.",
    tags: ["AI", "Music", "NFTs", "Solana"],
    link: "/creative"
  },
  {
    title: "KYC & Compliance Platform",
    description: "Led product for identity verification and compliance infrastructure serving regulated financial services.",
    tags: ["Compliance", "Payments", "Enterprise"],
    link: "/work"
  }
];

export default function ProfessionalHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-shrink-0">
                <RotatingPhoto
                  photos={[
                    { src: headshotImage, alt: "Jesse Springer" },
                    { src: headshotSerious, alt: "Jesse Springer" },
                    { src: headshotSmiling, alt: "Jesse Springer" }
                  ]}
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-border shadow-lg"
                />
              </div>
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
                    Jesse Springer
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl" data-testid="text-hero-tagline">
                    Product leader with deep expertise in payments, crypto, compliance, and rapid prototyping.
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-hero-description">
                  I've built regulated payment systems, led KYC platform efforts, and evolved my rapid-prototyping practice from early Replit experiments into shipping end-to-end with Claude Code. I ship working products to validate ideas—not just decks.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="gap-2" asChild data-testid="button-view-work">
                    <Link href="/work">
                      View My Work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild data-testid="button-contact">
                    <Link href="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold" data-testid="text-pillars-title">
                  Core Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Building products across the full spectrum of modern fintech and emerging technology.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <Card key={index} className="hover-elevate" data-testid={`card-pillar-${index}`}>
                      <CardContent className="p-6 space-y-4">
                        <div className="p-3 rounded-lg bg-primary/10 w-fit">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                        <Link href={pillar.link} className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold" data-testid="text-featured-title">
                  Featured Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  A selection of projects demonstrating end-to-end product thinking and technical execution.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {featuredWork.map((project, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-featured-${index}`}>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold text-xl">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1 p-0 h-auto" asChild>
                        <Link href={project.link}>
                          View Project <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
