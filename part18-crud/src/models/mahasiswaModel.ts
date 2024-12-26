import { PrismaClient, type Mahasiswa } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMhs = async (): Promise<Mahasiswa[]> => {
  return await prisma.mahasiswa.findMany();
};

export const getMhsById = async (id: number): Promise<Mahasiswa | null> => {
  return await prisma.mahasiswa.findUnique({
    where: { id },
  });
};

export const createMhs = async (
  npm: string,
  nama: string
): Promise<Mahasiswa> => {
  return await prisma.mahasiswa.create({
    data: { npm, nama },
  });
};

export const updateMhs = async (
  id: number,
  npm: string,
  nama: string
): Promise<Mahasiswa | null> => {
  return await prisma.mahasiswa.update({
    where: { id },
    data: { npm, nama },
  });
};

export const deleteMhs = async (id: number): Promise<Mahasiswa> => {
  return await prisma.mahasiswa.delete({
    where: { id },
  });
};
