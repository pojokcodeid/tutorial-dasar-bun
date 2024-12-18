console.log("Environment:", process.env.NODE_ENV || "development");
console.log("App Name:", process.env.APP_NAME);
console.log("API URL:", process.env.API_URL);
console.log("Database Connection:", process.env.DB_CONNECTION);

// Simulasi logic berdasarkan environment
if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode!");
} else {
  console.log("Running in development mode!");
}
