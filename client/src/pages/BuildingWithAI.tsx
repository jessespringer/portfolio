import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { ExternalLink, Headphones, LineChart, Globe, Network, ShieldCheck, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/* Visuals — inline SVG, theme-aware via currentColor + text-* classes */
/* ------------------------------------------------------------------ */

function PrototypeLoopVisual() {
  const nodes = [
    { x: 60, label: "Ship the prototype", sub: "live URL, not a mockup" },
    { x: 235, label: "Stakeholders mark it up", sub: "click any element, leave a note" },
    { x: 410, label: "Decisions export", sub: "one markdown brief" },
    { x: 585, label: "Claude Code implements", sub: "against the same plan of record" }
  ];

  return (
    <svg viewBox="0 0 700 200" width="700" height="200" className="w-full h-auto" role="img" aria-label="The Ekho prototype loop: ship a live prototype, stakeholders mark it up in place, decisions export as one markdown brief, Claude Code implements, and the loop repeats.">
      <g className="text-border">
        <line x1="35" y1="132" x2="665" y2="132" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 132 v22 h630 v-22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>
      <g className="text-primary">
        <path d="M665 132 l-6 -7 h12 z" fill="currentColor" />
      </g>

      {nodes.map((n, i) => (
        <g key={i}>
          <g className="text-border">
            <rect x={n.x - 64} y={38} width={128} height={62} rx={8} fill="none" stroke="currentColor" strokeWidth="1.5" />
          </g>
          <g className="text-primary">
            <circle cx={n.x} cy={132} r={6} fill="currentColor" />
            <text x={n.x} y={28} textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
          <g className="text-foreground">
            <text x={n.x} y={62} textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
              {n.label.split(" ").slice(0, 2).join(" ")}
            </text>
            <text x={n.x} y={77} textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
              {n.label.split(" ").slice(2).join(" ")}
            </text>
          </g>
          <g className="text-muted-foreground">
            <text x={n.x} y={92} textAnchor="middle" fontSize="9.5" fill="currentColor">
              {n.sub}
            </text>
          </g>
        </g>
      ))}

      <g className="text-muted-foreground">
        <text x="350" y="172" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="currentColor">
          The review mechanism lives inside the thing being reviewed — consensus in hours, not meetings.
        </text>
      </g>
    </svg>
  );
}

function UnitErrorVisual() {
  const rows = [
    {
      y: 62,
      feed: "Corn ethanol",
      ported: "$0.52 / gal",
      test: "× 3.785",
      result: "$1.97",
      verdict: "fits",
      note: "within 1% of FOB Houston ($1.98)",
      tone: "good"
    },
    {
      y: 112,
      feed: "Used cooking oil",
      ported: "$0.73 / gal",
      test: "× 3.785",
      result: "$2.76",
      verdict: "overshoots 17%",
      note: "different error — collector price, not delivered market",
      tone: "bad"
    },
    {
      y: 162,
      feed: "Forest residue",
      ported: "$70 / dry ton",
      test: "n/a",
      result: "—",
      verdict: "already right",
      note: "quoted per pound, so no conversion applies",
      tone: "neutral"
    }
  ];

  const toneClass = (t: string) =>
    t === "good" ? "text-primary" : t === "bad" ? "text-destructive" : "text-muted-foreground";

  return (
    <svg viewBox="0 0 700 220" width="700" height="220" className="w-full h-auto" role="img" aria-label="Three feedstocks tested against the same litre-to-gallon conversion. Corn ethanol fits within one percent of market. Used cooking oil overshoots by 17 percent, indicating a different error. Forest residue was already correct because it is quoted per pound.">
      <g className="text-muted-foreground">
        <text x="8" y="22" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="currentColor">FEEDSTOCK</text>
        <text x="190" y="22" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="currentColor">AS PORTED</text>
        <text x="320" y="22" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="currentColor">SAME TEST</text>
        <text x="425" y="22" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="currentColor">RESULT</text>
        <text x="520" y="22" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="currentColor">VERDICT</text>
      </g>
      <g className="text-border">
        <line x1="8" y1="32" x2="692" y2="32" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {rows.map((r, i) => (
        <g key={i}>
          <g className="text-border">
            <line x1="8" y1={r.y + 22} x2="692" y2={r.y + 22} stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </g>
          <g className="text-foreground">
            <text x="8" y={r.y} fontSize="12.5" fontWeight="600" fill="currentColor">{r.feed}</text>
            <text x="190" y={r.y} fontSize="12" fill="currentColor">{r.ported}</text>
            <text x="425" y={r.y} fontSize="12.5" fontWeight="600" fill="currentColor">{r.result}</text>
          </g>
          <g className="text-muted-foreground">
            <text x="320" y={r.y} fontSize="12" fill="currentColor">{r.test}</text>
            <text x="8" y={r.y + 15} fontSize="9.5" fill="currentColor">{r.note}</text>
          </g>
          <g className={toneClass(r.tone)}>
            <text x="520" y={r.y} fontSize="12" fontWeight="700" fill="currentColor">{r.verdict}</text>
          </g>
        </g>
      ))}

      <g className="text-muted-foreground">
        <text x="8" y="210" fontSize="10.5" fontStyle="italic" fill="currentColor">
          One test, three different outcomes — that is what turned a guess into a diagnosis.
        </text>
      </g>
    </svg>
  );
}

function GroundingVisual() {
  return (
    <svg viewBox="0 0 700 210" width="700" height="210" className="w-full h-auto" role="img" aria-label="A claim-verification pass: the drafted claim about processing billions in volume fails the resume check, is replaced with a sourced claim, and a site-wide search finds the same false claim duplicated on a second page.">
      <g className="text-border">
        <rect x="8" y="30" width="200" height="56" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="250" y="30" width="200" height="56" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="492" y="30" width="200" height="56" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="250" y="126" width="442" height="52" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      <g className="text-muted-foreground">
        <text x="18" y="22" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">WHAT THE DRAFT SAID</text>
        <text x="260" y="22" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">CHECKED AGAINST RESUME</text>
        <text x="502" y="22" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">WHAT REPLACED IT</text>
        <text x="260" y="118" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">THEN: SEARCH THE WHOLE SITE</text>
      </g>

      <g className="text-foreground">
        <text x="18" y="52" fontSize="11.5" fill="currentColor">&ldquo;…transaction flows</text>
        <text x="18" y="68" fontSize="11.5" fill="currentColor">processing billions in volume&rdquo;</text>
        <text x="502" y="52" fontSize="11.5" fill="currentColor">Merchant gateway work,</text>
        <text x="502" y="68" fontSize="11.5" fill="currentColor">and a named ATM network</text>
        <text x="260" y="148" fontSize="11.5" fill="currentColor">Same false claim, duplicated on the home page.</text>
        <text x="260" y="166" fontSize="11.5" fill="currentColor">Fixing the page you were shown is not fixing the site.</text>
      </g>

      <g className="text-destructive">
        <text x="260" y="58" fontSize="13" fontWeight="700" fill="currentColor">No such achievement</text>
        <text x="260" y="74" fontSize="10.5" fill="currentColor">plausible, well-written, false</text>
      </g>

      <g className="text-primary">
        <path d="M216 58 h26 m-7 -5 l7 5 l-7 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M458 58 h26 m-7 -5 l7 5 l-7 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M350 94 v24 m-5 -7 l5 7 l5 -7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>

      <g className="text-muted-foreground">
        <text x="8" y="200" fontSize="10.5" fontStyle="italic" fill="currentColor">
          The correction is a source document, not a better adjective.
        </text>
      </g>
    </svg>
  );
}

function AgentRoutingVisual() {
  const tiers = [
    { y: 74, w: 468, label: "Local — OpenClaw + Ollama", sub: "fast, private, free · handles most of it", pct: "~90%", tone: "text-primary" },
    { y: 118, w: 120, label: "Claude Cowork", sub: "reasoning, documents, artifacts", pct: "", tone: "text-foreground" },
    { y: 162, w: 120, label: "Claude Code", sub: "terminal, repos, agentic builds", pct: "", tone: "text-foreground" }
  ];

  return (
    <svg viewBox="0 0 700 220" width="700" height="220" className="w-full h-auto" role="img" aria-label="A tiered agent architecture. A Telegram interface feeds a router. A local OpenClaw and Ollama agent handles roughly 90 percent of tasks, escalating to Claude Cowork for reasoning and documents, and Claude Code for terminal and repository work.">
      <g className="text-border">
        <rect x="8" y="62" width="112" height="120" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="150" y1="74" x2="150" y2="172" stroke="currentColor" strokeWidth="1.5" />
      </g>

      <g className="text-muted-foreground">
        <text x="8" y="24" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">INTERFACE</text>
        <text x="186" y="24" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">ROUTED BY TASK WEIGHT, NOT BY CAPABILITY</text>
      </g>

      <g className="text-foreground">
        <text x="64" y="112" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="currentColor">Telegram</text>
        <text x="64" y="130" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="currentColor">bot</text>
      </g>
      <g className="text-muted-foreground">
        <text x="64" y="150" textAnchor="middle" fontSize="9.5" fill="currentColor">from anywhere,</text>
        <text x="64" y="162" textAnchor="middle" fontSize="9.5" fill="currentColor">no terminal</text>
      </g>

      <g className="text-primary">
        <path d="M120 122 h26 m-7 -5 l7 5 l-7 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {tiers.map((t, i) => (
        <g key={i}>
          <g className={t.tone}>
            <rect x="186" y={t.y} width={t.w} height="30" rx="5" fill="currentColor" opacity={i === 0 ? "0.16" : "0.09"} />
            <rect x="186" y={t.y} width="3" height="30" fill="currentColor" />
          </g>
          <g className="text-foreground">
            <text x="198" y={t.y + 14} fontSize="12" fontWeight="600" fill="currentColor">{t.label}</text>
          </g>
          <g className="text-muted-foreground">
            <text x="198" y={t.y + 26} fontSize="9.5" fill="currentColor">{t.sub}</text>
          </g>
          {t.pct && (
            <g className="text-primary">
              <text x={186 + t.w + 10} y={t.y + 20} fontSize="13" fontWeight="700" fill="currentColor">{t.pct}</text>
            </g>
          )}
        </g>
      ))}

      <g className="text-muted-foreground">
        <text x="8" y="208" fontSize="10.5" fontStyle="italic" fill="currentColor">
          Most tasks do not need the largest model. Latency, privacy and cost are axes too.
        </text>
      </g>
    </svg>
  );
}

