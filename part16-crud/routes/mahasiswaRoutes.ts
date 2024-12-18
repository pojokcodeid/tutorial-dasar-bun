import {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/mahasiswaController";

export const mahasiswaRoutes = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.pathname.split("/")[2]; // Mengambil ID dari URL jika ada

  // Routing berdasarkan method dan path
  if (url.pathname === "/mahasiswa" && req.method === "GET") {
    return getAllMahasiswa();
  }

  if (url.pathname === "/mahasiswa" && req.method === "POST") {
    return await createMahasiswa(req);
  }

  if (url.pathname.startsWith("/mahasiswa/") && req.method === "GET") {
    return getMahasiswaById(Number(id));
  }

  if (url.pathname.startsWith("/mahasiswa/") && req.method === "PUT") {
    return await updateMahasiswa(Number(id), req);
  }

  if (url.pathname.startsWith("/mahasiswa/") && req.method === "DELETE") {
    return deleteMahasiswa(Number(id));
  }

  return new Response("Not Found", { status: 404 });
};
