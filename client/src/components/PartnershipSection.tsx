import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, Wallet, Calendar, Music, Zap } from "lucide-react";
const SiSolana = Zap;

const benefits = [
  {
    icon: DollarSign,
    title: "50% Revenue Share",
    description: "As co-owner, you receive 50% of all streaming royalties and play earnings from your track.",
  },
  {
    icon: Calendar,
    title: "Monthly Payments",
    description: "Royalties are distributed monthly directly to your connected wallet or preferred off-ramp.",
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "The more we promote together, the more plays we get, the more we both earn. True partnership.",
  },
  {
    icon: Wallet,
    title: "Flexible Payouts",
    description: "Receive earnings in SOL, USDC, or cash out via integrated payment rails.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Purchase NFT",
    description: "Buy any track from the collection with crypto or credit card",
  },
  {
    step: "2",
    title: "Become Co-Owner",
    description: "Your NFT represents 50% ownership of that track's royalties",
  },
  {
    step: "3",
    title: "Earn Royalties",
    description: "Every stream and play generates revenue split between us",
  },
  {
    step: "4",
    title: "Get Paid",
    description: "Monthly payouts to your wallet or bank account",
  },
];

export default function PartnershipSection() {
  return (
    <section id="partnership" className="py-16 sm:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="secondary" className="text-sm font-medium gap-2" data-testid="badge-partnership">
              <Users className="h-3 w-3" />
              Revenue Sharing Partnership
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-partnership-title">
              Own the Music. Share the Profits.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every NFT purchase makes you a 50% co-owner of that track. As streams and plays generate revenue, 
              you earn alongside me. This isn't just collecting art—it's investing in music with real returns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl border p-8 sm:p-12">
            <div className="text-center space-y-4 mb-12">
              <h3 className="font-display text-2xl sm:text-3xl font-bold" data-testid="text-how-it-works">
                How It Works
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and powered by Solana smart contracts
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center space-y-3" data-testid={`step-${step.step}`}>
                  <div className="mx-auto w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <SiSolana className="h-6 w-6" />
              <span className="text-sm">Powered by Solana blockchain for fast, low-cost transactions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground">
              <Music className="h-4 w-4" />
              <span>Smart contract royalty distribution coming Q1 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
