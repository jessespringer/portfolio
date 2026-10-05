import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Zap, Music, Blocks, Bot, Headphones, Network, ShieldCheck, TrendingUp, Fuel, Globe, GraduationCap, FileSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import RotatingPhoto from "@/components/RotatingPhoto";
import UnlockVideo from "@/components/UnlockVideo";
import BuildStory, { type Story } from "@/components/BuildStory";
import DropPlaybook from "@/components/DropPlaybook";
import { PrototypeLoopVisual, UnitErrorVisual, GroundingVisual, AgentRoutingVisual, SkillLayersVisual } from "@/components/BuildVisuals";
const energyAppVideo = "/assets/energy-app-demo.mp4";
const realPhoto = "/assets/jesse-real-photo.jpg";
const aiPersona = "/assets/ai-persona-hero.jpg";

type UnlockLink = { href: string; label: string; internal?: boolean };
type UnlockClip =
  | { provider: "local"; mp4: string; webm?: string; poster: string; alt: string }
  | { provider: "gif"; gif: string; poster: string; alt: string; width: number; height: number }
  | { provider: "youtube" | "vimeo"; videoId: string; si?: string };

type Unlock = {
  title: string;
  icon: LucideIcon;
  date: string;   // same format as artifacts and buildLogs: "September 17, 2026"
  built: string;  // what I built, 1–2 sentences
  why: string;    // why it matters, 1–2 sentences
  clip: UnlockClip;
  links: UnlockLink[];
  tags: string[];
  story?: Story;  // optional "How it was built" sub-section
  extra?: ReactNode; // optional card-specific sub-section (e.g. the Drop Playbook explainer)
};

