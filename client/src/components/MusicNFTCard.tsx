import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, Wallet, CreditCard, Package, Video, X, Zap } from "lucide-react";
const SiSolana = Zap;
import PaymentDialog from "./PaymentDialog";

// Global audio manager - ensures only one track plays at a time
const audioManager = {
  currentAudio: null as HTMLAudioElement | null,
  currentId: null as string | null,
  stopCurrent: () => {
    if (audioManager.currentAudio) {
      audioManager.currentAudio.pause();
      audioManager.currentAudio.currentTime = 0;
      window.dispatchEvent(new CustomEvent('audioStopped', { detail: audioManager.currentId }));
      audioManager.currentAudio = null;
      audioManager.currentId = null;
    }
  },
  play: (audio: HTMLAudioElement, id: string) => {
    audioManager.stopCurrent();
    audioManager.currentAudio = audio;
    audioManager.currentId = id;
    audio.play().catch(err => console.error('Audio play error:', err));
  }
};

interface MusicNFTCardProps {
  id: string;
  title: string;
  artwork: string;
  duration: string;
  mintNumber: string;
  priceSOL: string;
  priceUSD: string;
  genre: string;
  available: boolean;
  audioUrl?: string | null;
  videoUrl?: string | null;
  videoProvider?: "youtube" | "vimeo" | null;
  videoId?: string | null;
  type?: string | null;
  physicalIncluded?: boolean | null;
  editionSize?: string | null;
  description?: string | null;
}

export default function MusicNFTCard({
  id,
  title,
  artwork,
  duration,
  mintNumber,
  priceSOL,
  priceUSD,
  genre,
  available,
  audioUrl,
  videoUrl,
  videoProvider,
  videoId,
  type = "track",
  physicalIncluded = false,
  editionSize,
  description,
}: MusicNFTCardProps) {
  const isCollectible = type === "collectible";
  const isVideoCollectible = isCollectible && !!(videoUrl || (videoProvider && videoId));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "card">("crypto");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    
    // Listen for stop events from other cards
    const handleAudioStopped = (e: CustomEvent) => {
      if (e.detail === id) {
        setIsPlaying(false);
      }
    };
    
    window.addEventListener('audioStopped', handleAudioStopped as EventListener);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
      }
      window.removeEventListener('audioStopped', handleAudioStopped as EventListener);
    };
  }, [audioUrl, id]);

  const handlePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    
    if (!audioUrl || !audioRef.current) {
      console.log(`No audio available for ${title}`);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioManager.currentAudio = null;
      audioManager.currentId = null;
    } else {
      audioManager.play(audioRef.current, id);
      setIsPlaying(true);
    }
  };

  const handleBuyCrypto = () => {
    setPaymentMethod("crypto");
    setShowPaymentDialog(true);
  };

  const handleBuyCard = () => {
    setPaymentMethod("card");
    setShowPaymentDialog(true);
  };

  return (
    <Card className={`group overflow-hidden hover-elevate ${isCollectible ? 'ring-2 ring-primary/30' : ''}`} data-testid={`card-nft-${id}`} data-playing={isPlaying}>
      <div 
        className={`relative aspect-square overflow-hidden bg-black/5 dark:bg-white/5 ${(!isCollectible || isVideoCollectible) ? 'cursor-pointer' : ''}`}
        onClick={isVideoCollectible ? () => setShowVideoPreview(true) : (!isCollectible ? handlePlayPause : undefined)}
        data-testid={`artwork-container-${id}`}
        aria-label={isVideoCollectible ? `Watch ${title}` : (!isCollectible && audioUrl ? (isPlaying ? `Pause ${title}` : `Play ${title}`) : undefined)}
      >
        <img
          src={artwork}
          alt={title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
          data-testid={`img-artwork-${id}`}
        />
        
        {!isCollectible && (
          <>
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            
            <Button
              size="icon"
              variant="secondary"
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity h-14 w-14 rounded-full ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              onClick={handlePlayPause}
              data-testid={`button-play-${id}`}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
          </>
        )}

        {isVideoCollectible && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity h-14 w-14 rounded-full"
              onClick={() => setShowVideoPreview(true)}
              data-testid={`button-video-preview-${id}`}
            >
              <Video className="h-6 w-6" />
            </Button>
          </>
        )}


        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs gap-1" data-testid={`badge-solana-${id}`}>
            <SiSolana className="h-3 w-3" />
            Solana
          </Badge>
          {physicalIncluded && (
            <Badge className="text-xs gap-1 bg-green-600 hover:bg-green-700" data-testid={`badge-physical-${id}`}>
              <Package className="h-3 w-3" />
              Physical Included
            </Badge>
          )}
          {isVideoCollectible && (
            <Badge className="text-xs gap-1 bg-purple-600 hover:bg-purple-700" data-testid={`badge-video-${id}`}>
              <Video className="h-3 w-3" />
              Music Video
            </Badge>
          )}
          {!available && (
            <Badge variant="secondary" className="text-xs" data-testid={`badge-minted-${id}`}>
              Minted
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          <Badge variant="secondary" className="text-xs" data-testid={`badge-genre-${id}`}>
            {genre}
          </Badge>
          {editionSize && (
            <Badge variant="outline" className="text-xs bg-background/80" data-testid={`badge-edition-${id}`}>
              {editionSize}
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          {isCollectible ? (
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
              <span data-testid={`text-duration-${id}`}>{duration}</span>
              <span data-testid={`text-mint-${id}`}>Special Edition</span>
            </div>
          ) : (
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
              <span data-testid={`text-duration-${id}`}>{duration}</span>
              <span data-testid={`text-mint-${id}`}>#{mintNumber}</span>
            </div>
          )}
        </div>

        {isCollectible && description && (
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-sm text-muted-foreground line-clamp-2 cursor-help" data-testid={`text-description-${id}`}>
                {description}
              </p>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{description}</p>
            </TooltipContent>
          </Tooltip>
        )}

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold" data-testid={`text-price-sol-${id}`}>
            {priceSOL} SOL
          </span>
          <span className="text-sm text-muted-foreground" data-testid={`text-price-usd-${id}`}>
            ${priceUSD}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={handleBuyCrypto}
          disabled={!available}
          className="flex-1 gap-2"
          data-testid={`button-buy-crypto-${id}`}
        >
          <Wallet className="h-4 w-4" />
          Crypto
        </Button>
        <Button
          onClick={handleBuyCard}
          disabled={!available}
          variant="outline"
          className="flex-1 gap-2"
          data-testid={`button-buy-card-${id}`}
        >
          <CreditCard className="h-4 w-4" />
          Card
        </Button>
      </CardFooter>

      <PaymentDialog
        open={showPaymentDialog}
        onOpenChange={setShowPaymentDialog}
        nftId={id}
        title={title}
        priceSOL={priceSOL}
        priceUSD={priceUSD}
      />

      {isVideoCollectible && (
        <Dialog open={showVideoPreview} onOpenChange={setShowVideoPreview}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-black">
              {videoProvider && videoId ? (
                <iframe
                  src={
                    videoProvider === "youtube"
                      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
                      : `https://player.vimeo.com/video/${videoId}?autoplay=1`
                  }
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid={`video-preview-${id}`}
                />
              ) : (
                <video
                  src={videoUrl ?? undefined}
                  controls
                  autoPlay
                  className="w-full h-full"
                  data-testid={`video-preview-${id}`}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}
