export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://market-server-real.fly.dev"
    : "http://localhost:8080";
