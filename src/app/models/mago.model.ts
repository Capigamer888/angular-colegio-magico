export type CasaMagica = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';

export interface Mago {
  id: number;
  nombre: string;
  casa: CasaMagica;
  nivelMagia: number;
  varita: string;
  hechizosConocidos: string[];
  activo: boolean;
}
