import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Music, Blocks, Wrench, Bot, Video, Linkedin, Twitter, Zap } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;
const SiSolana = Zap;
const personaPortrait = "/assets/ai-persona-hero.jpg";

const skills = [
  { category: "Product Management", icon: Briefcase, items: ["Product Strategy", "Roadmap Planning", "Stakeholder Management", "Data Analysis"] },
  { category: "Blockchain & Web3", icon: Blocks, items: ["Solana Development", "Smart Contracts", "NFT Standards", "DeFi Protocols"] },
  { category: "Music Production", icon: Music, items: ["Hip Hop Production", "Audio Engineering", "Content Creation", "Brand Building"] },
];

const milestones = [
  { year: "2025", title: "Built in Public", description: "Launched Web3 music platform showcasing AI × Blockchain skills" },
  { year: "2024", title: "Product Director", description: "Leading crypto/payments innovation at enterprise scale" },
  { year: "2023", title: "Web3 Journey", description: "Dove deep into Solana, NFTs, and decentralized systems" },
];

const tools = [
  { category: "AI Development", icon: Bot, items: ["Claude Code", "Claude Cowork", "Replit Agent", "ChatGPT", "Gemini", "Grok Imagine"] },
  { category: "Creative Production", icon: Video, items: ["Eleven Labs", "CapCut", "Studio One"] },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-about-title">
                The Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Director of Product Management by day, hip hop artist by night. I'm building at the intersection of AI, music, and blockchain to showcase how product skills translate across domains.
              </p>
              <p className="text-lg text-muted-foreground">
                This platform demonstrates end-to-end product thinking: user flows, payment infrastructure, compliance architecture, and technical execution. Follow my journey as I build in public and share insights on LinkedIn and X.
              </p>
            </div>
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-3xl" />
                <img
                  src={personaPortrait}
                  alt="Jasper Springs - AI Persona"
                  className="relative z-10 w-full h-full object-cover rounded-3xl"
                  data-testid="img-about-persona"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} data-testid={`card-milestone-${index}`}>
                <CardContent className="p-6 space-y-2">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {milestone.year}
                  </Badge>
                  <h3 className="font-semibold text-xl">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-3xl font-bold" data-testid="text-skills-title">
              Skills Demonstrated
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-4" data-testid={`skill-category-${index}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-3xl font-bold" data-testid="text-tools-title">
              Tools & Technologies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="space-y-4" data-testid={`tool-category-${index}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">{tool.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tool.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-sm py-1 px-3" data-testid={`badge-tool-${index}-${itemIndex}`}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button size="lg" variant="default" className="gap-2" asChild data-testid="button-linkedin">
              <a href="https://www.linkedin.com/in/jesse-springer-123642b/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
                Follow on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild data-testid="button-twitter">
              <a href="https://twitter.com/jessespringer21" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-5 w-5" />
                Follow on X
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild data-testid="button-solana">
              <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">
                <SiSolana className="h-5 w-5" />
                View on Solana
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
