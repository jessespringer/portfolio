/* Inline-SVG diagrams for the build stories on /projects (moved from the former Claude Project Work page).
   Theme-aware via currentColor + text-* classes. */

export function PrototypeLoopVisual() {
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

export function UnitErrorVisual() {
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

export function GroundingVisual() {
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

export function AgentRoutingVisual() {
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

export function SkillLayersVisual() {
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
