import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db.ts",
  out: "./src/lib/db/migrations",
  breakpoints: true,
} satisfies Config;
