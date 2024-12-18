import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf, colorize } = format;

// Format log
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Konfigurasi logger
const logger = createLogger({
  level: "info", // Level log minimal: info, warn, error, etc.
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    colorize(), // Tambahkan warna ke console
    logFormat
  ),
  transports: [
    new transports.Console(), // Output log ke console
    new transports.File({ filename: "logs/data.log" }), // Log semua level ke file
  ],
});

export default logger;