// Loops live in client/public/assets/unlocks/<slug>.{mp4,webm} + <slug>-poster.jpg
// (3–8 s, muted, MP4 ≤ 2 MB, WebM ≤ 1.5 MB, poster ≤ 150 KB). Longer videos go to YouTube.
// A "gif" clip (e.g. a full-page scroll-through, ≤ ~5 MB) shows its poster instead under reduced motion.
const unlocks: Unlock[] = [
  {
    title: "Royalty Audit",
    icon: FileSearch,
    date: "October 1, 2026",
    built: "A Claude Code-built royalty audit flow in the live Ekho prototype. An artist confirms their profile and roles, answers a few questions or uploads a royalty statement, and gets an estimated range of royalties they may be missing, each possible gap with how to claim it, and a tracker for the claims they start.",
    why: "Independent artists can leave money unclaimed when a song or recording isn't registered everywhere it should be, and it's easy never to notice. The audit turns that into a short list of gaps with an estimate attached. Shown here on my own Jasper Springs demo profile with the prototype's sample data.",
    clip: {
      provider: "local",
      mp4: "/assets/unlocks/royalty-audit.mp4",
      webm: "/assets/unlocks/royalty-audit.webm",
      poster: "/assets/unlocks/royalty-audit-poster.jpg",
      alt: "Royalty audit on the Jasper Springs demo profile: confirm your details, the catalogue check, then the sample estimate of possible uncollected royalties and the first possible gap with its claim button"
    },
    links: [{ href: "https://ekho-music-prototype.netlify.app/v2/additions/artist-console/royalties-start.html?as=artist", label: "Live prototype" }],
    tags: ["Claude Code", "Rapid prototyping", "Music royalties"]
  },
  {
    title: "Drop Page, Drop Playbook & Drop Dashboard",
    icon: TrendingUp,
    date: "September 17, 2026",
    built: "Three connected pieces in the live Ekho prototype: a clickable fan-side drop page; a Drop Playbook, an evolving playbook that tracks macro best practices across social platforms, viewer behavior and share of attention, and offers an optional pre- and post-drop touchpoint plan, a planner, and prescribed content to maximize interest and monetization; and a Drop Dashboard for the results.",
    why: "The Drop Dashboard shows how drops that use the playbook track against, and outperform, drops that don't, so an artist can see mid-drop whether to hold the plan or change it. Shown here on my own Jasper Springs demo profile with the prototype's sample data.",
    clip: {
      provider: "local",
      mp4: "/assets/unlocks/drop-pace.mp4",
      webm: "/assets/unlocks/drop-pace.webm",
      poster: "/assets/unlocks/drop-pace-poster.jpg",
      alt: "Drop performance dashboard on the Jasper Springs demo profile: every drop, then a running drop's pace against past drops"
    },
    links: [{ href: "https://ekho-music-prototype.netlify.app/", label: "Live prototype" }],
    tags: ["Claude Code", "Rapid prototyping", "Product analytics"],
    extra: <DropPlaybook testId="drop-playbook-unlock-1" />
  },
  {
    title: "SAF Pathway Cost Explorer",
    icon: Fuel,
    date: "September 2026",
    built: "An interactive cost explorer for three sustainable aviation fuel pathways, ported from Excel techno-economic models into Python. Every per-gallon figure breaks down to its input line item with its derivation and source, and a tornado chart shows what moves the number.",
    why: "Making each figure show its work is what surfaced a unit error in the source models. Switching the tornado between measured volatility, the spread across free public feeds, and calibrated estimates shows which inputs public data already covers and which would still need a paid feed.",
    clip: {
      provider: "gif",
      gif: "/assets/unlocks/saf-cost-explorer.gif",
      poster: "/assets/unlocks/saf-cost-explorer-poster.jpg",
      alt: "Scroll-through of the SAF Pathway Cost Explorer, from the pathway controls and cost stacks to the tornado chart, policy credits and input register",
      width: 680,
      height: 389
    },
    links: [{ href: "https://claude.ai/artifact/TDYCinw3rUhHRh1nhuL85L", label: "Live artifact" }],
    tags: ["Claude Cowork", "Data provenance", "Techno-economic analysis"],
    story: {
      journey: [
        "Ported three production pathways — alcohol-to-jet, waste oils, and Fischer-Tropsch gasification — from the source Excel models into Python.",
        "The ported output did not reconcile. Minimum selling price came out materially wrong, and no amount of re-reading the formulas explained it.",
        "Rather than patch the number, I decomposed every figure down to its input line item and forced each one to carry its own derivation and its own cited source.",
        "That made the error visible on its own: corn ethanol entered at $0.52/gal was almost certainly $0.52 per litre. Converted, it lands at $1.97/gal — within 1% of the published FOB Houston price.",
        "The confirmation was not the fix working. It was running the same conversion on the other two feedstocks and watching it fail differently each time — used cooking oil overshot the market by 17% (a basis error, not a unit error), and forest residue, quoted per pound, needed no conversion at all.",
        "Shipped as an interactive dashboard priced across fifteen hubs, with tornado charts that separate measured twelve-month volatility from estimated volatility — so you can see exactly where the estimates were wrong."
      ],
      shipped: [
        "Three Excel models ported and reconciled in Python",
        "Interactive cost explorer, every figure showing derivation and source",
        "Tiered data-source register: free real-time, free lagged, subscription",
        "Structural gaps named explicitly rather than quietly omitted"
      ],
      technique: {
        name: "Make it show its work, then test the work against itself",
        body:
          "A ported model that emits a number is unverifiable. One that emits a number plus its formula and its source is auditable, and errors surface without anyone hunting for them. The second half matters more: a fix that explains one input is a guess. A fix that fails in a specific, predictable way on two other inputs is a diagnosis."
      },
      visual: <UnitErrorVisual />
    }
  }
];

type ProjectArtifact = {
  title: string;
  href?: string;
  date: string;
  provider: "youtube" | "vimeo";
  videoId: string;
  si?: string;
  description: ReactNode;
};

type Project = {
  title: string;
  icon: LucideIcon;
  eyebrow?: string;
  problem: string;
  solution: string;
  tools: string[];
  learnings: string;
  tags: string[];
  status: string;
  link?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  artifacts?: ProjectArtifact[];
  story?: Story;  // "How it was built" (merged in from the former Claude Project Work page)
};

