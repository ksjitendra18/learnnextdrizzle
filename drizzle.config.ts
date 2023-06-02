import type { Config } from "drizzle-kit";

console.log("here", process.env.DB_URL);

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  connectionString: `${process.env.DB_URL}`,
} satisfies Config;
