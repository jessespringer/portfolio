import MusicNFTCard from '../MusicNFTCard';
const artwork1 = '/attached_assets/generated_images/music_nft_album_artwork_1.png';

export default function MusicNFTCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <MusicNFTCard
        id="001"
        title="Digital Dreams"
        artwork={artwork1}
        duration="3:42"
        mintNumber="001"
        priceSOL="0.5"
        priceUSD="75"
        genre="Hip Hop"
        available={true}
      />
    </div>
  );
}
