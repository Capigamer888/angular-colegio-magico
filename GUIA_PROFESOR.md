# 🧙‍♂️ Guía del Profesor: Masterclass de Angular (Reto 0)

Esta guía contiene el guion paso a paso para liderar la clase en vivo. El objetivo es enseñar desde cero cómo se ensamblan las piezas de una aplicación Angular moderna (Standalone, Control Flow y Two-Way Data Binding) haciendo analogías con el mundo mágico y comparativas con lo que vieron en backend.

---

## 🧭 Plan de Sesión (90 a 120 minutos)

1. **Bloque 1 (15 min):** La Anatomía del Proyecto (`package.json`, scripts, `node_modules` como el Bosque Prohibido).
2. **Bloque 2 (20 min):** Ciclos de Vida (El nacimiento, mutación y desvanecimiento de un componente).
3. **Bloque 3 (20 min):** Encantamientos de Vista (Directivas `@if` / `@for` y evolución histórica).
4. **Bloque 4 (25 min):** Reto 0 en Vivo (Construcción del `SombreroSeleccionadorComponent` integrando todo).
5. **Bloque 5 (20 min):** Explicación de las Reglas de Oro, la IA permitida y el Reto Creativo del 30%.

---

## 📜 Bloque 1: El Pergamino Maestro (`package.json`)
* **Qué proyectar:** Abre el archivo [package.json](file:///Users/sebastianagudelo/Documents/apps/angular-colegio-magico/package.json) en VS Code y abre la pestaña **Sección 1** en el navegador.
* **Analogía didáctica:**
  * En Spring Boot teníamos `pom.xml`. En Angular tenemos `package.json`.
  * `scripts`: Los encantamientos de terminal (`npm start`, `npm test`, `npm run test:ci`).
  * `dependencies`: Las pociones que el usuario consume en el navegador.
  * `devDependencies`: Las herramientas del artesano que solo se usan para compilar y probar.
  * `node_modules/`: **El Bosque Prohibido**. Pesa cientos de MB y nunca se sube a Git. Se reconstruye con `npm install`.

---

## ⏳ Bloque 2: Ciclos de Vida (Lifecycle Hooks)
* **Qué proyectar:** Abre la **Sección 2** en la aplicación y muestra el *Invocador de Fénix*.
* **Puntos a enfatizar:**
  * `constructor()`: Solo sirve para instanciar la clase en memoria. Nunca hagas llamadas HTTP ni configures timers aquí.
  * `ngOnInit()`: El momento sagrado en que el componente entra al DOM. Ideal para cargar listas o datos de una API.
  * `ngOnChanges()`: Reacciona automáticamente cuando cambian las entradas (`@Input()`).
  * `ngOnDestroy()`: ¡El exorcismo de memoria! Si creas un `setInterval` o te suscribes a un evento sin destruirlo en `ngOnDestroy`, el proceso seguirá corriendo en el fondo consumiendo memoria (una "maldición residual").

---

## 🪄 Bloque 3: Encantamientos de Vista (Directivas)
* **Qué proyectar:** Abre la **Sección 3** en la aplicación.
* **Pregunta clásica de entrevista que debes explicarles:**
  ```
  AngularJS (Legacy)  ➔  Angular (v2-16)  ➔  Angular Moderno (v17+)
  ng-if / ng-repeat        *ngIf / *ngFor       @if / @for
  ```
* **Muestra en pantalla:**
  * `@if`: El hechizo desilusionador (Harry Potter poniéndose la capa). Explica que a diferencia de `display: none` en CSS, `@if` **elimina el nodo del árbol del DOM**.
  * `@for`: El hechizo Geminio de clonación de ranas de chocolate con `track item.id`. Explica que `track` le permite a Angular saber qué elemento específico se modificó sin redibujar toda la lista.
  * `[ngClass]`: Cambiar el color de la túnica según la casa mágica seleccionada.

---

## 🎓 Bloque 4: Reto 0 en Vivo (El Sombrero Seleccionador)

Construye o proyecta con ellos el archivo `src/app/components/clase/reto0-sombrero/reto0-sombrero.component.ts`. 

### Código que debes explicar paso a paso:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mago, CasaMagica } from '../../../models/mago.model';

@Component({
  selector: 'app-reto0-sombrero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reto0-sombrero.component.html'
})
export class Reto0SombreroComponent implements OnInit, OnDestroy {
  // 1. Modelo de datos fuertemente tipado
  magoActual: Mago = {
    id: 1,
    nombre: 'Harry Potter',
    casa: 'Gryffindor',
    nivelMagia: 75,
    varita: 'Acebo y Pluma de Fénix (28 cm)',
    hechizosConocidos: ['Expelliarmus', 'Expecto Patronum'],
    activo: true
  };

  nombreInput: string = 'Harry Potter';
  estaMeditando: boolean = false;

  // 2. ngOnInit: Inicialización
  ngOnInit(): void {
    console.log('El Sombrero Seleccionador despierta en el Gran Comedor.');
  }

  // 3. Manejador de eventos y Two-Way Binding
  deliberarCasa(): void {
    this.estaMeditando = true;
    setTimeout(() => {
      const casas: CasaMagica[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
      this.magoActual.casa = casas[Math.floor(Math.random() * casas.length)];
      this.magoActual.nombre = this.nombreInput;
      this.estaMeditando = false;
    }, 1200);
  }

  // 4. ngOnDestroy: Limpieza
  ngOnDestroy(): void {
    console.log('El Sombrero Seleccionador duerme en su vitrina.');
  }
}
```

Muestra cómo en el HTML se combina:
* `[(ngModel)]="nombreInput"` para escribir y actualizar la ficha en vivo.
* `[disabled]="estaMeditando || !nombreInput"` para evitar clicks múltiples.
* `[ngClass]="'tunica-' + magoActual.casa.toLowerCase()"` para pintar el escudo y aura de la casa.
* `@for (h of magoActual.hechizosConocidos; track $index)` para iterar los hechizos aprendidos.

---

## ⚖️ Bloque 5: Las Reglas del Taller y Uso Ético de IA
1. **Regla de Cero #1:** Tocar los archivos `*.spec.ts` = Calificación de 0.0 automática. El workflow de GitHub Actions compara los hashes y el `git diff` contra la rama base.
2. **Regla de Cero #2:** Sin Pull Request (PR) = 0.0. No se califican forks locales ni repositorios sin PR abierto.
3. **El 20% de la Bitácora de IA:** En los Retos 5 y 6 se les anima a usar ChatGPT/Claude/Gemini, pero deben registrar qué prompts usaron, qué sugerencias descartaron y redactar la bitácora con sus propias palabras.
4. **El 30% del Reto Creativo:** Explícales que tienen libertad de construir su artefacto interactivo demostrando dominio de Angular y diseño visual.

---

## 🤖 Bloque 6: Cómo Funciona el Tribunal de Magia (GitHub Issues Bot)
* **Arquitectura de Autoevaluación:** 
  * Con cada `git push` o Pull Request, GitHub Actions ejecuta las pruebas con Karma (`npm run test:ci`).
  * El script `.github/scripts/tribunal.js` orquesta el flujo de Issues de forma 100% automatizada.
* **Flujo Secuencial e Interactivo:**
  * Al inicio, el bot abre automáticamente el Issue del **Reto 1**.
  * Cada reto arranca con **10 puntos base**.
  * Si el push falla, el bot comenta en el Issue indicando el intento fallido y descuenta 2 puntos (nota mínima garantizada 2/10).
  * **💡 Luz del Oráculo (Pista al 3er fallo):** Si el estudiante falla 3 o más veces en el mismo reto, el bot comenta automáticamente una pista técnica y didáctica con ejemplos de código para desatascarlo.
  * Cuando el estudiante supera las pruebas del reto activo, el bot publica la nota obtenida en ese reto, cierra el Issue y abre el siguiente.
  * Al superar el Reto 6, el bot consolida la calificación técnica total (50% de la nota final) y abre el **Reto 7 (Lienzo Creativo y Pull Request Final)**.
