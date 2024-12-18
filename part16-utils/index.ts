// Mengembalikan versi Bun yang sedang digunakan.
console.log(Bun.version);
// Menampilkan commit git yang digunakan untuk membangun versi Bun saat ini.
console.log(Bun.revision);
// Alias untuk process.env, digunakan untuk mengakses variabel lingkungan.
console.log(Bun.env.NODE_ENV);
// Menunjukkan path absolut dari file yang dieksekusi dengan
if (import.meta.path === Bun.main) {
  console.log("Script ini dieksekusi langsung.");
} else {
  console.log("Script ini diimpor sebagai modul.");
}
// Menemukan path absolut dari perintah yang diberikan.
console.log(Bun.which("node"));
// Menghasilkan UUID versi 7 yang unik.
console.log(Bun.randomUUIDv7());
// Memeriksa apakah dua objek memiliki nilai yang sama secara mendalam.
const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
console.log(Bun.deepEquals(obj1, obj2)); // Output: true

// Mengonversi karakter khusus dalam string menjadi entitas HTML yang aman.
const unsafeString = "<div>Ini adalah 'teks' & \"contoh\"</div>";
const safeString = Bun.escapeHTML(unsafeString);
console.log(safeString);
