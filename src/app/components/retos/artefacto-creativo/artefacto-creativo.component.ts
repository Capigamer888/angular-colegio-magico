import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface HechizoDuelo {
  id: number;
  nombre: string;
  tipo: 'Ataque' | 'Defensa' | 'Sanacion';
  poder: number;
  costoEnergia: number;
  descripcion: string;
}

export interface RegistroTurno {
  turno: number;
  emisor: string;
  hechizo: string;
  efecto: string;
  tipo: 'damage' | 'shield' | 'heal';
}

@Component({
  selector: 'app-artefacto-creativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artefacto-creativo.component.html',
  styleUrl: './artefacto-creativo.component.css'
})
export class ArtefactoCreativoComponent implements OnInit, OnDestroy {
  // =========================================================================
  // 🎨 RETO 7: EL LIENZO CREATIVO (30% DE LA CALIFICACIÓN)
  // =========================================================================
  // EJEMPLO ILUSTRATIVO: "El Simulador de Duelos del Club de Duelo de Hogwarts"
  // Los estudiantes pueden personalizar este simulador o construir su propio
  // artefacto mágico interactivo (ej: Mapa del Merodeador, Tienda de Ollivander,
  // Herbario Mágico) cumpliendo la rúbrica de evaluación.

  // 1. Estado Interactivo (Jugador vs Rival)
  nombreMago: string = 'Harry Potter';
  saludMago: number = 100;
  energiaMago: number = 100;

  nombreRival: string = 'Draco Malfoy';
  saludRival: number = 100;
  energiaRival: number = 100;

  // Estado general del duelo: 'PREPARACION' | 'EN_CURSO' | 'VICTORIA' | 'DERROTA'
  estadoDuelo: 'PREPARACION' | 'EN_CURSO' | 'VICTORIA' | 'DERROTA' = 'PREPARACION';

  numeroTurno: number = 1;
  arenaOscura: boolean = false;

  // Grimorio de hechizos disponibles para el aprendiz
  hechizosDuelo: HechizoDuelo[] = [
    { id: 1, nombre: 'Expelliarmus', tipo: 'Ataque', poder: 25, costoEnergia: 20, descripcion: 'Desarma al oponente con un rayo rojo escarlata.' },
    { id: 2, nombre: 'Protego', tipo: 'Defensa', poder: 30, costoEnergia: 15, descripcion: 'Crea un escudo mágico que absorbe el siguiente impacto.' },
    { id: 3, nombre: 'Episkey', tipo: 'Sanacion', poder: 20, costoEnergia: 25, descripcion: 'Restaura vitalidad y cura heridas menores.' },
    { id: 4, nombre: 'Stupefy', tipo: 'Ataque', poder: 35, costoEnergia: 35, descripcion: 'Aturde al rival con una potente onda expansiva.' }
  ];

  historialDuelo: RegistroTurno[] = [];
  private ambientMusicInterval: any = null;

  // 2. Lifecycle Hook: ngOnInit
  ngOnInit(): void {
    console.log('🎨 Reto 7: Artefacto Creativo montado en el Gran Salón.');
    // Temporizador ambiental sutil de recarga de energía
    this.ambientMusicInterval = setInterval(() => {
      if (this.estadoDuelo === 'EN_CURSO') {
        this.energiaMago = Math.min(100, this.energiaMago + 2);
        this.energiaRival = Math.min(100, this.energiaRival + 2);
      }
    }, 2000);
  }

  // 3. Iniciar Duelo
  iniciarDuelo(): void {
    this.estadoDuelo = 'EN_CURSO';
    this.saludMago = 100;
    this.energiaMago = 100;
    this.saludRival = 100;
    this.energiaRival = 100;
    this.numeroTurno = 1;
    this.historialDuelo = [
      {
        turno: 1,
        emisor: 'Profesor Flitwick',
        hechizo: 'Apertura de Duelo',
        efecto: '¡Varitas en alto! Hagan una reverencia y comiencen.',
        tipo: 'shield'
      }
    ];
  }

  // 4. Lanzar Hechizo del Jugador
  lanzarHechizo(hechizo: HechizoDuelo): void {
    if (this.estadoDuelo !== 'EN_CURSO') return;
    if (this.energiaMago < hechizo.costoEnergia) return;

    this.energiaMago -= hechizo.costoEnergia;

    if (hechizo.tipo === 'Ataque') {
      this.saludRival = Math.max(0, this.saludRival - hechizo.poder);
      this.historialDuelo.unshift({
        turno: this.numeroTurno,
        emisor: this.nombreMago,
        hechizo: hechizo.nombre,
        efecto: `¡Impacto directo! Causa ${hechizo.poder} puntos de daño a ${this.nombreRival}.`,
        tipo: 'damage'
      });
    } else if (hechizo.tipo === 'Sanacion') {
      this.saludMago = Math.min(100, this.saludMago + hechizo.poder);
      this.historialDuelo.unshift({
        turno: this.numeroTurno,
        emisor: this.nombreMago,
        hechizo: hechizo.nombre,
        efecto: `Cura mágica: Restaura ${hechizo.poder} puntos de vitalidad.`,
        tipo: 'heal'
      });
    } else {
      this.historialDuelo.unshift({
        turno: this.numeroTurno,
        emisor: this.nombreMago,
        hechizo: hechizo.nombre,
        efecto: `Escudo activo: ${hechizo.descripcion}`,
        tipo: 'shield'
      });
    }

    // Verificar si el rival cayó
    if (this.saludRival <= 0) {
      this.estadoDuelo = 'VICTORIA';
      return;
    }

    // Respuesta del Rival (IA Simulada)
    this.turnoRival();
  }

  // 5. Turno de la IA Rival
  private turnoRival(): void {
    setTimeout(() => {
      if (this.estadoDuelo !== 'EN_CURSO') return;

      const opcionesRival = ['Serpensortia', 'Tarantallegra', 'Rictusempra', 'Protego'];
      const elegido = opcionesRival[Math.floor(Math.random() * opcionesRival.length)];
      const danoRival = Math.floor(Math.random() * 20) + 10;

      this.saludMago = Math.max(0, this.saludMago - danoRival);
      this.numeroTurno++;

      this.historialDuelo.unshift({
        turno: this.numeroTurno,
        emisor: this.nombreRival,
        hechizo: elegido,
        efecto: `¡El rival contraataca con ${elegido}! Te causa ${danoRival} de daño.`,
        tipo: 'damage'
      });

      if (this.saludMago <= 0) {
        this.estadoDuelo = 'DERROTA';
      }
    }, 600);
  }

  // 6. Alternar ambientación de la arena
  toggleArena(): void {
    this.arenaOscura = !this.arenaOscura;
  }

  // 7. Lifecycle Hook: ngOnDestroy
  ngOnDestroy(): void {
    if (this.ambientMusicInterval) {
      clearInterval(this.ambientMusicInterval);
    }
    console.log('🎨 Reto 7: Artefacto Creativo desmontado y recursos limpiados.');
  }
}
