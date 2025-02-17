import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = ["https://fastanime.great-site.net/", "*"];

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: allowedOrigins,
});

export default corsConfig;
