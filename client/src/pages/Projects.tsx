import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Zap, Music, Blocks, Bot, Headphones } from "lucide-react";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
const energyAppVideo = "/assets/energy-app-demo.mp4";
const realPhoto = "/assets/jesse-real-photo.jpg";
const aiPersona = "/assets/ai-persona-hero.jpg";

const projects = [
  {
    title: "Ekho Music Platform — Rapid Prototyping",
    icon: Headphones,
    problem: "Early-stage startups need working product, not just decks — and every stakeholder needs to align on what to build next, fast.",
    solution: "Partnered with founder Michael Jelen to rapid-prototype the Ekho Music Platform end-to-end in Claude Code — a two-sided platform connecting independent artists with their most devoted fans. Below is the build in motion: a live testable prototype, an automated artist-insights engine, a royalty-recovery tool, and the content produced along the way.",
    tools: ["Claude Code", "GitHub", "Netlify", "React", "HeyGen Hyperframes", "CapCut"],
    learnings: "Product and engineering are converging fast. The same AI tools that used to just speed up prototyping now let one person scope, build, test, and demo a real product — and turn every step into something stakeholders can react to immediately.",
    tags: ["AI Rapid Prototyping", "Claude Code", "Startups", "Product + Engineering"],
    status: "Active",
    externalLink: "https://ekho-music-prototype.netlify.app/",
    externalLinkLabel: "Live Prototype",
    artifacts: [
      {
        title: "Centralized Change Request Mode",
        href: "https://ekho-music-prototype.netlify.app/",
        date: "September 6, 2026",
        provider: "youtube",
        videoId: "eaiCnTVhHy4",
        si: "_2FC0OP9TRMtrObc",
        description: "A \"Suggest Changes\" mode built directly into the live prototype — any stakeholder can click an element on screen and leave a targeted note. Every suggestion is visible to the whole team, gets accepted or rejected in the open, and exports straight to a markdown file Claude can implement. One shared plan of record, consensus in hours instead of meetings."
      },
      {
        title: "Automated Artist Insight Videos",
        date: "September 6, 2026",
        provider: "youtube",
        videoId: "L9jeVSF7tvI",
        si: "TqsptBIU1wwjhW6w",
        description: "A prototype for auto-generating a personalized highlight video for every artist on the platform — reach, what's working, how they compare to peers, where to focus next. Designed to scale from one artist to thousands without a camera crew."
      },
      {
        title: "Royalty Audit Tool",
        date: "September 6, 2026",
        provider: "youtube",
        videoId: "1MksgFC713A",
        si: "wETjlXh9Eaxyl9xI",
        description: (
          <>
            A working prototype that helps independent artists identify and recover mechanical royalties — a category of payment most artists don't realize sits outside their distributor agreements with platforms like Spotify. Part of an ongoing collaboration with{" "}
            <a href="https://www.linkedin.com/in/michaeljelen/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
              Michael Jelen
            </a>
            , founder of Ekho. The walkthrough above was generated almost entirely from a single prompt, using HeyGen's open-source Hyperframes skill in Claude to analyze the actual code and project context.
          </>
        )
      },
      {
        title: "Investor Livestream Recap",
        date: "September 6, 2026",
        provider: "youtube",
        videoId: "0vAj_cvmY2Q",
        si: "0gsY7ULqQQhLa7aW",
        description: "A CapCut edit of Ekho's first livestream event, cut into an investor- and partner-ready highlight reel — years of personal music-video editing experience put to work for the business."
      }
    ]
  },
  {
    title: "The Energy App",
    icon: Zap,
    problem: "People want to find venues with good energy, but there's no real-time signal for crowd vibe or popularity.",
    solution: "Real-time venue popularity and gamification mobile concept. Users receive notifications when arriving at a venue, rate the energy (thumbs up/thumbs down), and others can view recent high-energy spots nearby. Includes location heatmap UX and user feedback loop concept.",
    tools: ["Replit Agent", "React Native", "API Stubs", "Location APIs"],
    learnings: "Rapid AI prototyping can validate UX concepts in hours. Gamification loops need immediate feedback to drive engagement. Location-based features require careful privacy considerations.",
    tags: ["Mobile", "Gamification", "Location", "Prototype"],
    status: "Prototype"
  },
  {
    title: "Jasper Springs AI Persona",
    icon: Music,
    problem: "How do creative identity, ownership, and monetization evolve in a world of AI-generated content?",
    solution: "AI persona and creative exploration project. Music catalog tokenization, NFT utilities, generative persona media, and creative experiments around blockchains and identity. Supports visual themes, AI-generated performances, and NFT-tied music experiences.",
    tools: ["React", "Solana", "Stripe", "Replit Agent", "Eleven Labs", "AI Image Generation"],
    learnings: "AI tools dramatically accelerate creative production. Blockchain enables new ownership models. Building in public creates accountability and forces clarity.",
    tags: ["AI", "Music", "NFTs", "Solana"],
    status: "Live",
    link: "/creative"
  },
  {
    title: "Blockchain Payment Prototype",
    icon: Blocks,
    problem: "Traditional payment rails are slow, expensive, and opaque. Crypto offers speed but lacks enterprise-grade tooling.",
    solution: "Prototype for cross-border payments using stablecoin rails. Wallet generation, transaction signing, and real-time settlement tracking. Designed for B2B use cases with compliance hooks.",
    tools: ["Solana Web3.js", "TypeScript", "Express", "React"],
    learnings: "On-chain constraints force elegant design. Stablecoins bridge the gap between crypto speed and fiat familiarity. Compliance integration is table stakes for enterprise adoption.",
    tags: ["Blockchain", "Payments", "B2B"],
    status: "Prototype"
  },
  {
    title: "AI Development Experiments",
    icon: Bot,
    problem: "How effective are AI coding assistants for rapid prototyping and full-stack development?",
    solution: "Built multiple projects entirely with AI assistance (Replit Agent, ChatGPT, Claude, and more recently Claude Code and Claude Cowork) to understand capabilities and limitations. Documented patterns for effective AI-assisted development.",
    tools: ["Claude Code", "Claude Cowork", "Replit Agent", "ChatGPT", "Gemini"],
    learnings: "AI dramatically accelerates development when you know what to build. Prompt engineering is a skill. Human judgment remains essential for architecture and edge cases.",
    tags: ["AI", "Development", "Experimentation"],
    status: "Ongoing"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-projects-title">
                Projects & Experiments
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Side projects and experiments built with AI tools and rapid prototyping. Each one tests an idea and teaches something new.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} data-testid={`card-project-${index}`}>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h2 className="font-display text-2xl font-bold">{project.title}</h2>
                              <Badge variant="secondary" className="mt-2 text-xs">
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          {project.link && (
                            <Button variant="outline" size="sm" className="gap-1" asChild>
                              <Link href={project.link}>
                                View <ArrowRight className="h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                          {project.externalLink && (
                            <Button variant="outline" size="sm" className="gap-1" asChild>
                              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                {project.externalLinkLabel || "View"} <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>

                        {project.title === "The Energy App" && (
                          <div className="flex justify-center">
                            <video 
                              src={energyAppVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full max-w-xs rounded-lg border border-border shadow-md"
                              data-testid="video-energy-app"
                            />
                          </div>
                        )}

                        {project.title === "Jasper Springs AI Persona" && (
                          <div className="flex justify-center">
                            <div className="relative w-full max-w-xs aspect-square rounded-lg border border-border shadow-md overflow-hidden" data-testid="img-jasper-transform">
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
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                              Problem
                            </h3>
                            <p className="text-muted-foreground">{project.problem}</p>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                              Solution
                            </h3>
                            <p className="text-muted-foreground">{project.solution}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            Tools Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="outline" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            What I Learned
                          </h3>
                          <p className="text-muted-foreground italic">{project.learnings}</p>
                        </div>

                        {project.artifacts && (
                          <div className="space-y-4 pt-2 border-t">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                              Build Artifacts
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {project.artifacts.map((artifact, artifactIndex) => (
                                <div key={artifactIndex} className="space-y-3 p-4 rounded-lg border border-border bg-muted/20">
                                  <div className="flex items-start justify-between gap-2">
                                    {artifact.href ? (
                                      <a
                                        href={artifact.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-base hover:underline inline-flex items-center gap-1"
                                      >
                                        {artifact.title}
                                        <ExternalLink className="h-3 w-3 shrink-0" />
                                      </a>
                                    ) : (
                                      <h4 className="font-semibold text-base">{artifact.title}</h4>
                                    )}
                                    <span className="text-xs text-muted-foreground whitespace-nowrap">{artifact.date}</span>
                                  </div>
                                  <VideoEmbed provider={artifact.provider} id={artifact.videoId} title={artifact.title} si={artifact.si} />
                                  <p className="text-sm text-muted-foreground">{artifact.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2 border-t">
                          {project.tags.map((tag, tagIndex) => (
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
      </main>
      <Footer />
    </div>
  );
}
