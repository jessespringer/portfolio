import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import walletRoutes from "./routes/wallet";
import stripeRoutes from "./routes/stripe";
import mintRoutes from "./routes/mint";
import nftsRoutes from "./routes/nfts";

export async function registerRoutes(app: Express): Promise<Server> {
  // NFT routes
  app.use("/api/nfts", nftsRoutes);
  
  // Wallet routes
  app.use("/api/wallet", walletRoutes);
  
  // Stripe payment routes
  app.use("/api/stripe", stripeRoutes);
  
  // NFT minting routes
  app.use("/api/mint", mintRoutes);

  const httpServer = createServer(app);

  return httpServer;
}
