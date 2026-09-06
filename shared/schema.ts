import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const musicNFTs = pgTable("music_nfts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  artwork: text("artwork").notNull(),
  duration: text("duration").notNull(),
  mintNumber: text("mint_number").notNull().unique(),
  priceSOL: decimal("price_sol", { precision: 10, scale: 2 }).notNull(),
  priceUSD: decimal("price_usd", { precision: 10, scale: 2 }).notNull(),
  genre: text("genre").notNull(),
  available: boolean("available").notNull().default(true),
  solanaAddress: text("solana_address"),
  audioUrl: text("audio_url"),
  videoUrl: text("video_url"),
  album: text("album"),
  trackNumber: text("track_number"),
  description: text("description"),
  royaltyShare: decimal("royalty_share", { precision: 5, scale: 2 }).default("50"),
  type: text("type").default("track"),
  physicalIncluded: boolean("physical_included").default(false),
  editionSize: text("edition_size"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMusicNFTSchema = createInsertSchema(musicNFTs).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type MusicNFT = typeof musicNFTs.$inferSelect;
export type InsertMusicNFT = z.infer<typeof insertMusicNFTSchema>;
