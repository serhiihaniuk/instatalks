import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { type InferInsertModel } from "drizzle-orm";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const SpeakerTable = pgTable("speaker", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

const schema = {
  SpeakerTable,
};

export const getSpeakers = async () => {
  return await db.select().from(SpeakerTable);
};

export type Speaker = InferInsertModel<typeof SpeakerTable>;
export const addSpeaker = async (speaker: Speaker) => {
  await db.insert(SpeakerTable).values(speaker);
};

export default schema;
