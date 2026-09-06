import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Zap, Film } from "lucide-react";

const projects = [
  {
    category: "Product Management",
    icon: Briefcase,
    projects: [
      {
        title: "Crypto Payments Platform",
        description: "Led product strategy for enterprise payment solutions processing $100M+ annually",
        tags: ["Strategy", "Fintech", "Web3"],
      },
      {
        title: "DeFi Integration Suite",
        description: "Designed and launched decentralized finance product suite serving 50K+ users",
        tags: ["DeFi", "UX", "Analytics"],
      },
    ],
  },
  {
    category: "Blockchain Development",
    icon: Code,
    projects: [
      {
        title: "Solana NFT Marketplace",
        description: "Built custom NFT minting and trading platform on Solana with royalty support",
        tags: ["Solana", "Rust", "Web3.js"],
      },
      {
        title: "Smart Contract Suite",
        description: "Developed secure smart contracts for music royalty distribution and licensing",
        tags: ["Smart Contracts", "Security", "Automation"],
      },
    ],
  },
  {
    category: "Creative Projects",
    icon: Zap,
    projects: [
      {
        title: "Music NFT Collection",
        description: "Created and launched collection of original hip hop tracks as NFTs on Solana",
        tags: ["Music", "NFTs", "Branding"],
      },
      {
        title: "AI Persona Development",
        description: "Built AI-powered digital persona showcasing intersection of tech and artistry",
        tags: ["AI", "Design", "Innovation"],
      },
    ],
  },
  {
    category: "Animated AI Projects",
    icon: Film,
    projects: [
      {
        title: "Overstand It - Music Video",
        description: "Animated music video featuring AI-generated visuals and persona, blending hip hop with cutting-edge generative AI animation",
        tags: ["AI Animation", "Music Video", "Generative AI"],
      },
      {
        title: "AI Persona Animation",
        description: "Developing a library of animated content featuring the Jasper Springs AI persona for social media and promotional use",
        tags: ["Character Design", "Animation", "AI Art"],
      },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-portfolio-title">
              Portfolio Showcase
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A selection of projects demonstrating expertise across product management, blockchain development, and creative innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="space-y-4" data-testid={`portfolio-category-${categoryIndex}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.projects.map((project, projectIndex) => (
                      <Card key={projectIndex} className="hover-elevate" data-testid={`card-project-${categoryIndex}-${projectIndex}`}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
