import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = ["https://fastanime.great-site.net/"];

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: (origin) => {
    // Allow specific origins and reject others
    if (allowedOrigins.includes(origin) || !origin) {
      return origin;
    }
    return new Response("Forbidden", { status: 403 });
  },
});

export default corsConfig;
