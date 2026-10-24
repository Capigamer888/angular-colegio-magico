import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-package-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './package-info.component.html',
  styleUrl: './package-info.component.css'
})
export class PackageInfoComponent {
  selectedTab: 'scripts' | 'dependencies' | 'anatomy' = 'anatomy';
  activeScript: string | null = null;
  scriptOutput: string = 'Selecciona un script mágico para ver qué encantamiento detona en la consola...';

  scripts = [
    { name: 'start', cmd: 'ng serve', desc: 'Levanta el servidor mágico local en http://localhost:4200 con hot-reload en vivo.' },
    { name: 'build', cmd: 'ng build', desc: 'Compila todos los hechizos en artefactos estáticos ultra-optimizados en la carpeta dist/.' },
    { name: 'test', cmd: 'ng test', desc: 'Convoca a Karma y Jasmine para ejecutar las pruebas unitarias interactivas.' },
    { name: 'test:ci', cmd: 'ng test --watch=false --browsers=ChromeHeadless', desc: 'El encantamiento del Tribunal (GitHub Actions): corre los tests de forma desatendida y reporta éxito o fracaso.' }
  ];

  dependencies = [
    { name: '@angular/core', type: 'dep', purpose: 'El núcleo de la magia: decoradores, componentes y detección de cambios.' },
    { name: '@angular/common', type: 'dep', purpose: 'Directivas maestras (@if, @for, pipes y directivas de atributos).' },
    { name: '@angular/forms', type: 'dep', purpose: 'El vínculo bidireccional (ngModel) y validaciones de pergaminos.' },
    { name: '@angular/router', type: 'dep', purpose: 'Portales de teletransporte entre salas del castillo (Rutas SPA).' },
    { name: 'karma & jasmine', type: 'dev', purpose: 'Los inspectores del Tribunal de Pruebas unitarias.' },
    { name: 'typescript', type: 'dev', purpose: 'El lenguaje rúnico fuertemente tipado que evita errores antes de ejecutar.' }
  ];

  selectTab(tab: 'scripts' | 'dependencies' | 'anatomy'): void {
    this.selectedTab = tab;
  }

  runSimulatedScript(script: { name: string; cmd: string; desc: string }): void {
    this.activeScript = script.name;
    this.scriptOutput = `> npm run ${script.name}\n> ${script.cmd}\n\n[MÁGICA CONVOCADA]: ${script.desc}\n✔ Encantamiento ejecutado con código de salida 0.`;
  }
}
