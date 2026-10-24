import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

interface RanaChocolate {
  id: number;
  nombreCromo: string;
  rareza: 'Común' | 'Rara' | 'Legendaria';
}

@Component({
  selector: 'app-directivas-demo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './directivas-demo.component.html',
  styleUrl: './directivas-demo.component.css'
})
export class DirectivasDemoComponent {
  // Estado para Hechizo Desilusionador (@if)
  tieneCapaInvisibilidad: boolean = false;

  // Estado para Hechizo Geminio (@for)
  ranas: RanaChocolate[] = [
    { id: 1, nombreCromo: 'Albus Dumbledore', rareza: 'Legendaria' },
    { id: 2, nombreCromo: 'Godric Gryffindor', rareza: 'Legendaria' },
    { id: 3, nombreCromo: 'Newt Scamander', rareza: 'Rara' }
  ];
  private nextId: number = 4;

  // Estado para Sombrero Seleccionador de Túnicas ([ngClass])
  casaSeleccionada: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' = 'Gryffindor';

  // Estado para Aura de Poder ([ngStyle])
  intensidadAura: number = 3;

  toggleInvisibilidad(): void {
    this.tieneCapaInvisibilidad = !this.tieneCapaInvisibilidad;
  }

  clonarRana(): void {
    const cromosPosibles = ['Rowena Ravenclaw', 'Helga Hufflepuff', 'Salazar Slytherin', 'Merlín', 'Morgana'];
    const cromo = cromosPosibles[Math.floor(Math.random() * cromosPosibles.length)];
    this.ranas.push({
      id: this.nextId++,
      nombreCromo: `${cromo} (#${this.nextId - 1})`,
      rareza: Math.random() > 0.6 ? 'Legendaria' : 'Rara'
    });
  }

  comerRana(id: number): void {
    this.ranas = this.ranas.filter(r => r.id !== id);
  }

  seleccionarCasa(casa: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff'): void {
    this.casaSeleccionada = casa;
  }
}
