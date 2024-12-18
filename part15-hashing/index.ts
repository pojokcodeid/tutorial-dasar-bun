import { writeFile, readFile } from "fs/promises";

// Path ke file users.json
const USERS_FILE = "users.json";

// Fungsi untuk membaca data pengguna dari file
async function readUsers() {
  try {
    const fileData = await readFile(USERS_FILE, "utf-8");
    return JSON.parse(fileData);
  } catch {
    return {}; // Jika file tidak ditemukan, kembalikan objek kosong
  }
}

// Fungsi untuk menulis data pengguna ke file
async function writeUsers(users: any) {
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

// Fungsi untuk registrasi pengguna baru
async function registerUser(username: string, password: string) {
  const users = await readUsers();

  // Periksa apakah username sudah ada
  if (users[username]) {
    console.log("Username sudah digunakan. Coba username lain.");
    return;
  }

  // Hash kata sandi
  const hashedPassword = await Bun.password.hash(password);

  // Simpan pengguna baru
  users[username] = hashedPassword;
  await writeUsers(users);

  console.log(`Pengguna ${username} berhasil diregistrasi.`);
}

// Fungsi untuk login pengguna
async function loginUser(username: string, password: string) {
  const users = await readUsers();

  // Periksa apakah username ada
  if (!users[username]) {
    console.log("Username tidak ditemukan.");
    return;
  }

  // Verifikasi kata sandi
  const isValidPassword = await Bun.password.verify(password, users[username]);
  if (isValidPassword) {
    console.log(`Selamat datang, ${username}!`);
  } else {
    console.log("Kata sandi salah.");
  }
}

// Fungsi utama untuk menjalankan aplikasi
async function main() {
  const args = process.argv.slice(2); // Ambil argumen dari CLI
  const command = args[0];

  switch (command) {
    case "register":
      const [regUsername, regPassword] = args.slice(1);
      if (!regUsername || !regPassword) {
        console.log("Gunakan: bun index.js register <username> <password>");
        return;
      }
      await registerUser(regUsername, regPassword);
      break;

    case "login":
      const [loginUsername, loginPassword] = args.slice(1);
      if (!loginUsername || !loginPassword) {
        console.log("Gunakan: bun index.js login <username> <password>");
        return;
      }
      await loginUser(loginUsername, loginPassword);
      break;

    default:
      console.log(`Perintah tidak dikenali: ${command}`);
      console.log("Gunakan: register | login");
  }
}

main();
