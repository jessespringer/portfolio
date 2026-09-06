import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, Linkedin, Twitter } from "lucide-react";
const SiLinkedin = Linkedin;
const FaXTwitter = Twitter;
import WalletConnectionDialog from "./WalletConnectionDialog";
import { useWallet } from "@/contexts/WalletContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const { isConnected, walletAddress, disconnect } = useWallet();

  const handleConnectWallet = () => {
    if (isConnected) {
      disconnect();
    } else {
      setShowWalletDialog(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="font-display text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Jasper Springs
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#music" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-music">
              Music
            </a>
            <a href="#portfolio" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-portfolio">
              Portfolio
            </a>
            <a href="#about" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-about">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="button-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <Button
              onClick={handleConnectWallet}
              variant={isConnected ? "secondary" : "default"}
              size="sm"
              className="gap-2"
              data-testid="button-connect-wallet"
            >
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">
                {isConnected ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : "Connect"}
              </span>
            </Button>

            <WalletConnectionDialog
              open={showWalletDialog}
              onOpenChange={setShowWalletDialog}
            />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <a href="#music" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
                Music
              </a>
              <a href="#portfolio" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
                Portfolio
              </a>
              <a href="#about" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
