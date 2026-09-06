import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MusicNFTCard from "./MusicNFTCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
type MusicNFT = {
  id: string;
  title: string;
  artwork: string;
  duration: string;
  mintNumber: string;
  priceSOL: string;
  priceUSD: string;
  genre: string;
  available: boolean;
  solanaAddress: string | null;
  audioUrl: string | null;
  videoUrl: string | null;
  videoProvider?: "youtube" | "vimeo" | null;
  videoId?: string | null;
  album: string | null;
  trackNumber: string | null;
  description: string | null;
  royaltyShare: string | null;
  type: string | null;
  physicalIncluded: boolean;
  editionSize: string | null;
};

export default function MusicCollection() {
  const [filter, setFilter] = useState<"all" | "available" | "minted" | "special">("all");

  const { data, isLoading, error } = useQuery<{ success: boolean; nfts: MusicNFT[] }>({
    queryKey: ["/api/nfts"],
  });

  const nfts = data?.nfts || [];

  // Sort to put collectibles first in "all" view
  const sortedNFTs = [...nfts].sort((a, b) => {
    if (a.type === "collectible" && b.type !== "collectible") return -1;
    if (a.type !== "collectible" && b.type === "collectible") return 1;
    return 0;
  });

  const filteredNFTs = sortedNFTs.filter((nft) => {
    if (filter === "all") return true;
    if (filter === "available") return nft.available;
    if (filter === "minted") return !nft.available;
    if (filter === "special") return nft.type === "collectible";
    return true;
  });

  return (
    <section id="music" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold" data-testid="text-collection-title">
              Music NFT Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Exclusive tracks minted on Solana. Buy with crypto or credit card.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              data-testid="button-filter-all"
            >
              All
            </Button>
            <Button
              variant={filter === "special" ? "default" : "outline"}
              onClick={() => setFilter("special")}
              data-testid="button-filter-special"
            >
              Special Editions
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
              data-testid="button-filter-available"
            >
              Available
            </Button>
            <Button
              variant={filter === "minted" ? "default" : "outline"}
              onClick={() => setFilter("minted")}
              data-testid="button-filter-minted"
            >
              Minted
            </Button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Failed to load NFT collection</p>
            </div>
          ) : filteredNFTs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No NFTs found for this filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNFTs.map((nft) => (
                <MusicNFTCard
                  key={nft.id}
                  id={nft.id}
                  title={nft.title}
                  artwork={nft.artwork}
                  duration={nft.duration}
                  mintNumber={nft.mintNumber}
                  priceSOL={nft.priceSOL}
                  priceUSD={nft.priceUSD}
                  genre={nft.genre}
                  available={nft.available}
                  audioUrl={nft.audioUrl}
                  videoUrl={nft.videoUrl}
                  videoProvider={nft.videoProvider}
                  videoId={nft.videoId}
                  type={nft.type}
                  physicalIncluded={nft.physicalIncluded}
                  editionSize={nft.editionSize}
                  description={nft.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
