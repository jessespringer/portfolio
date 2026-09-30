import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * "How it was built" sub-section for a build card on /projects: the path a build
 * actually took, what shipped, what review caught, and the transferable technique.
 * Collapsed by default so the page stays scannable; native <details> keeps it
 * keyboard- and screen-reader-friendly with no extra JS.
 */
export type Story = {
  journey: string[];
  shipped: string[];
  technique: { name: string; body: string };
  caution?: { name: string; items: { claim: string; reality: string }[]; body: string };
  visual?: ReactNode;
};

export default function BuildStory({ story, testId }: { story: Story; testId?: string }) {
  return (
    <details className="group rounded-lg border border-border bg-muted/20" data-testid={testId}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 sm:px-5 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
          How it was built
          <span className="normal-case tracking-normal font-normal"> · the path, what shipped, and the technique</span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>

      <div className="space-y-6 border-t border-border px-4 py-5 sm:px-5">
        {story.visual && (
          <div className="rounded-lg border border-border bg-background p-3 sm:p-5 overflow-x-auto">
            {story.visual}
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">How It Went</h4>
          <ol className="space-y-3">
            {story.journey.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-xs text-primary font-semibold mt-1 shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What Shipped</h4>
          <ul className="grid sm:grid-cols-2 gap-2">
            {story.shipped.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {story.caution && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 sm:p-5 space-y-4">
            <div className="text-xs text-destructive uppercase tracking-wide font-semibold">{story.caution.name}</div>
            <div className="space-y-3">
              {story.caution.items.map((item, i) => (
                <div key={i} className="grid sm:grid-cols-2 gap-2 sm:gap-4">
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
            <p className="text-sm text-muted-foreground">{story.caution.body}</p>
          </div>
        )}

        <div className="rounded-lg border-l-2 border-primary bg-muted/30 p-4 sm:p-5 space-y-2">
          <div className="text-xs text-primary uppercase tracking-wide font-semibold">The Technique</div>
          <h4 className="font-display text-lg font-bold">{story.technique.name}</h4>
          <p className="text-muted-foreground text-sm">{story.technique.body}</p>
        </div>
      </div>
    </details>
  );
}
