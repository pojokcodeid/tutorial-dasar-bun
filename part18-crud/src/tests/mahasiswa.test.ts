import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const BASE_URL = "http://localhost:3000";

beforeAll(async () => {
  await prisma.$connect();
  await prisma.mahasiswa.deleteMany(); // Bersihkan tabel sebelum pengujian
});

afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE mahasiswa`; // Bersihkan tabel setelah pengujian
  await prisma.$disconnect();
});


describe("REST API /mahasiswa", () => {
  it("should create a new mahasiswa with POST /mahasiswa", async () => {
    const response = await fetch(`${BASE_URL}/mahasiswa`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ npm: "12345678", nama: "Budi Santoso" }),
    });

    const body = await response.json();
    expect(response.status).toBe(201);
    expect(body).toEqual({
        "status": "success",
        "message": "Mahasiswa created",
        "data": {
          "id": expect.any(Number),
          "npm": "12345678",
          "nama": "Budi Santoso"
        }
      });
  });

  it("should return all mahasiswa with GET /mahasiswa", async () => {
    const response = await fetch(`${BASE_URL}/mahasiswa`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual(
      {
        "status": "success",
        "message": "List of Mahasiswa",
        "data": [
          {
            "id": expect.any(Number),
            "npm": "12345678",
            "nama": "Budi Santoso"
          }
        ]
      }
    );
  });

  it("should return 400 if NPM or nama is missing in POST /mahasiswa", async () => {
    const response = await fetch(`${BASE_URL}/mahasiswa`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ npm: "12345678", nama:"" }),
    });

    const body = await response.json();
    expect(response.status).toBe(400);
    expect(body).toEqual({
      "status": "error",
      "message": "Validation error\"nama\" is not allowed to be empty"
    });
  });
});