function SkillLayersVisual() {
  const layers = [
    {
      y: 44,
      w: 150,
      name: "description",
      detail: "one sentence",
      when: "Always in context — it is what decides whether the skill fires at all."
    },
    {
      y: 104,
      w: 290,
      name: "SKILL.md body",
      detail: "the procedure, under 100 lines",
      when: "Loads on activation — five ordered steps, and nothing the model does not need yet."
    },
    {
      y: 164,
      w: 430,
      name: "references/",
      detail: "cdd-checklist.md · output-template.md",
      when: "Pulled mid-task, only when a step calls for it."
    }
  ];

  return (
    <svg viewBox="0 0 700 240" width="700" height="240" className="w-full h-auto" role="img" aria-label="A skill built in three layers of progressive disclosure: a one-sentence description always in context, a SKILL.md body under 100 lines loaded on activation, and reference files pulled in mid-task only when a step calls for them.">
      <g className="text-muted-foreground">
        <text x="8" y="24" fontSize="9.5" fontWeight="600" letterSpacing="0.08em" fill="currentColor">
          PROGRESSIVE DISCLOSURE — WHAT THE MODEL CARRIES, AND WHEN
        </text>
      </g>

      {layers.map((l, i) => (
        <g key={i}>
          <g className="text-primary">
            <rect x="8" y={l.y} width={l.w} height="40" rx="6" fill="currentColor" opacity={0.08 + i * 0.05} />
            <rect x="8" y={l.y} width="3" height="40" fill="currentColor" />
          </g>
          <g className="text-foreground">
            <text x="20" y={l.y + 18} fontSize="12.5" fontWeight="600" fill="currentColor">{l.name}</text>
          </g>
          <g className="text-muted-foreground">
            <text x="20" y={l.y + 32} fontSize="9.5" fill="currentColor">{l.detail}</text>
            <text x="470" y={l.y + 16} fontSize="10" fill="currentColor">{l.when.slice(0, 34)}</text>
            <text x="470" y={l.y + 29} fontSize="10" fill="currentColor">{l.when.slice(34)}</text>
          </g>
        </g>
      ))}

      <g className="text-border">
        <line x1="460" y1="38" x2="460" y2="210" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      <g className="text-muted-foreground">
        <text x="8" y="228" fontSize="10.5" fontStyle="italic" fill="currentColor">
          The body stays short because the detail lives one level down — not because there is less of it.
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

type BuildLink = { href: string; label: string; internal?: boolean };

type Build = {
  title: string;
  icon: LucideIcon;
  eyebrow: string;
  goal: string;
  journey: string[];
  shipped: string[];
  technique: { name: string; body: string };
  caution?: { name: string; items: { claim: string; reality: string }[]; body: string };
  visual: ReactNode;
  links: BuildLink[];
  tags: string[];
};

const builds: Build[] = [
  {
    title: "Ekho Music Platform",
    icon: Headphones,
    eyebrow: "Claude Code · Aug–Sep 2026 · Active",
    goal:
      "A founder needed working product, not a deck — a two-sided platform connecting independent artists with their most devoted fans. I came in to prototype it end to end, and to keep it moving fast enough that artist and investor feedback could actually shape what got built next.",
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
    visual: <PrototypeLoopVisual />,
    links: [{ href: "https://ekho-music-prototype.netlify.app/", label: "Live prototype" }],
    tags: ["Claude Code", "Rapid prototyping", "Stakeholder loops"]
  },
  {
    title: "Sustainable Aviation Fuel Cost Explorer",
    icon: LineChart,
    eyebrow: "Claude Cowork · Sep 2026",
    goal:
      "Port three techno-economic models out of Excel into Python, then make the results something a project lead could interrogate rather than take on faith — pathway against pathway, hub by hub, benchmarked against conventional jet fuel.",
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
    visual: <UnitErrorVisual />,
    links: [],
    tags: ["Claude Cowork", "Model porting", "Data provenance"]
  },
  {
    title: "This Website",
    icon: Globe,
    eyebrow: "Claude Cowork · ongoing",
    goal:
      "Run a real production site end to end — not a sandbox — and keep every claim on it accurate enough to hand to someone who might hire me.",
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
    visual: <GroundingVisual />,
    links: [{ href: "/projects", label: "See the projects", internal: true }],
    tags: ["Claude Cowork", "Verification", "Shipping"]
  },
  {
    title: "A Reusable Compliance Skill",
    icon: ShieldCheck,
    eyebrow: "Claude Skills · case study for an AI banking platform · June 2026",
    goal:
      "A commercial lending team and a BSA/AML compliance team, interviewed separately, named the same bottleneck without prompting: loan files reaching compliance incomplete, every return costing days of rework before the clearance clock even starts. Build something that catches the gaps before submission rather than after.",
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
    visual: <SkillLayersVisual />,
    links: [],
    tags: ["Claude Skills", "Evals", "Compliance", "Scope design"]
  },
  {
    title: "Tiered Agent Architecture",
    icon: Network,
    eyebrow: "OpenClaw · Ollama · Claude · ongoing",
    goal:
      "Stop reaching for the largest available model for every task, and find out how much of day-to-day work a small local model can actually carry.",
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
    visual: <AgentRoutingVisual />,
    links: [],
    tags: ["Local models", "Agent design", "Context engineering"]
  }
];

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

export default function BuildingWithAI() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 sm:py-24 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-xs font-medium" data-testid="badge-bwa-eyebrow">
                Practice &amp; Method
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-bwa-title">
                Claude Project Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Five builds from the past few months, the path each one actually took, and the transferable technique behind it. Written for anyone evaluating how I work — including the parts that went wrong.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { value: "25", label: "Published artifacts" },
                  { value: "5", label: "Featured builds" },
                  { value: "1", label: "Authored skill" },
                  { value: "1", label: "Live production site" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1" data-testid={`stat-bwa-${i}`}>
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Framing */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 max-w-3xl">
              <p className="text-lg text-muted-foreground">
                The interesting part of this work is not that AI wrote the code. It is what changes when the distance between an idea and something a stakeholder can react to collapses into an afternoon.
              </p>
              <p className="text-lg text-muted-foreground">
                Each build below pushed on that differently — a startup product, a techno-economic model, a compliance skill written to be handed to someone else, this website, and the agent stack I run at home. Each one ends with the technique I would actually teach, because the technique is the part that transfers.
              </p>
            </div>
          </div>
        </section>

        {/* Builds */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {builds.map((build, index) => {
                const Icon = build.icon;
                return (
                  <Card key={index} data-testid={`card-bwa-build-${index}`}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="space-y-8">
                        {/* Header */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="space-y-1 flex-1 min-w-0">
                            <div className="text-xs text-muted-foreground uppercase tracking-wide">
                              {build.eyebrow}
                            </div>
                            <h2 className="font-display text-2xl font-bold">{build.title}</h2>
                          </div>
                        </div>

                        {/* Goal */}
                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            The Goal
                          </h3>
                          <p className="text-muted-foreground">{build.goal}</p>
                        </div>

                        {/* Visual */}
                        <div className="rounded-lg border border-border bg-muted/20 p-4 sm:p-6 overflow-x-auto">
                          {build.visual}
                        </div>

                        {/* Journey */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            How It Went
                          </h3>
                          <ol className="space-y-3">
                            {build.journey.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-3">
                                <span className="font-mono text-xs text-primary font-semibold mt-1 shrink-0 w-5">
                                  {String(stepIndex + 1).padStart(2, "0")}
                                </span>
                                <span className="text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Shipped */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            What Shipped
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {build.shipped.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What review caught */}
                        {build.caution && (
                          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-5 space-y-4">
                            <div className="text-xs text-destructive uppercase tracking-wide font-semibold">
                              {build.caution.name}
                            </div>
                            <div className="space-y-3">
                              {build.caution.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="grid sm:grid-cols-2 gap-2 sm:gap-4">
                                  <div className="flex items-start gap-2">
                                    <span className="text-destructive font-mono text-xs mt-0.5 shrink-0">✕</span>
                                    <span className="text-sm text-muted-foreground">{item.claim}</span>
                                  </div>
                                  <div className="flex items-start gap-2 sm:border-l sm:pl-4 border-border">
                                    <span className="text-sm text-foreground">{item.reality}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">{build.caution.body}</p>
                          </div>
                        )}

                        {/* Technique */}
                        <div className="rounded-lg border-l-2 border-primary bg-muted/30 p-5 space-y-2">
                          <div className="text-xs text-primary uppercase tracking-wide font-semibold">
                            The Technique
                          </div>
                          <h3 className="font-display text-lg font-bold">{build.technique.name}</h3>
                          <p className="text-muted-foreground text-sm">{build.technique.body}</p>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t">
                          <div className="flex flex-wrap gap-2">
                            {build.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {build.links.map((link, linkIndex) =>
                              link.internal ? (
                                <Button key={linkIndex} variant="outline" size="sm" className="gap-1" asChild>
                                  <Link href={link.href}>
                                    {link.label} <ArrowRight className="h-3 w-3" />
                                  </Link>
                                </Button>
                              ) : (
                                <Button key={linkIndex} variant="outline" size="sm" className="gap-1" asChild>
                                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.label} <ExternalLink className="h-3 w-3" />
                                  </a>
                                </Button>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 sm:py-24 border-t bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold" data-testid="text-bwa-curriculum-title">
                  What I Would Teach
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  The same eight ideas keep doing the work across every project above. They are what I would build a course around — each one is demonstrable in a live session, and each one fails in a way people remember.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 p-5 rounded-lg border border-border bg-background"
                    data-testid={`card-bwa-curriculum-${index}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-primary font-semibold shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-semibold">{item.module}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild data-testid="button-bwa-contact">
                  <Link href="/contact">
                    Get in touch <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild data-testid="button-bwa-projects">
                  <Link href="/projects">See all projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
