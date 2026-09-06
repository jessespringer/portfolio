import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, Linkedin, Twitter } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;
import ProfessionalHeader from "@/components/ProfessionalHeader";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    title: "LinkedIn",
    description: "Best for professional inquiries and networking.",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/jesse-springer-123642b/",
    cta: "Connect on LinkedIn"
  },
  {
    title: "X (Twitter)",
    description: "Follow for thoughts on product, AI, and building in public.",
    icon: FaXTwitter,
    href: "https://twitter.com/jessespringer21",
    cta: "Follow @jessespringer21"
  },
  {
    title: "Email",
    description: "For detailed discussions or collaboration opportunities.",
    icon: Mail,
    href: "mailto:hello@jessespringer.com",
    cta: "Send Email"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-contact-title">
                  Get in Touch
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  I'm always interested in discussing product leadership, fintech opportunities, and interesting technical challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-contact-${index}`}>
                    <CardContent className="p-6 space-y-4">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.cta}
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="font-display text-2xl font-bold" data-testid="text-open-to-title">
                Currently Open To
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Product Leadership Roles</h3>
                  <p className="text-muted-foreground text-sm">
                    Director+ positions in fintech, crypto, payments, or AI. Hybrid or remote preferred.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Advisory & Consulting</h3>
                  <p className="text-muted-foreground text-sm">
                    Strategic product guidance for early-stage companies in crypto, payments, or AI.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Speaking & Writing</h3>
                  <p className="text-muted-foreground text-sm">
                    Topics include product leadership, building in public, and the intersection of AI and creativity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Interesting Collaborations</h3>
                  <p className="text-muted-foreground text-sm">
                    Always curious about novel projects at the intersection of technology and culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold">
                Explore More
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/work">View Work Experience</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">Browse Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/creative">See Creative Lab</Link>
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
