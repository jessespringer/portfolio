import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-20 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="font-mono text-sm text-primary font-semibold">404</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-not-found-title">
              Page not found
            </h1>
            <p className="text-lg text-muted-foreground">
              This page doesn't exist, or it has moved.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-1" data-testid="button-not-found-home">
                <Link href="/">
                  Home <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-not-found-builds">
                <Link href="/projects">AI &amp; Crypto Builds</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
