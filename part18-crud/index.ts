import { mahasiswaRoutes } from "./src/routes/mahasiswaRoutes";

Bun.serve({
  port: 3000,
  async fetch(req) {
    return mahasiswaRoutes(req);
  },
});

console.log("Server is running on http://localhost:3000");
