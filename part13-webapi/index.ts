// Import Bun's serve API
Bun.serve({
  port: 3000, // Menentukan port server
  fetch(req) {
    // Menangkap Request HTTP
    const url = new URL(req.url);

    // Routing berdasarkan path
    if (url.pathname === "/") {
      return new Response("Hello, World! Welcome to Bun Server", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    if (url.pathname === "/json") {
      const data = {
        message: "Hello, this is JSON response!",
        status: "success",
      };
      return Response.json(data); // Menggunakan Response.json untuk mengembalikan JSON
    }

    if (url.pathname === "/hello") {
      const name = url.searchParams.get("name") || "Guest";
      return new Response(`Hello, ${name}!`, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Handle route tidak ditemukan
    return new Response("404 Not Found", { status: 404 });
  },
});

console.log("Server is running on http://localhost:3000");
