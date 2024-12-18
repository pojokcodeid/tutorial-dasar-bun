import { writeFile, readFile } from "fs/promises";

// Path ke file notes.json
const NOTES_FILE: string = "notes.json";

// Definisi tipe untuk catatan
interface Note {
  id: number;
  title: string;
  content: string;
}

// Fungsi untuk membaca data dari file
async function readNotes(): Promise<Note[]> {
  try {
    const fileData: string = await readFile(NOTES_FILE, "utf-8");
    return JSON.parse(fileData) as Note[];
  } catch {
    return []; // Jika file tidak ditemukan, kembalikan array kosong
  }
}

// Fungsi untuk menulis data ke file
async function writeNotes(notes: Note[]): Promise<void> {
  await writeFile(NOTES_FILE, JSON.stringify(notes, null, 2), "utf-8");
}

// Fungsi untuk menambahkan catatan baru
async function addNote(title: string, content: string): Promise<void> {
  const notes: Note[] = await readNotes();
  const newNote: Note = {
    id: Date.now(),
    title,
    content,
  };
  notes.push(newNote);
  await writeNotes(notes);
  console.log(`Catatan "${title}" berhasil ditambahkan.`);
}

// Fungsi untuk melihat semua catatan
async function viewNotes(): Promise<void> {
  const notes: Note[] = await readNotes();
  if (notes.length === 0) {
    console.log("Belum ada catatan.");
    return;
  }
  console.log("Daftar Catatan:");
  notes.forEach((note) => {
    console.log(
      `ID: ${note.id}, Title: ${note.title}, Content: ${note.content}`
    );
  });
}

// Fungsi untuk menghapus catatan berdasarkan ID
async function deleteNote(id: number): Promise<void> {
  const notes: Note[] = await readNotes();
  const filteredNotes: Note[] = notes.filter((note) => note.id !== id);
  if (notes.length === filteredNotes.length) {
    console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
    return;
  }
  await writeNotes(filteredNotes);
  console.log(`Catatan dengan ID ${id} berhasil dihapus.`);
}

// Fungsi utama untuk menjalankan aplikasi
async function main(): Promise<void> {
  const args: string[] = process.argv.slice(2); // Ambil argumen dari CLI
  const command: string = args[0];

  switch (command) {
    case "add":
      const [title, content] = args.slice(1);
      if (!title || !content) {
        console.log("Gunakan: bun index.ts add <title> <content>");
        return;
      }
      await addNote(title, content);
      break;

    case "view":
      await viewNotes();
      break;

    case "delete":
      const id = parseInt(args[1]);
      if (!id) {
        console.log("Gunakan: bun index.ts delete <id>");
        return;
      }
      await deleteNote(id);
      break;

    default:
      console.log(`Perintah tidak dikenali: ${command}`);
      console.log("Gunakan: view | add | delete");
  }
}

main();
