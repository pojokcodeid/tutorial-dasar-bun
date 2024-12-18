export class Mahasiswa {
  constructor(public id: number, public npm: string, public nama: string) {}
}

// Simulasi database (array sebagai penyimpanan sementara)
export const mahasiswaList: Mahasiswa[] = [];
