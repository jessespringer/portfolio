import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Wallet, CreditCard, CheckCircle2, Zap } from "lucide-react";
const SiSolana = Zap;
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/contexts/WalletContext";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  nftId: string;
  title: string;
  priceSOL: string;
  priceUSD: string;
}

export default function PaymentDialog({
  open,
  onOpenChange,
  nftId,
  title,
  priceSOL,
  priceUSD,
}: PaymentDialogProps) {
  const { toast } = useToast();
  const { isConnected, walletAddress } = useWallet();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const mintNFTMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/mint", {
        nftId,
        walletAddress: walletAddress,
      });
      return res.json();
    },
    onSuccess: (data: any) => {
      if (data.success) {
        setPaymentSuccess(true);
        queryClient.invalidateQueries({ queryKey: ["/api/nfts"] });
        toast({
          title: "NFT Minted!",
          description: `Successfully minted ${title}`,
        });
      }
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "Failed to mint NFT. Please try again.";
      toast({
        title: "Minting Failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const stripeCheckoutMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/stripe/create-checkout", {
        nftId,
        priceUSD,
        title,
      });
      return res.json();
    },
    onSuccess: (data: any) => {
      if (data.success && data.checkoutUrl) {
        toast({
          title: "Redirecting to Stripe",
          description: "Complete payment in the new window. Return here to see your NFT.",
        });
        const checkoutWindow = window.open(data.checkoutUrl, "_blank");
        
        if (checkoutWindow) {
          toast({
            title: "Payment Window Opened",
            description: "Complete the payment and your NFT will be updated automatically.",
          });
        }
      }
    },
    onError: () => {
      toast({
        title: "Checkout Failed",
        description: "Failed to create checkout session.",
        variant: "destructive",
      });
    },
  });

  if (paymentSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent data-testid="dialog-payment-success">
          <div className="text-center py-8 space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-green-500/10">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground">
                Your NFT "{title}" is being minted to your wallet.
              </p>
            </div>
            <Button
              onClick={() => {
                setPaymentSuccess(false);
                onOpenChange(false);
              }}
              data-testid="button-close-success"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-payment">
        <DialogHeader>
          <DialogTitle>Purchase {title}</DialogTitle>
          <DialogDescription>
            Choose your payment method to mint this NFT
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="crypto" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="crypto" data-testid="tab-crypto">
              <Wallet className="h-4 w-4 mr-2" />
              Crypto
            </TabsTrigger>
            <TabsTrigger value="card" data-testid="tab-card">
              <CreditCard className="h-4 w-4 mr-2" />
              Credit Card
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crypto" className="space-y-4">
            <div className="space-y-3 py-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <span className="text-sm text-muted-foreground">Price</span>
                <div className="text-right">
                  <div className="font-semibold flex items-center gap-2">
                    <SiSolana className="h-4 w-4" />
                    {priceSOL} SOL
                  </div>
                  <div className="text-xs text-muted-foreground">${priceUSD}</div>
                </div>
              </div>

              {!isConnected && (
                <Badge variant="secondary" className="w-full justify-center py-2">
                  Please connect wallet first
                </Badge>
              )}

              <div className="text-xs text-muted-foreground">
                Gas fees: ~0.00001 SOL (estimated)
              </div>
            </div>

            <Button
              onClick={() => mintNFTMutation.mutate()}
              disabled={!isConnected || !walletAddress || walletAddress.trim().length === 0 || mintNFTMutation.isPending}
              className="w-full"
              data-testid="button-pay-crypto"
            >
              {mintNFTMutation.isPending ? "Processing..." : "Pay with Crypto"}
            </Button>
          </TabsContent>

          <TabsContent value="card" className="space-y-4">
            <div className="space-y-3 py-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <span className="text-sm text-muted-foreground">Price</span>
                <div className="text-right">
                  <div className="font-semibold">${priceUSD}</div>
                  <div className="text-xs text-muted-foreground">{priceSOL} SOL</div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>

              <div className="text-xs text-muted-foreground">
                Secure payment processed by Stripe
              </div>
            </div>

            <Button
              onClick={() => stripeCheckoutMutation.mutate()}
              disabled={stripeCheckoutMutation.isPending}
              className="w-full"
              data-testid="button-pay-card"
            >
              {stripeCheckoutMutation.isPending ? "Redirecting..." : "Pay with Card"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
