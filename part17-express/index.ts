import express, { type Request, type Response } from "express";
import path from "path";

const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware untuk static files
app.use(express.static(path.join(__dirname, "public")));

// Route utama
app.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Hello, Bun with EJS!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
