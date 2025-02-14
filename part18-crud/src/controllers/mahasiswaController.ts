import { successResponse, errorResponse } from "../views/response";
import { mahasiswaSchema } from "../utils/validation";
import logger from "../utils/logger";
import {
  createMhs,
  deleteMhs,
  getAllMhs,
  getMhsById,
  updateMhs,
} from "../models/mahasiswaModel";

export const getAllMahasiswa = async () => {
  const mahasiswaList = await getAllMhs();
  return successResponse("List of Mahasiswa", mahasiswaList);
};

export const getMahasiswaById = async (id: number) => {
  const mahasiswa = await getMhsById(id);
  if (!mahasiswa) return errorResponse("Mahasiswa not found", 404);
  return successResponse("Mahasiswa found", mahasiswa);
};

export const createMahasiswa = async (req: Request) => {
  const body = await req.json();

  // Validasi dengan Joi
  const { error, value } = mahasiswaSchema.validate(body, {
    abortEarly: false,
  });
  if (error) {
    logger.warn(
      "Validation failed: " + error.details.map((err) => err.message).join(", ")
    );
    return errorResponse(
      "Validation error" + error.details.map((err) => err.message, 400)
    );
  }

  // Jika validasi berhasil
  try {
    const newMahasiswa = await createMhs(value.npm, value.nama);
    logger.info(`Mahasiswa created: ${JSON.stringify(newMahasiswa)}`);
    return successResponse("Mahasiswa created", newMahasiswa, 201);
  } catch (err: any) {
    logger.error("Error creating Mahasiswa: " + err.message);
    return errorResponse("Error creating Mahasiswa");
  }
};

export const updateMahasiswa = async (id: number, req: Request) => {
  const { npm, nama } = await req.json();

  try {
    const updatedMahasiswa = await updateMhs(id, npm, nama);
    return successResponse("Mahasiswa updated", updatedMahasiswa);
  } catch (err: any) {
    logger.error("Error creating Mahasiswa: " + err.message);
    return errorResponse("Mahasiswa not found or update failed", 404);
  }
};

export const deleteMahasiswa = async (id: number) => {
  try {
    await deleteMhs(id);
    return successResponse("Mahasiswa deleted", null);
  } catch (err: any) {
    logger.error("Error deleting Mahasiswa: " + err.message);
    return errorResponse("Mahasiswa not found", 404);
  }
};
