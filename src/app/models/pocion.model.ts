export type TipoMagiaPocion = 'Curacion' | 'Transmutacion' | 'Luz' | 'Prohibida';

export interface Pocion {
  id: number;
  nombre: string;
  descripcion: string;
  nivelPeligro: number; // 1 (inofensiva) a 10 (mortal)
  tiempoCoccionMinutos: number;
  tipoMagia: TipoMagiaPocion;
  ingredientes: string[];
  estable: boolean;
}
