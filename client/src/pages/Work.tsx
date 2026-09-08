import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CreditCard, Blocks, Shield, TrendingUp } from "lucide-react";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

const workAreas = [
  {
    title: "Payments Infrastructure",
    icon: CreditCard,
    description: "Built and scaled payment processing infrastructure across cash, card, and crypto rails — from small-business merchant gateway integrations to a nationwide bitcoin ATM network.",
    achievements: [
      "Built self-service small business merchant applications and configured Cybersource's payment gateway and value-added services for third-party eCommerce and ISV integrations, including WooCommerce and Adobe Commerce",
      "Owned the kiosk, internal admin panel, and mobile app roadmaps for a nationwide cash-to-bitcoin payment network",
      "Led integration of an acquired crypto-processing provider, sunsetting the legacy platform with minimal disruption to ~$12M in weekly purchase volume"
    ],
    tags: ["Product Strategy", "Payments", "Gateway Integration"]
  },
  {
    title: "Crypto & Wallet Solutions",
    icon: Blocks,
    description: "Product leadership for enterprise crypto custody and wallet infrastructure. Designed secure key management and multi-chain asset support.",
    achievements: [
      "Launched self-custody wallet with multi-signature support",
      "Integrated Solana, Ethereum, and Bitcoin networks",
      "Designed tokenization framework for digital assets"
    ],
    tags: ["Blockchain", "Security", "Web3"]
  },
  {
    title: "Compliance & Risk",
    icon: Shield,
    description: "Built KYC/AML systems meeting regulatory requirements across multiple jurisdictions. Created fraud detection pipelines and risk scoring models.",
    achievements: [
      "Reduced manual review queue by 60% with ML-powered screening",
      "Designed a flexible rules engine to navigate nuanced compliance requirements across 18+ state jurisdictions, reusing shared design patterns instead of one-off builds — avoided shutdowns in 3 states while keeping compliant manual-approval revenue flowing",
      "Designed tiered verification flows for risk-based onboarding"
    ],
    tags: ["Compliance", "Risk", "Regulation"]
  },
  {
    title: "Growth & Optimization",
    icon: TrendingUp,
    description: "Data-driven growth practice — using analytics platforms like Amplitude to closely monitor drop-off points across the customer experience and prioritize the highest-leverage fixes.",
    achievements: [
      "Scaled a cash-to-bitcoin ATM kiosk network from 4,000 to 10,000 units in two years, growing annual transaction volume from $264M to $660M (36% CAGR)",
      "Used Amplitude and funnel analytics to pinpoint drop-off points across the customer journey, prioritizing fixes by impact rather than intuition",
      "Built an omni-channel debit/credit purchase experience that drove 3x year-over-year growth to $13M"
    ],
    tags: ["Growth", "Data", "Analytics"]
  }
];

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-work-title">
                Product & Technical Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Experience building products across payments, crypto, and AI. Here's a selection of the work I've led and the impact it created.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {workAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} data-testid={`card-work-${index}`}>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <h2 className="font-display text-2xl font-bold">{area.title}</h2>
                            <p className="text-muted-foreground">{area.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            Key Achievements
                          </h3>
                          <ul className="space-y-2">
                            {area.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {area.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold">
                See the experiments
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Beyond enterprise work, I build side projects to stay hands-on with emerging technology.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/projects">
                  View Projects
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
