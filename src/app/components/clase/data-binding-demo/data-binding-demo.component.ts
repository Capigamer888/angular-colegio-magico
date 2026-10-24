import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

interface AprendizMatriculado {
  id: number;
  nombre: string;
  varita: string;
  mascota: string;
  fecha: string;
}

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  // Variables vinculadas con [(ngModel)]
  nombreAprendiz: string = 'Hermione Granger';
  nucleoVarita: string = 'Fibra de corazón de dragón';
  mascota: string = 'Gato Crookshanks';
  afinidadElemental: string = 'Fuego';

  // Lista de aprendices
  aprendices: AprendizMatriculado[] = [
    { id: 1, nombre: 'Harry Potter', varita: 'Pluma de Fénix', mascota: 'Lechuza Hedwig', fecha: '01 Sep' },
    { id: 2, nombre: 'Ron Weasley', varita: 'Pelo de Unicornio', mascota: 'Rata Scabbers', fecha: '01 Sep' }
  ];

  mensajeEncantamiento: string | null = null;

  matricularAprendiz(): void {
    if (!this.nombreAprendiz || this.nombreAprendiz.trim().length < 3) return;

    this.aprendices.unshift({
      id: Date.now(),
      nombre: this.nombreAprendiz.trim(),
      varita: this.nucleoVarita,
      mascota: this.mascota,
      fecha: 'Hoy'
    });

    this.mensajeEncantamiento = `¡${this.nombreAprendiz} ha sido matriculado(a) con éxito en Hogwarts!`;
    setTimeout(() => {
      this.mensajeEncantamiento = null;
    }, 4000);
  }
}
