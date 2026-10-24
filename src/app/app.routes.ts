import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PackageInfoComponent } from './components/clase/package-info/package-info.component';
import { CicloVidaDemoComponent } from './components/clase/ciclo-vida-demo/ciclo-vida-demo.component';
import { DirectivasDemoComponent } from './components/clase/directivas-demo/directivas-demo.component';
import { DataBindingDemoComponent } from './components/clase/data-binding-demo/data-binding-demo.component';
import { Reto0SombreroComponent } from './components/clase/reto0-sombrero/reto0-sombrero.component';
import { CalderoComponent } from './components/retos/caldero/caldero.component';
import { ArtefactoCreativoComponent } from './components/retos/artefacto-creativo/artefacto-creativo.component';

export const routes: Routes = [
  // Página Principal Minimalista
  { path: '', component: HomeComponent },

  // Páginas Dedicadas de Aprendizaje y Repaso (Secciones 1 a 4)
  { path: 'seccion/1-package-json', component: PackageInfoComponent },
  { path: 'seccion/2-ciclos-vida', component: CicloVidaDemoComponent },
  { path: 'seccion/3-directivas', component: DirectivasDemoComponent },
  { path: 'seccion/4-data-binding', component: DataBindingDemoComponent },

  // Clase del Profesor en Vivo (Reto 0)
  { path: 'reto-0', component: Reto0SombreroComponent },

  // Zona de Evaluación del Estudiante
  { path: 'caldero', component: CalderoComponent },
  { path: 'artefacto-creativo', component: ArtefactoCreativoComponent },

  { path: '**', redirectTo: '' }
];
