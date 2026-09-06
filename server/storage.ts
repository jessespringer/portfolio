import { type User, type InsertUser, type MusicNFT, type InsertMusicNFT } from "../shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllMusicNFTs(): Promise<MusicNFT[]>;
  getMusicNFT(id: string): Promise<MusicNFT | undefined>;
  createMusicNFT(nft: InsertMusicNFT): Promise<MusicNFT>;
  updateMusicNFT(id: string, updates: Partial<MusicNFT>): Promise<MusicNFT | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private musicNFTs: Map<string, MusicNFT>;

  constructor() {
    this.users = new Map();
    this.musicNFTs = new Map();
    this.initializeMockNFTs();
  }

  private initializeMockNFTs() {
    const cacheBust = Date.now();
    const albumTracks: InsertMusicNFT[] = [
      {
        title: "In The Flow Intro",
        artwork: `/music/artwork/01-in-the-flow-intro.png?v=${cacheBust}`,
        duration: "0:58",
        mintNumber: "001",
        priceSOL: "0.25",
        priceUSD: "35",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/01-in-the-flow-intro.mp3",
        album: "In The Flow",
        trackNumber: "01",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Elevated Thinking",
        artwork: `/music/artwork/02-elevated-thinking.png?v=${cacheBust}`,
        duration: "3:01",
        mintNumber: "002",
        priceSOL: "0.5",
        priceUSD: "75",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/02-elevated-thinking.mp3",
        album: "In The Flow",
        trackNumber: "02",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "In The Flow",
        artwork: `/music/artwork/03-in-the-flow.png?v=${cacheBust}`,
        duration: "2:55",
        mintNumber: "003",
        priceSOL: "0.75",
        priceUSD: "110",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/03-in-the-flow.mp3",
        album: "In The Flow",
        trackNumber: "03",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Kinetic",
        artwork: `/music/artwork/04-kinetic.png?v=${cacheBust}`,
        duration: "3:19",
        mintNumber: "004",
        priceSOL: "0.6",
        priceUSD: "85",
        genre: "Rap",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/04-kinetic.mp3",
        album: "In The Flow",
        trackNumber: "04",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "She Melts Me Away",
        artwork: `/music/artwork/05-she-melts-me-away.png?v=${cacheBust}`,
        duration: "2:46",
        mintNumber: "005",
        priceSOL: "0.55",
        priceUSD: "80",
        genre: "R&B",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/05-she-melts-me-away.mp3",
        album: "In The Flow",
        trackNumber: "05",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "The Maestro",
        artwork: `/music/artwork/06-the-maestro.png?v=${cacheBust}`,
        duration: "3:29",
        mintNumber: "006",
        priceSOL: "0.65",
        priceUSD: "95",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/06-the-maestro.mp3",
        album: "In The Flow",
        trackNumber: "06",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Love You Lovin' You",
        artwork: `/music/artwork/07-love-you-lovin-you.png?v=${cacheBust}`,
        duration: "1:43",
        mintNumber: "007",
        priceSOL: "0.4",
        priceUSD: "55",
        genre: "R&B",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/07-love-you-lovin-you.mp3",
        album: "In The Flow",
        trackNumber: "07",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Everybody Wants It",
        artwork: `/music/artwork/08-everybody-wants-it.png?v=${cacheBust}`,
        duration: "2:40",
        mintNumber: "008",
        priceSOL: "0.5",
        priceUSD: "75",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/08-everybody-wants-it.mp3",
        album: "In The Flow",
        trackNumber: "08",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "'Round We Go",
        artwork: `/music/artwork/09-round-we-go.png?v=${cacheBust}`,
        duration: "3:00",
        mintNumber: "009",
        priceSOL: "0.55",
        priceUSD: "80",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/09-round-we-go.mp3",
        album: "In The Flow",
        trackNumber: "09",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "On The Rocks",
        artwork: `/music/artwork/10-on-the-rocks.png?v=${cacheBust}`,
        duration: "3:09",
        mintNumber: "010",
        priceSOL: "0.6",
        priceUSD: "85",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/10-on-the-rocks.mp3",
        album: "In The Flow",
        trackNumber: "10",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Dream Catcher",
        artwork: `/music/artwork/11-dream-catcher.png?v=${cacheBust}`,
        duration: "3:24",
        mintNumber: "011",
        priceSOL: "0.65",
        priceUSD: "95",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/11-dream-catcher.mp3",
        album: "In The Flow",
        trackNumber: "11",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "The Past Was The Present",
        artwork: `/music/artwork/12-the-past-was-the-present.png?v=${cacheBust}`,
        duration: "2:52",
        mintNumber: "012",
        priceSOL: "0.55",
        priceUSD: "80",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/12-the-past-was-the-present.mp3",
        album: "In The Flow",
        trackNumber: "12",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Silver Linings",
        artwork: `/music/artwork/13-silver-linings.png?v=${cacheBust}`,
        duration: "3:18",
        mintNumber: "013",
        priceSOL: "0.6",
        priceUSD: "85",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/13-silver-linings.mp3",
        album: "In The Flow",
        trackNumber: "13",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "No Apologies",
        artwork: `/music/artwork/14-no-apologies.png?v=${cacheBust}`,
        duration: "3:34",
        mintNumber: "014",
        priceSOL: "0.65",
        priceUSD: "95",
        genre: "Rap",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/14-no-apologies.mp3",
        album: "In The Flow",
        trackNumber: "14",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Time To Flex On 'Em",
        artwork: `/music/artwork/15-time-to-flex.png?v=${cacheBust}`,
        duration: "3:37",
        mintNumber: "015",
        priceSOL: "0.7",
        priceUSD: "100",
        genre: "Rap",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/15-time-to-flex.mp3",
        album: "In The Flow",
        trackNumber: "15",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
      {
        title: "Defy The Odds",
        artwork: `/music/artwork/16-defy-the-odds.png?v=${cacheBust}`,
        duration: "2:38",
        mintNumber: "016",
        priceSOL: "0.75",
        priceUSD: "110",
        genre: "Hip Hop",
        available: true,
        solanaAddress: null,
        audioUrl: "/music/audio/16-defy-the-odds.mp3",
        album: "In The Flow",
        trackNumber: "16",
        description: "Own 50% of this track. As co-owner, you'll receive monthly royalty payments from all streams and plays. The more we promote together, the more we both earn.",
        royaltyShare: "50",
      },
    ];

    albumTracks.forEach((nft) => {
      const id = randomUUID();
      const musicNFT: MusicNFT = {
        id,
        title: nft.title,
        artwork: nft.artwork,
        duration: nft.duration,
        mintNumber: nft.mintNumber,
        priceSOL: nft.priceSOL,
        priceUSD: nft.priceUSD,
        genre: nft.genre,
        available: nft.available ?? true,
        solanaAddress: nft.solanaAddress ?? null,
        audioUrl: nft.audioUrl ?? null,
        videoUrl: null,
        album: nft.album ?? null,
        trackNumber: nft.trackNumber ?? null,
        description: nft.description ?? null,
        royaltyShare: nft.royaltyShare ?? "50",
        type: "track",
        physicalIncluded: false,
        editionSize: null,
      };
      this.musicNFTs.set(id, musicNFT);
    });

    // Add special collector's edition: My Rhyme Book
    const rhymeBookId = randomUUID();
    const rhymeBook: MusicNFT = {
      id: rhymeBookId,
      title: "My Rhyme Book",
      artwork: `/attached_assets/rhyme-book-cover.png?v=${cacheBust}`,
      duration: "157 pages",
      mintNumber: "SPECIAL-001",
      priceSOL: "2.5",
      priceUSD: "350",
      genre: "Collectible",
      available: true,
      solanaAddress: null,
      audioUrl: null,
      videoUrl: null,
      album: null,
      trackNumber: null,
      description: "The complete Jasper Springs lyric anthology. Song lyrics over album art for every song ever created, with context and origin stories. Physical coffee table book shipped to your door.",
      royaltyShare: null,
      type: "collectible",
      physicalIncluded: true,
      editionSize: "100 Editions",
    };
    this.musicNFTs.set(rhymeBookId, rhymeBook);

    // Add special collector's edition: Overstand It Music Video
    const overstandItId = randomUUID();
    const overstandIt: MusicNFT = {
      id: overstandItId,
      title: "Overstand It - Music Video",
      artwork: `/attached_assets/Overstand_It_Thumbnail_Cover_1767482534943.jpg?v=${cacheBust}`,
      duration: "3:42",
      mintNumber: "SPECIAL-002",
      priceSOL: "1.5",
      priceUSD: "200",
      genre: "Collectible",
      available: true,
      solanaAddress: null,
      audioUrl: null,
      videoUrl: `/attached_assets/Overstand_It_web_baseline.mp4?v=${cacheBust}`,
      album: "In The Flow",
      trackNumber: null,
      description: "Exclusive animated music video featuring Jasper Springs' AI persona. A unique visual journey through the world of 'Overstand It' - where hip hop meets cutting-edge AI animation.",
      royaltyShare: null,
      type: "collectible",
      physicalIncluded: false,
      editionSize: "50 Editions",
    };
    this.musicNFTs.set(overstandItId, overstandIt);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllMusicNFTs(): Promise<MusicNFT[]> {
    return Array.from(this.musicNFTs.values());
  }

  async getMusicNFT(id: string): Promise<MusicNFT | undefined> {
    return this.musicNFTs.get(id);
  }

  async createMusicNFT(insertNFT: InsertMusicNFT): Promise<MusicNFT> {
    const id = randomUUID();
    const nft: MusicNFT = {
      id,
      title: insertNFT.title,
      artwork: insertNFT.artwork,
      duration: insertNFT.duration,
      mintNumber: insertNFT.mintNumber,
      priceSOL: insertNFT.priceSOL,
      priceUSD: insertNFT.priceUSD,
      genre: insertNFT.genre,
      available: insertNFT.available ?? true,
      solanaAddress: insertNFT.solanaAddress ?? null,
      audioUrl: insertNFT.audioUrl ?? null,
      videoUrl: insertNFT.videoUrl ?? null,
      album: insertNFT.album ?? null,
      trackNumber: insertNFT.trackNumber ?? null,
      description: insertNFT.description ?? null,
      royaltyShare: insertNFT.royaltyShare ?? "50",
      type: insertNFT.type ?? "track",
      physicalIncluded: insertNFT.physicalIncluded ?? false,
      editionSize: insertNFT.editionSize ?? null,
    };
    this.musicNFTs.set(id, nft);
    return nft;
  }

  async updateMusicNFT(id: string, updates: Partial<MusicNFT>): Promise<MusicNFT | undefined> {
    const nft = this.musicNFTs.get(id);
    if (!nft) return undefined;
    
    const updated = { ...nft, ...updates };
    this.musicNFTs.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
