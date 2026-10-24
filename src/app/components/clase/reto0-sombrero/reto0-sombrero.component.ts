import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Mago, CasaMagica } from '../../../models/mago.model';

@Component({
  selector: 'app-reto0-sombrero',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reto0-sombrero.component.html',
  styleUrl: './reto0-sombrero.component.css'
})
export class Reto0SombreroComponent implements OnInit, OnDestroy {
  // 1. Estado del Mago (Model)
  magoActual: Mago = {
    id: 1,
    nombre: 'Harry Potter',
    casa: 'Gryffindor',
    nivelMagia: 75,
    varita: 'Acebo y Pluma de Fénix (28 cm)',
    hechizosConocidos: ['Expelliarmus', 'Expecto Patronum', 'Lumos'],
    activo: true
  };

  // Variables vinculadas al formulario con [(ngModel)]
  nombreInput: string = 'Harry Potter';
  nuevoHechizo: string = '';

  // Estado del Sombrero
  estaMeditando: boolean = false;
  verCodigoFuente: boolean = false;
  mensajeSombrero: string = '¡Hmm, difícil decisión! Veo valentía, pero también una mente despierta...';

  codigoEjemploTS: string = `// 1. Definición del Componente Standalone
@Component({
  selector: 'app-reto0-sombrero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reto0-sombrero.component.html'
})
export class Reto0SombreroComponent implements OnInit, OnDestroy {
  // 2. Modelo de datos fuertemente tipado
  magoActual: Mago = {
    nombre: 'Harry Potter',
    casa: 'Gryffindor',
    nivelMagia: 75,
    varita: 'Acebo y Pluma de Fénix (28 cm)',
    hechizosConocidos: ['Expelliarmus', 'Expecto Patronum']
  };

  // 3. Two-Way Data Binding
  nombreInput: string = 'Harry Potter';

  // 4. Ciclo de Vida: Inicialización
  ngOnInit(): void {
    console.log('El Sombrero Seleccionador despierta...');
  }

  // 5. Manejo de Eventos y Lógica
  deliberarCasa(): void {
    // Selecciona casa aleatoria y actualiza el estado
  }

  // 6. Ciclo de Vida: Limpieza
  ngOnDestroy(): void {
    console.log('El Sombrero Seleccionador se desactiva.');
  }
}`;

  // 2. Lifecycle Hook: ngOnInit
  ngOnInit(): void {
    console.log('🎓 Reto 0: SombreroComponent montado. El Sombrero Seleccionador despierta en el Gran Comedor.');
  }

  // 3. Método de Selección Inmediata con Event Binding (Sin retrasos artificiales)
  deliberarCasa(casaForzada?: CasaMagica): void {
    const casas: CasaMagica[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    const seleccionada = casaForzada ?? casas[Math.floor(Math.random() * casas.length)];

    this.magoActual.casa = seleccionada;
    this.magoActual.nombre = this.nombreInput.trim() || 'Harry Potter';
    this.estaMeditando = false;

    if (seleccionada === 'Gryffindor') {
      this.mensajeSombrero = '¡Donde habitan los valientes! ¡Su coraje los define! ¡¡GRYFFINDOR!! 🦁';
    } else if (seleccionada === 'Slytherin') {
      this.mensajeSombrero = '¡Donde harás verdaderos amigos de astucia y ambición! ¡¡SLYTHERIN!! 🐍';
    } else if (seleccionada === 'Ravenclaw') {
      this.mensajeSombrero = '¡Una mente sin igual es el mayor tesoro del hombre! ¡¡RAVENCLAW!! 🦅';
    } else {
      this.mensajeSombrero = '¡Donde los leales y trabajadores no temen al trabajo pesado! ¡¡HUFFLEPUFF!! 🦡';
    }
  }

  // 4. Agregar Hechizo con Array Push
  aprenderHechizo(): void {
    if (!this.nuevoHechizo || this.nuevoHechizo.trim() === '') return;

    this.magoActual.hechizosConocidos.push(this.nuevoHechizo.trim());
    this.nuevoHechizo = '';
  }

  // 5. Eliminar Hechizo
  olvidarHechizo(index: number): void {
    this.magoActual.hechizosConocidos.splice(index, 1);
  }

  // 6. Lifecycle Hook: ngOnDestroy
  ngOnDestroy(): void {
    console.log('🎓 Reto 0: SombreroComponent destruido. El Sombrero duerme en la vitrina del Director.');
  }

  toggleCodigo(): void {
    this.verCodigoFuente = !this.verCodigoFuente;
  }
}
