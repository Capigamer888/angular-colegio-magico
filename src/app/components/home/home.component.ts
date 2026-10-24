import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SeccionEstudio {
  ruta: string;
  numero: string;
  titulo: string;
  descripcion: string;
  icono: string;
  archivo: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verDetalleEvaluacion: boolean = false;

  seccionesEstudio: SeccionEstudio[] = [
    {
      ruta: '/seccion/1-package-json',
      numero: '01',
      titulo: 'El Pergamino Maestro (package.json)',
      descripcion: 'Entiende qué es npm, scripts de ejecución, dependencies vs devDependencies y por qué node_modules no se sube a Git.',
      icono: '📜',
      archivo: 'package.json'
    },
    {
      ruta: '/seccion/2-ciclos-vida',
      numero: '02',
      titulo: 'Ciclos de Vida de un Componente',
      descripcion: 'Aprende cuándo usar constructor, ngOnInit, ngOnChanges y la importancia crítica de ngOnDestroy para evitar fugas de memoria.',
      icono: '⏳',
      archivo: 'ciclo-vida-demo.component.ts'
    },
    {
      ruta: '/seccion/3-directivas',
      numero: '03',
      titulo: 'Encantamientos de Vista: Directivas',
      descripcion: 'Domina el control flow moderno (@if, @for) y directivas de atributo ([ngClass]). Conoce la evolución desde AngularJS y *ngIf.',
      icono: '🪄',
      archivo: 'directivas-demo.component.html'
    },
    {
      ruta: '/seccion/4-data-binding',
      numero: '04',
      titulo: 'El Vínculo Mágico (Data Binding)',
      descripcion: 'Conecta tu HTML con TypeScript usando interpolación {{ }}, property [disabled], eventos (click) y el poder de [(ngModel)].',
      icono: '🪞',
      archivo: 'data-binding-demo.component.ts'
    }
  ];

  toggleEvaluacion(): void {
    this.verDetalleEvaluacion = !this.verDetalleEvaluacion;
  }
}
