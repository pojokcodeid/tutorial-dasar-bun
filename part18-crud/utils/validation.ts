import Joi from "joi";

// Schema validation untuk Mahasiswa
export const mahasiswaSchema = Joi.object({
  npm: Joi.string().length(8).required(),
  nama: Joi.string().min(1).required(),
});
