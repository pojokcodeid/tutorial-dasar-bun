import Joi from "joi";

// Schema validation untuk Mahasiswa
export const mahasiswaSchema = Joi.object({
  npm: Joi.string().length(8).required().messages({
    "string.base": "NPM harus berupa string.",
    "string.length": "NPM harus terdiri dari 8 karakter.",
    "any.required": "NPM wajib diisi.",
  }),
  nama: Joi.string().min(3).max(50).required().messages({
    "string.base": "Nama harus berupa string.",
    "string.min": "Nama minimal 3 karakter.",
    "string.max": "Nama maksimal 50 karakter.",
    "any.required": "Nama wajib diisi.",
  }),
});
