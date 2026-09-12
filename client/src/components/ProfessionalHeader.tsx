import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Twitter } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/building-with-ai", label: "Building with AI" },
  { href: "/creative", label: "Creative Lab" },
  { href: "/build-log", label: "Build Log" },
  { href: "/contact", label: "Contact" },
];

export default function ProfessionalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="font-display text-xl font-bold cursor-pointer" data-testid="link-logo">
                Jesse Springer
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  location === link.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover-elevate active-elevate-2"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="button-linkedin">
                <a href="https://www.linkedin.com/in/jesse-springer-123642b/" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-twitter">
                <a href="https://twitter.com/jessespringer21" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    location === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover-elevate active-elevate-2"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
