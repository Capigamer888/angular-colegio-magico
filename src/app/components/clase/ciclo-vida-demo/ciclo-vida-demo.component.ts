import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// Subcomponente Criatura para demostrar el ciclo de vida en vivo
@Component({
  selector: 'app-fenix-criatura',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fenix-card" [class.renacido]="poder > 80">
      <div class="fenix-avatar">🔥 🦅</div>
      <div class="fenix-info">
        <h3>Fénix Fawkes</h3>
        <p class="fenix-status">Estado: <strong>Invocado y Vivo</strong></p>
        <p>Llama de Poder: <strong>{{ poder }}%</strong></p>
        <div class="power-bar-bg">
          <div class="power-bar-fill" [style.width.%]="poder"></div>
        </div>
        <p class="timer-text">Segundos ardiendo: <strong>{{ segundosActivo }}s</strong> (setInterval activo)</p>
      </div>
    </div>
  `,
  styles: [`
    .fenix-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%);
      border: 1px solid rgba(245, 158, 11, 0.4);
      border-radius: 12px;
      padding: 1.25rem;
      margin-top: 1rem;
      box-shadow: 0 0 25px rgba(245, 158, 11, 0.2);
      animation: aparecer 0.4s ease-out;
    }
    .fenix-avatar {
      font-size: 3rem;
      animation: levitar 2.5s infinite ease-in-out;
    }
    .fenix-info h3 {
      color: #fef08a;
      font-size: 1.2rem;
    }
    .fenix-status {
      font-size: 0.88rem;
      color: #86efac;
    }
    .power-bar-bg {
      width: 100%;
      height: 8px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      margin: 0.4rem 0;
      overflow: hidden;
    }
    .power-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #f59e0b, #ef4444);
      transition: width 0.3s ease;
    }
    .timer-text {
      font-size: 0.8rem;
      color: #94a3b8;
    }
    @keyframes levitar {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes aparecer {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class FenixCriaturaComponent implements OnInit, OnChanges, OnDestroy {
  @Input() poder: number = 50;
  segundosActivo: number = 0;
  private timerId: any;

  constructor() {
    CicloVidaDemoComponent.agregarLog('constructor()', 'El huevo de fénix ha sido instanciado en memoria.', 'info');
  }

  ngOnInit(): void {
    CicloVidaDemoComponent.agregarLog('ngOnInit()', '¡Fénix Fawkes emerge de las cenizas! (Componente montado e inicializado).', 'success');
    this.timerId = setInterval(() => {
      this.segundosActivo++;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['poder']) {
      const prev = changes['poder'].previousValue ?? 'inicio';
      const actual = changes['poder'].currentValue;
      CicloVidaDemoComponent.agregarLog('ngOnChanges()', `El poder cambió de ${prev}% a ${actual}%.`, 'warning');
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    CicloVidaDemoComponent.agregarLog('ngOnDestroy()', 'Fénix Fawkes se desvanece en cenizas. Se destruye el timer para evitar fuga de memoria.', 'danger');
  }
}

interface LogEntry {
  hook: string;
  mensaje: string;
  tipo: 'info' | 'success' | 'warning' | 'danger';
  hora: string;
}

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ciclo-vida-demo',
  standalone: true,
  imports: [CommonModule, RouterLink, FenixCriaturaComponent],
  templateUrl: './ciclo-vida-demo.component.html',
  styleUrl: './ciclo-vida-demo.component.css'
})
export class CicloVidaDemoComponent {
  estaInvocado: boolean = true;
  nivelPoder: number = 50;

  static logsCompartidos: LogEntry[] = [];

  get logs(): LogEntry[] {
    return CicloVidaDemoComponent.logsCompartidos;
  }

  static agregarLog(hook: string, mensaje: string, tipo: 'info' | 'success' | 'warning' | 'danger'): void {
    const ahora = new Date().toLocaleTimeString();
    CicloVidaDemoComponent.logsCompartidos.unshift({ hook, mensaje, tipo, hora: ahora });
  }

  invocarODesvanecer(): void {
    this.estaInvocado = !this.estaInvocado;
  }

  cambiarPoder(delta: number): void {
    this.nivelPoder = Math.min(100, Math.max(10, this.nivelPoder + delta));
  }

  limpiarLogs(): void {
    CicloVidaDemoComponent.logsCompartidos = [];
  }
}
