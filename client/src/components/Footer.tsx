import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Twitter, Zap } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;
const SiSolana = Zap;

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription triggered");
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">Jasper Springs</h3>
            <p className="text-sm text-muted-foreground">
              Building at the intersection of AI, hip hop, and blockchain technology.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Explore</h4>
            <nav className="flex flex-col gap-2">
              <a href="#music" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-footer-music">
                Music Collection
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-footer-portfolio">
                Portfolio
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-footer-about">
                About
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="button-footer-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-footer-twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-footer-solana">
                <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">
                  <SiSolana className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Join the Journey</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="text-sm"
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full gap-2" size="sm" data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Jasper Springs. Built with Solana + Stripe + AI
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover-elevate active-elevate-2 px-2 py-1 rounded-md">Privacy</a>
            <a href="#" className="hover-elevate active-elevate-2 px-2 py-1 rounded-md">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