const projects: Project[] = [
  {
    title: "Ekho Music Platform — Rapid Prototyping",
    icon: Headphones,
    eyebrow: "Claude Code · Aug–Sep 2026",
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
        provider: "youtube" as const,
        videoId: "eaiCnTVhHy4",
        si: "_2FC0OP9TRMtrObc",
        description: "A \"Suggest Changes\" mode built directly into the live prototype — any stakeholder can click an element on screen and leave a targeted note. Every suggestion is visible to the whole team, gets accepted or rejected in the open, and exports straight to a markdown file Claude can implement. One shared plan of record, consensus in hours instead of meetings."
      },
      {
        title: "Automated Artist Insight Videos",
        date: "September 6, 2026",
        provider: "youtube" as const,
        videoId: "L9jeVSF7tvI",
        si: "TqsptBIU1wwjhW6w",
        description: "A prototype for auto-generating a personalized highlight video for every artist on the platform — reach, what's working, how they compare to peers, where to focus next. Designed to scale from one artist to thousands without a camera crew."
      },
      {
        title: "Royalty Audit Tool",
        date: "September 6, 2026",
        provider: "youtube" as const,
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
        provider: "youtube" as const,
        videoId: "0vAj_cvmY2Q",
        si: "0gsY7ULqQQhLa7aW",
        description: "A CapCut edit of Ekho's first livestream event, cut into an investor- and partner-ready highlight reel — years of personal music-video editing experience put to work for the business."
      }
    ],
    story: {
      journey: [
        "Shipped a live, testable prototype rather than static mockups. Anyone with the link could use the real thing.",
        "The bottleneck turned out not to be build speed. Feedback arrived scattered across calls, texts and threads, and re-litigated itself every week.",
        "So I built a “Suggest Changes” mode into the prototype itself. Any stakeholder clicks an element on screen and leaves a targeted note. Everyone sees every suggestion; accept and reject happen in the open.",
        "Accepted changes export as a single markdown file that goes straight back into Claude Code as the implementation brief. One shared plan of record.",
        "Then extended the same loop outward — an automated artist-insight engine, a mechanical-royalty recovery tool, and a social-audit pipeline repeatable enough that I have now run it for three separate artists."
      ],
      shipped: [
        "Live prototype with stakeholder review built in",
        "Royalty audit tool for recovering mechanical royalties",
        "Automated artist insight video pipeline",
        "Investor-ready livestream recap"
      ],
      technique: {
        name: "Build the feedback loop into the artifact",
        body:
          "Most AI-assisted work does not stall at generation, it stalls at review — corrections scatter, context gets lost, and the same argument runs twice. The prompt is only half the system. The other half is the path a correction takes to get back in. When that path is short and visible to everyone, iteration speed stops depending on how good any single prompt was."
      },
      visual: <PrototypeLoopVisual />
    }
  },
  {
    title: "BSA Loan Package Pre-Clearance Skill",
    icon: ShieldCheck,
    eyebrow: "Claude Skills · case study for an AI banking platform · June 2026",
    problem: "Commercial loan files were reaching the BSA/AML team incomplete. Every return cost days of rework before the clearance clock even started — a bottleneck the lending and compliance teams each named independently.",
    solution: "Authored a reusable Claude Skill that reviews a commercial loan file before submission and produces a structured completeness report: entity summary, beneficial ownership chain traced to natural persons, document gap list, screening status, and a readiness flag. Built with progressive disclosure — a short activation description, a procedure body under 100 lines, and reference files loaded only when a step calls for them. Scoped deliberately so the skill flags and never decides; every compliance judgment stays with the BSA officer. Evaluated across two asymmetric loan scenarios on two model sizes.",
    tools: ["Claude Skills", "Claude Code", "Model evals", "Progressive disclosure"],
    learnings: "Constraining scope was the design win, not a limitation — removing judgment left assembly logic, which smaller and far cheaper models handle reliably. Expert review then caught two logic errors that were plausible but wrong in regulatory context, which is the failure mode that matters most in compliance work because the output still reads as credible.",
    tags: ["Claude Skills", "KYC & Compliance", "Evals"],
    status: "Case Study",
    story: {
      journey: [
        "Scoped it deliberately narrow before writing anything. The skill flags; it does not decide. Whether activity is suspicious, whether a filing is warranted — that stays with the compliance officer.",
        "That constraint turned out to be the design win rather than a limitation. What remained was assembly logic instead of judgment, and assembly logic is exactly what small, cheap models handle reliably.",
        "Structured it as three layers of progressive disclosure: a one-sentence activation description, a procedure body kept under 100 lines, and reference files pulled in only when a step calls for them.",
        "The first draft embedded the full checklist inline. On the smaller model that produced output that was correct but inconsistently formatted, and occasionally dropped rows entirely. Moving the checklist into a reference file and pinning a fixed output template fixed both problems at once.",
        "Rewrote the readiness logic from prose — “if there are gaps, flag the file” — into explicitly enumerated conditions. That removed the ambiguity around genuinely borderline cases, like an appraisal that has been ordered but not yet received.",
        "Tested against two deliberately asymmetric files: one clean single-owner case, and one built to stress it — ownership running two tiers through a holding company, an owner evidenced only by an accountant's email, several missing documents, and an unresolved screening match. Ran both across two model sizes side by side.",
        "Wrote up the model recommendation with the reasoning: the smaller model is correct for this scope at a fraction of the cost, and the larger one only becomes necessary if the skill is extended into interpretive work."
      ],
      shipped: [
        "Authored skill with checklist and output-template references",
        "Two-scenario, two-model evaluation run side by side",
        "Build narrative documenting every structure decision",
        "Costed model recommendation with the threshold for revisiting it"
      ],
      caution: {
        name: "What expert review caught — and why it matters",
        items: [
          {
            claim: "Flagged a 20% owner's missing ID as a required gap.",
            reality:
              "The regulatory ownership threshold is 25%. The requirement had been applied too broadly, and an incorrect gap list would have gone to the borrower."
          },
          {
            claim: "Escalated every unresolved screening match automatically.",
            reality:
              "A potential match with clear differentiating factors is routine disposition, not escalation. Conflating them overstates risk and manufactures work."
          }
        ],
        body:
          "Neither was a hallucination in the usual sense. Both were plausible-sounding rules that were imprecise in a specific regulatory context — which is the harder failure mode to catch, because the output reads as credible. It is the argument for domain review as a required step rather than a courtesy, and the reason the skill was scoped to defer judgment in the first place."
      },
      technique: {
        name: "Constrain the scope until what is left is mechanical",
        body:
          "The instinct is to make a tool do as much as it possibly can. The better move here was subtraction. Deciding up front that the skill would flag and never decide did two things at once: it kept a human accountable for every judgment call, and it reduced the remaining work to classification and extraction — which a small, fast, inexpensive model does reliably. Scope discipline is not only a safety measure. It is what makes the model choice obvious."
      },
      visual: <SkillLayersVisual />
    }
  },
  {
    title: "Tiered AI Agent Architecture",
    icon: Network,
    eyebrow: "OpenClaw · Ollama · Claude · ongoing",
    problem: "Reaching for the largest available model on every task is slow, expensive, and unnecessary for most of what a day actually contains.",
    solution: "A local agent (OpenClaw running Gemma through Ollama) handles roughly 90% of routine work, escalating deliberately to Claude Cowork for complex reasoning and document work, and to Claude Code for terminal-level agentic work in repositories. The whole stack is reachable from a Telegram bot, so it works from a phone without opening a terminal.",
    tools: ["OpenClaw", "Ollama", "Claude Cowork", "Claude Code", "Telegram"],
    learnings: "Most of the effort went into identity and context files rather than model selection — agent behavior is largely context design. Deciding in advance what escalates, and why, turns an expensive habit into an architecture.",
    tags: ["Local Models", "Agent Design", "Context Engineering"],
    status: "Ongoing",
    story: {
      journey: [
        "A local agent — OpenClaw running Gemma through Ollama on a Mac Mini — handles roughly 90% of routine work: lookups, drafting, file wrangling, quick questions.",
        "It escalates deliberately: to Claude Cowork for complex reasoning and document work, and to Claude Code for terminal-level agentic work inside repositories.",
        "The interface is a Telegram bot, so the whole stack is reachable from a phone without opening a terminal.",
        "Most of the actual effort went into identity and context files — SOUL.md, USER.md, BOOTSTRAP.md — not into model selection. Behaviour is mostly context design.",
        "I broke it once by relocating those context files into Dropbox, which silently disabled the initialization step. A useful reminder of how much agent behaviour is really just file-path convention holding steady."
      ],
      shipped: [
        "Local-first agent handling the majority of daily tasks",
        "Deliberate escalation path across three tiers",
        "Telegram interface, usable from anywhere",
        "Context and identity files version-controlled and synced across machines"
      ],
      technique: {
        name: "Route by task weight, not by capability",
        body:
          "Capability is the axis everyone optimises, and it is rarely the binding one. Latency, privacy and cost all matter, and most tasks in a day are small. Deciding in advance what escalates — and why — turns an expensive habit into an architecture, and makes the expensive calls count for more when you do make them."
      },
      visual: <AgentRoutingVisual />
    }
  },
  {
    title: "This Website",
    icon: Globe,
    eyebrow: "Claude Cowork · ongoing",
    problem: "Run a real production site end to end, not a sandbox, and keep every claim on it accurate enough to stand behind.",
    solution: "Started on Replit Agent in January 2026 and moved the ongoing work to Claude Cowork and Claude Code. It runs on Vercel with GitHub auto-deploy, so every commit ships, and the Work section was rebuilt against my actual resume so every number traces to a source document.",
    tools: ["Claude Cowork", "Claude Code", "Replit Agent", "Vercel", "GitHub"],
    learnings: "These tools write upward: give them a thin fact and they return a confident, slightly larger version of it. The correction is a source document, not an adjective, and because generated copy gets reused, a claim you fixed once may still be sitting in two other places.",
    tags: ["Claude Cowork", "Verification", "Shipping"],
    status: "Live",
    story: {
      journey: [
        "Started on Replit Agent in January 2026, then moved the ongoing work to Claude Cowork and Claude Code as the tooling got stronger.",
        "Live on Vercel with GitHub auto-deploy, so every commit ships.",
        "Reading back the Work section, I found a line claiming I had designed transaction flows processing billions in volume. I had not. It was plausible, well-written and false.",
        "The fix was not better phrasing. I handed over my actual resume and had the section rebuilt against it, so every number traced to something real.",
        "Then I found the same fabricated claim duplicated on the home page. Fixing the page you were shown is not the same as fixing the site."
      ],
      shipped: [
        "Production site on Vercel, auto-deploying from GitHub",
        "Work section rebuilt against source documents",
        "Reusable components extracted as patterns repeat",
        "A running project log so the next session picks up mid-stream"
      ],
      technique: {
        name: "Ground claims in a source document, then search for the copies you missed",
        body:
          "These tools write upward. Give them a thin fact and they will return a confident, well-formed, slightly larger version of it — and the better the prose, the harder it is to notice. The correction is a source document, not an adjective. And because generated copy gets reused across a project, a claim you corrected once may still be sitting in two other places."
      },
      visual: <GroundingVisual />
    }
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

// "What I Would Teach" (from the former Claude Project Work page): the ideas that recur across the builds above.
const curriculum = [
  {
    module: "Context is the product",
    body: "The prompt is the small part. What the model can see — files, prior decisions, source documents, project state — determines the output far more than phrasing does."
  },
  {
    module: "Close the correction loop",
    body: "Design how feedback gets back in before you optimise how instructions go out. Scattered corrections, not weak prompts, are what stall most real projects."
  },
  {
    module: "Make the work auditable",
    body: "Require derivations and sources alongside answers. It costs little, and it converts silent errors into visible ones."
  },
  {
    module: "Verify against documents, not vibes",
    body: "Ground factual claims in a real artifact — a resume, a spec, a dataset. Fluent output is not evidence, and fluency is exactly what makes fabrication hard to spot."
  },
  {
    module: "Assume duplication",
    body: "Generated content gets copied across a project. After any correction, search the whole surface for the same claim rather than trusting the one place you were shown."
  },
  {
    module: "Match the tool to the weight",
    body: "Local model, chat assistant, or agentic coding tool — knowing which to reach for, and being able to say why, is most of practical fluency."
  },
  {
    module: "Subtract until it is mechanical",
    body: "Narrowing what a tool is allowed to decide keeps a human accountable and makes the remaining work small enough for a cheaper, faster model to do reliably. Scope is a design lever, not just a safety one."
  },
  {
    module: "Plausible is not correct",
    body: "The dangerous failure is not the obvious hallucination, it is the confident, well-formed rule that is subtly wrong for the context. Domain review has to be a required step, not a courtesy."
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-projects-title">
                AI &amp; Crypto Builds
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Builds and experiments across AI and crypto, shipped with AI tools and rapid prototyping. Each one tests an idea and teaches something new, and the AI builds open up to show the path each one actually took, including the parts that went wrong, and the technique behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-12" aria-labelledby="unlocks-heading">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-6">
            <div className="space-y-2">
              <h2 id="unlocks-heading" className="font-display text-2xl font-bold" data-testid="text-unlocks-title">
                Latest Unlocks
              </h2>
              <p className="text-muted-foreground">
                The newest things I've built, each with a short clip of it working.
              </p>
            </div>
            <div className="space-y-6">
              {unlocks.map((u, i) => {
                const Icon = u.icon;
                return (
                  <Card key={i} className="flex flex-col" data-testid={`card-unlock-${i}`}>
                    <CardContent className="p-4 sm:p-6 space-y-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-display text-lg font-bold">{u.title}</h3>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{u.date}</span>
                      </div>
                      <div className="grid lg:grid-cols-5 gap-6 items-start">
                      <div className="lg:col-span-3 min-w-0">
                      {u.clip.provider === "local" ? (
                        <UnlockVideo
                          mp4={u.clip.mp4}
                          webm={u.clip.webm}
                          poster={u.clip.poster}
                          alt={u.clip.alt}
                          testId={`video-unlock-${i}`}
                        />
                      ) : u.clip.provider === "gif" ? (
                        <picture>
                          <source srcSet={u.clip.poster} media="(prefers-reduced-motion: reduce)" />
                          <img
                            src={u.clip.gif}
                            alt={u.clip.alt}
                            width={u.clip.width}
                            height={u.clip.height}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-lg border border-border shadow-md bg-muted"
                            data-testid={`gif-unlock-${i}`}
                          />
                        </picture>
                      ) : (
                        <VideoEmbed provider={u.clip.provider} id={u.clip.videoId} si={u.clip.si} title={u.title} />
                      )}
                      </div>
                      <div className="lg:col-span-2 space-y-4 min-w-0">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What I Built</h4>
                        <p className="text-sm text-muted-foreground">{u.built}</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Why It Matters</h4>
                        <p className="text-sm text-muted-foreground">{u.why}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t">
                        <div className="flex flex-wrap gap-2">
                          {u.tags.map((t, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">{t}</Badge>
                          ))}
                        </div>
                        {u.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {u.links.map((l, j) =>
                              l.internal ? (
                                <Button key={j} variant="outline" size="sm" className="gap-1" asChild>
                                  <Link href={l.href}>
                                    {l.label} <ArrowRight className="h-3 w-3" />
                                  </Link>
                                </Button>
                              ) : (
                                <Button key={j} variant="outline" size="sm" className="gap-1" asChild>
                                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                                    {l.label} <ExternalLink className="h-3 w-3" />
                                  </a>
                                </Button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                      </div>
                      </div>
                      {u.extra}
                      {u.story && <BuildStory story={u.story} testId={`story-unlock-${i}`} />}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="space-y-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} data-testid={`card-project-${index}`}>
                    <CardContent className="p-5 sm:p-8">
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-start gap-4 min-w-0">
                            <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="min-w-0">
                              {project.eyebrow && (
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{project.eyebrow}</div>
                              )}
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
                              <RotatingPhoto
                                photos={[
                                  { src: realPhoto, alt: "Jesse Springer - Real Photo" },
                                  { src: aiPersona, alt: "Jasper Springs - AI Persona" }
                                ]}
                                className="absolute inset-0 w-full h-full"
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

                        {project.story && <BuildStory story={project.story} testId={`story-project-${index}`} />}

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

              <Card data-testid="card-what-i-would-teach">
                <CardContent className="p-5 sm:p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2 min-w-0">
                      <h2 className="font-display text-2xl font-bold" data-testid="text-curriculum-title">What I Would Teach</h2>
                      <p className="text-muted-foreground">
                        The same eight ideas keep doing the work across the builds above. They are what I would build a course around: each one is demonstrable in a live session, and each one fails in a way people remember.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {curriculum.map((item, i) => (
                      <div key={i} className="space-y-2 p-4 rounded-lg border border-border bg-muted/20" data-testid={`card-curriculum-${i}`}>
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-primary font-semibold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                          <h3 className="font-semibold">{item.module}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <Button asChild className="gap-1" data-testid="button-curriculum-contact">
                      <Link href="/contact">
                        Get in touch <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
