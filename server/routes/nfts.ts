import { Router } from "express";
import { storage } from "../storage";

const router = Router();

// Get all music NFTs
router.get("/", async (req, res) => {
  try {
    const nfts = await storage.getAllMusicNFTs();
    res.json({
      success: true,
      nfts,
    });
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch NFTs",
    });
  }
});

// Get single NFT by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const nft = await storage.getMusicNFT(id);

    if (!nft) {
      return res.status(404).json({
        success: false,
        error: "NFT not found",
      });
    }

    res.json({
      success: true,
      nft,
    });
  } catch (error) {
    console.error("Error fetching NFT:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch NFT",
    });
  }
});

export default router;
