import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, ExternalLink, Zap } from "lucide-react";
const SiSolana = Zap;
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/contexts/WalletContext";

interface WalletConnectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WalletConnectionDialog({
  open,
  onOpenChange,
}: WalletConnectionDialogProps) {
  const { toast } = useToast();
  const { connect } = useWallet();

  const generateWalletMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/wallet/generate");
      return res.json();
    },
    onSuccess: (data: any) => {
      if (data.success && data.wallet?.publicKey && data.wallet.publicKey.length > 0) {
        const walletAddress = data.wallet.publicKey;
        connect(walletAddress);
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to Solana network",
        });
        onOpenChange(false);
      } else {
        toast({
          title: "Invalid Response",
          description: "Wallet connection returned invalid data",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid="dialog-wallet-connection">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription>
            Connect your Solana wallet to purchase NFTs and interact with the blockchain.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <Button
            variant="outline"
            className="w-full justify-between h-auto p-4"
            onClick={() => generateWalletMutation.mutate()}
            disabled={generateWalletMutation.isPending}
            data-testid="button-connect-phantom"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <SiSolana className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Phantom Wallet</div>
                <div className="text-xs text-muted-foreground">
                  {generateWalletMutation.isPending ? "Connecting..." : "Popular Solana wallet"}
                </div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between h-auto p-4"
            onClick={() => generateWalletMutation.mutate()}
            disabled={generateWalletMutation.isPending}
            data-testid="button-connect-solflare"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Solflare</div>
                <div className="text-xs text-muted-foreground">
                  Secure Solana wallet
                </div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          By connecting a wallet, you agree to the Terms of Service
        </div>
      </DialogContent>
    </Dialog>
  );
}
