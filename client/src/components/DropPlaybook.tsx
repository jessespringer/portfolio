import { ChevronDown } from "lucide-react";

/**
 * "Inside the Drop Playbook" sub-section for the Ekho drops card on /projects.
 * Public-level description only: no internal playbook content, requirement IDs or real results.
 * Everything with a date or a curve here is EXAMPLE data and is labeled as such on the page.
 */

function ExampleBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
      Example data
    </span>
  );
}

const layers = [
  {
    name: "Macro best practices",
    body: "What is working for music drops right now on each social platform: formats, timing, cadence and the asks that get answered. It keeps evolving as platforms change, so the advice does not go stale."
  },
  {
    name: "Viewer behavior & share of attention",
    body: "Where an artist's audience actually spends its attention, and when, so the plan puts effort into the rooms people are in rather than the ones a platform says to post in."
  },
  {
    name: "An optional touchpoint plan",
    body: "A pre- and post-drop plan with a planner and prescribed content for each touchpoint, built to maximize interest before the drop and monetization after it. The artist can switch it on, edit it, or ignore it."
  }
];

const plan = [
  { phase: "Before", when: "2 weeks out", touch: "Announce the drop and open a countdown page with short clips" },
  { phase: "Before", when: "1 week out", touch: "Behind-the-process clip with a one-tap ask to join the list" },
  { phase: "Before", when: "2 days out", touch: "Early access for people who already support you" },
  { phase: "Drop day", when: "Release", touch: "Drop page goes live; direct-to-camera post; message known contacts" },
  { phase: "After", when: "2 days after", touch: "Thank-you note to buyers with what's next" },
  { phase: "After", when: "1 week after", touch: "Recap clip and the next ask, timed to the audience's best hours" }
];

function ComparisonIllustration() {
  // Illustrative curve shapes only (no axis values, no real or sample results).
  return (
    <svg viewBox="0 0 480 270" width="480" height="270" className="w-full h-auto max-w-2xl mx-auto block" role="img" aria-label="Example illustration, not real data: the Drop Dashboard plots the running total for drops planned with the playbook against drops run without it, from announcement to after release.">
      <g className="text-amber-600 dark:text-amber-400">
        <text x="0" y="16" fontSize="13" fontWeight="700" fill="currentColor">EXAMPLE · ILLUSTRATIVE SHAPES, NOT REAL DATA</text>
      </g>
      <g className="text-primary">
        <line x1="0" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="3" />
        <text x="36" y="45" fontSize="13" fontWeight="600" fill="currentColor">With the playbook</text>
        <path d="M34 238 C 120 228, 220 190, 320 130 S 430 70, 470 62" fill="none" stroke="currentColor" strokeWidth="3" />
      </g>
      <g className="text-muted-foreground">
        <line x1="190" y1="40" x2="218" y2="40" stroke="currentColor" strokeWidth="2.5" strokeDasharray="7 5" />
        <text x="226" y="45" fontSize="13" fill="currentColor">Without it</text>
        <path d="M34 238 C 120 236, 220 226, 320 204 S 430 176, 470 170" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="7 5" />
        <text x="26" y="160" textAnchor="middle" fontSize="12" fill="currentColor" transform="rotate(-90 22 160)">Running total</text>
        <text x="34" y="262" fontSize="12" fill="currentColor">Announce</text>
        <text x="320" y="262" textAnchor="middle" fontSize="12" fill="currentColor">Release</text>
        <text x="476" y="262" textAnchor="end" fontSize="12" fill="currentColor">After</text>
      </g>
      <g className="text-border">
        <line x1="34" y1="244" x2="476" y2="244" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="62" x2="34" y2="244" stroke="currentColor" strokeWidth="1.5" />
        <line x1="320" y1="62" x2="320" y2="244" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}

export default function DropPlaybook({ testId }: { testId?: string }) {
  return (
    <details className="group rounded-lg border border-border bg-muted/20" data-testid={testId}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 sm:px-5 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
          Inside the Drop Playbook
          <span className="normal-case tracking-normal font-normal"> · what it tracks, an example plan, and how the dashboard compares drops</span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>

      <div className="space-y-6 border-t border-border px-4 py-5 sm:px-5">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What the playbook tracks</h4>
          <div className="grid gap-3">
            {layers.map((l, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-4 space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-primary font-semibold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <h5 className="font-semibold text-sm">{l.name}</h5>
                </div>
                <p className="text-sm text-muted-foreground">{l.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3" data-testid="drop-playbook-example-plan">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Example touchpoint plan</h4>
            <ExampleBadge />
          </div>
          <p className="text-sm text-muted-foreground">
            A made-up plan for a Jasper Springs drop, to show the shape of the planner. It is not the playbook's actual prescriptions, and it carries no results.
          </p>
          <ol className="rounded-lg border border-dashed border-amber-500/50 bg-background divide-y divide-border">
            {plan.map((t, i) => (
              <li key={i} className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[6rem_7.5rem_1fr] gap-x-3 gap-y-0.5 px-4 py-2.5 text-sm">
                <span className={`font-semibold ${t.phase === "Drop day" ? "text-primary" : "text-foreground"}`}>{t.phase}</span>
                <span className="text-muted-foreground sm:order-none">{t.when}</span>
                <span className="text-muted-foreground col-span-2 sm:col-span-1">{t.touch}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-3" data-testid="drop-playbook-example-comparison">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">How the Drop Dashboard compares drops</h4>
            <ExampleBadge />
          </div>
          <div className="rounded-lg border border-dashed border-amber-500/50 bg-background p-3 sm:p-5 overflow-x-auto">
            <ComparisonIllustration />
          </div>
          <p className="text-sm text-muted-foreground">
            An illustration of the view, not a result: the curves are drawn by hand and carry no numbers. The live dashboard lines up drops planned with the playbook against drops run without it, so an artist can see during a drop whether the plan is paying off. Real results stay inside Ekho.
          </p>
        </div>
      </div>
    </details>
  );
}
