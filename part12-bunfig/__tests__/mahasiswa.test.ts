import { describe, expect, it } from "bun:test";
import Mahasiswa from "../src/models/Mahasiswa";

describe("Mahasiswa Class Test", () => {
  it("should create Mahasiswa object correctly", () => {
    const mahasiswa = new Mahasiswa("123456", "Budi Santoso");
    expect(mahasiswa.npm).toBe("123456");
    expect(mahasiswa.nama).toBe("Budi Santoso");
  });

  it("should create another Mahasiswa with different data", () => {
    const mahasiswa = new Mahasiswa("654321", "Ani Setiawati");
    expect(mahasiswa.npm).toBe("654321");
    expect(mahasiswa.nama).toBe("Ani Setiawati");
  });
});
