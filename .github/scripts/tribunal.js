const fs = require('fs');
const path = require('path');

const RETOS = [
  {
    num: 1,
    title: "Reto 1: El Ingrediente Base (Capa Models y ngOnInit) 🔮",
    body: `¡Bienvenido al Tribunal de Magia Frontend del Colegio Mágico! 🏰

Tu primera misión es preparar los cimientos del Caldero de Pociones en Angular.

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.ts\`.
2. Implementa la interfaz \`OnInit\` de Angular (\`export class CalderoComponent implements OnInit, OnDestroy\`).
3. Dentro del método \`ngOnInit()\`, inicializa el arreglo \`this.pociones\` con al menos las 3 pociones ancestrales obligatorias:
   * **"Poción Multijugos"** (peligro: 8, tiempo: 45, tipo: \`'Transmutacion'\`)
   * **"Felix Felicis"** (peligro: 3, tiempo: 120, tipo: \`'Curacion'\`)
   * **"Filtro de Muertos"** (peligro: 10, tiempo: 90, tipo: \`'Prohibida'\`)
4. Asegúrate de que cada poción tenga \`id\` numérico, \`descripcion\`, \`tiempoCoccionMinutos > 0\` y \`ingredientes: ['...']\`.
5. Ejecuta \`npm test\` localmente para validar tus encantamientos.
6. Haz \`git add .\`, \`git commit -m "feat: completar reto 1 del caldero"\` y \`git push\`.

¡El Tribunal estará evaluando tus encantamientos automáticamente con cada push! ✨`,
    hint: `💡 **Luz del Oráculo (Pista Reto 1):**
Recuerda que \`this.pociones\` espera objetos que cumplan la interfaz \`Pocion\` (importada de \`models/pocion.model.ts\`).
Asegúrate de escribir exactamente los nombres canónicos:
\`\`\`typescript
this.pociones = [
  {
    id: 1,
    nombre: 'Poción Multijugos',
    descripcion: 'Permite transformarse temporalmente en otra persona.',
    nivelPeligro: 8,
    tiempoCoccionMinutos: 45,
    tipoMagia: 'Transmutacion',
    ingredientes: ['Crisopas', 'Sanguijuelas'],
    estable: true
  },
  {
    id: 2,
    nombre: 'Felix Felicis',
    descripcion: 'La poción de la suerte líquida.',
    nivelPeligro: 3,
    tiempoCoccionMinutos: 120,
    tipoMagia: 'Curacion',
    ingredientes: ['Cenizas de huevo de Ashwinder'],
    estable: true
  },
  {
    id: 3,
    nombre: 'Filtro de Muertos',
    descripcion: 'Somnífero que induce un sueño idéntico a la muerte.',
    nivelPeligro: 10,
    tiempoCoccionMinutos: 90,
    tipoMagia: 'Prohibida',
    ingredientes: ['Ajenjo', 'Raíz de Asfódelo'],
    estable: false
  }
];
\`\`\``
  },
  {
    num: 2,
    title: "Reto 2: Los Encantamientos de Vista (@if, @for, [ngClass]) 🪄",
    body: `¡Excelente trabajo! Has superado el Reto 1 y las pociones ancestrales descansan en la memoria.

Ahora debes asegurar que el caldero renderice las pociones en pantalla utilizando las directivas modernas de Angular.

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.html\`.
2. Verifica que la lista itere con \`@for (pocion of getPocionesFiltradas(); track pocion.id)\` y renderice una tarjeta \`.pocion-card\`.
3. Muestra la alerta de toxicidad (\`.toxic-warning\`) única y exclusivamente si \`pocion.nivelPeligro > 7\` usando \`@if\`.
4. Aplica el estilo dinámico con \`[ngClass]="'badge-' + pocion.tipoMagia.toLowerCase()"\` y el bloque \`@empty\` para cuando no haya pociones.
5. Haz commit y push para que el Tribunal evalúe tu avance.`,
    hint: `💡 **Luz del Oráculo (Pista Reto 2):**
En Angular moderno usamos la sintaxis de Control Flow:
\`\`\`html
@for (pocion of getPocionesFiltradas(); track pocion.id) {
  <div class="pocion-card" [ngClass]="'card-' + pocion.tipoMagia.toLowerCase()">
    <h4 class="pocion-nombre">{{ pocion.nombre }}</h4>
    <span class="badge-magic" [ngClass]="'badge-' + pocion.tipoMagia.toLowerCase()">{{ pocion.tipoMagia }}</span>
    
    @if (pocion.nivelPeligro > 7) {
      <div class="toxic-warning">
        ⚠️ ¡ALERTA DE TOXICIDAD! Peligro nivel {{ pocion.nivelPeligro }}/10.
      </div>
    }
  </div>
} @empty {
  <div class="empty-caldero">El caldero está vacío.</div>
}
\`\`\`
Verifica que la condición sea estrictamente mayor a 7 (\`pocion.nivelPeligro > 7\`).`
  },
  {
    num: 3,
    title: "Reto 3: El Vínculo con el Caldero (Data Binding y Preparación) 🪞",
    body: `¡Impresionante! El caldero ya muestra las pociones en pantalla.

Ahora los aprendices deben poder preparar y agregar nuevas pociones usando formularios reactivos con Two-Way Data Binding (\`[(ngModel)]\`).

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.ts\`.
2. Implementa \`esFormularioValido()\`:
   * \`this.nuevoNombre\` no debe estar vacío y debe tener al menos 3 caracteres reales (\`this.nuevoNombre.trim().length >= 3\`).
   * \`this.nuevoTiempoCoccion\` debe ser un número estrictamente mayor a 0.
   * \`this.nuevoNivelPeligro\` debe estar entre 1 y 10 inclusive (\`>= 1\` y \`<= 10\`).
3. En \`prepararPocion()\`:
   * Si el formulario es válido, construye una nueva \`Pocion\` con ID único (\`Date.now()\`).
   * Agrégala a \`this.pociones\`.
   * Llama a \`this.guardarEstadoGiratiempo()\`.
   * Limpia los campos del formulario (\`this.nuevoNombre = ''\`, etc.).
4. En \`eliminarPocion(id: number)\`:
   * Filtra la poción del arreglo y guarda estado en el Giratiempo.
5. Haz commit y push.`,
    hint: `💡 **Luz del Oráculo (Pista Reto 3):**
Estructura tu método \`esFormularioValido()\` así:
\`\`\`typescript
esFormularioValido(): boolean {
  return (
    this.nuevoNombre.trim().length >= 3 &&
    this.nuevoTiempoCoccion > 0 &&
    this.nuevoNivelPeligro >= 1 &&
    this.nuevoNivelPeligro <= 10
  );
}
\`\`\`
Y en \`prepararPocion()\`:
\`\`\`typescript
prepararPocion(): void {
  if (!this.esFormularioValido()) return;
  const nueva: Pocion = {
    id: Date.now(),
    nombre: this.nuevoNombre.trim(),
    descripcion: this.nuevaDescripcion.trim() || 'Poción recién elaborada.',
    nivelPeligro: Number(this.nuevoNivelPeligro),
    tiempoCoccionMinutos: Number(this.nuevoTiempoCoccion),
    tipoMagia: this.nuevoTipoMagia,
    ingredientes: ['Ingrediente secreto'],
    estable: Number(this.nuevoNivelPeligro) <= 7
  };
  this.pociones.push(nueva);
  this.guardarEstadoGiratiempo();
  this.nuevoNombre = '';
  this.nuevaDescripcion = '';
}
\`\`\``
  },
  {
    num: 4,
    title: "Reto 4: El Fuego Purificador (ngOnDestroy y Fugas de Memoria) ⏳",
    body: `¡Has llegado a los secretos del ciclo de vida avanzado!

El caldero enciende un fuego purificador con un temporizador continuo (\`setInterval\`). Si el componente se desmonta de la vista sin apagar el fuego, se producirá una fuga de memoria (maldición residual).

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.ts\`.
2. Implementa la interfaz \`OnDestroy\` de Angular (\`export class CalderoComponent implements OnInit, OnDestroy\`).
3. En el método \`ngOnDestroy()\`, invoca \`clearInterval(this.timerIntervalId)\` para destruir el temporizador de forma segura.
4. Haz commit y push.`,
    hint: `💡 **Luz del Oráculo (Pista Reto 4):**
En Angular, cuando el usuario navega a otra pantalla o el componente se destruye, Angular llama a \`ngOnDestroy()\`. Allí debes limpiar tus intervalos:
\`\`\`typescript
ngOnDestroy(): void {
  if (this.timerIntervalId) {
    clearInterval(this.timerIntervalId);
  }
}
\`\`\`
Verifica que la clase tenga \`implements OnInit, OnDestroy\`.`
  },
  {
    num: 5,
    title: "Reto 5: El Transmutador de Estados (IA Challenge) 🔍",
    body: `¡Fascinante! Ahora entramos a la zona de alta maestría. En este reto puedes apoyarte en herramientas de Inteligencia Artificial para diseñar la lógica de búsqueda y estabilidad.

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.ts\`.
2. Implementa \`getPocionesFiltradas(): Pocion[]\`:
   * Filtra insensible a mayúsculas/minúsculas en \`nombre\` y \`descripcion\` según \`this.filtroTexto\`.
   * Filtra por \`tipoMagia\` si \`this.filtroTipoMagia !== 'TODAS'\`.
   * Filtra únicamente pociones con \`nivelPeligro > 7\` si \`this.filtroSoloPeligrosas === true\`.
   * Ordena por \`nivelPeligro\` de menor a mayor (\`this.ordenAscendente === true\`) o de mayor a menor (\`false\`).
3. Implementa \`calcularEstabilidadCaldero()\`:
   * Retorna \`'CRÍTICO'\` si hay 2 o más pociones con peligro $\\ge 8$.
   * Retorna \`'INESTABLE'\` si hay al menos 1 poción con peligro $\\ge 5$ (y menos de 2 críticas).
   * Retorna \`'SEGURO'\` en caso contrario.
4. 📝 Documenta en tu bitácora qué prompt le diste a la IA y cómo integraste la respuesta.
5. Haz commit y push.`,
    hint: `💡 **Luz del Oráculo (Pista Reto 5):**
Puedes estructurar el filtrado encadenado sobre una copia del arreglo:
\`\`\`typescript
getPocionesFiltradas(): Pocion[] {
  let res = [...this.pociones];
  if (this.filtroTexto.trim()) {
    const q = this.filtroTexto.toLowerCase();
    res = res.filter(p => p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q));
  }
  if (this.filtroTipoMagia !== 'TODAS') {
    res = res.filter(p => p.tipoMagia === this.filtroTipoMagia);
  }
  if (this.filtroSoloPeligrosas) {
    res = res.filter(p => p.nivelPeligro > 7);
  }
  res.sort((a, b) => this.ordenAscendente ? a.nivelPeligro - b.nivelPeligro : b.nivelPeligro - a.nivelPeligro);
  return res;
}

calcularEstabilidadCaldero(): 'SEGURO' | 'INESTABLE' | 'CRÍTICO' {
  const peligrosas = this.pociones.filter(p => p.nivelPeligro >= 8).length;
  if (peligrosas >= 2) return 'CRÍTICO';
  const moderadas = this.pociones.filter(p => p.nivelPeligro >= 5).length;
  if (moderadas >= 1) return 'INESTABLE';
  return 'SEGURO';
}
\`\`\``
  },
  {
    num: 6,
    title: "Reto 6: El Giratiempo / Historial Inmutable (IA Challenge) ⌛",
    body: `¡Estás a un paso de la gloria! El Giratiempo permite revertir y rehacer acciones en el caldero respetando la inmutabilidad de la memoria.

**Misión:**
1. Ve a \`src/app/components/retos/caldero/caldero.component.ts\`.
2. Implementa \`guardarEstadoGiratiempo()\`:
   * Si el usuario hizo Undo y realiza una nueva acción, trunca los estados futuros (\`this.historialPasos.slice(0, this.indiceHistorial + 1)\`).
   * Clona profundamente \`this.pociones\` (sin referencias compartidas) y añádelo a \`this.historialPasos\`.
   * Actualiza \`this.indiceHistorial = this.historialPasos.length - 1\`.
3. Implementa \`puedeDeshacer()\` (\`indiceHistorial > 0\`) y \`puedeRehacer()\` (\`indiceHistorial < historialPasos.length - 1\`).
4. Implementa \`giratiempoDeshacer()\` y \`giratiempoRehacer()\` restaurando copias del snapshot correspondiente.
5. 📝 Registra este prompt en tu bitácora de IA.
6. Haz commit y push.`,
    hint: `💡 **Luz del Oráculo (Pista Reto 6):**
Para evitar mutaciones por referencia en JavaScript/TypeScript, clona profundamente los objetos del arreglo:
\`\`\`typescript
guardarEstadoGiratiempo(): void {
  this.historialPasos = this.historialPasos.slice(0, this.indiceHistorial + 1);
  const copia = this.pociones.map(p => ({ ...p, ingredientes: [...p.ingredientes] }));
  this.historialPasos.push(copia);
  this.indiceHistorial = this.historialPasos.length - 1;
}

puedeDeshacer(): boolean {
  return this.indiceHistorial > 0;
}

puedeRehacer(): boolean {
  return this.indiceHistorial < this.historialPasos.length - 1;
}

giratiempoDeshacer(): void {
  if (!this.puedeDeshacer()) return;
  this.indiceHistorial--;
  const estado = this.historialPasos[this.indiceHistorial];
  this.pociones = estado.map(p => ({ ...p, ingredientes: [...p.ingredientes] }));
}

giratiempoRehacer(): void {
  if (!this.puedeRehacer()) return;
  this.indiceHistorial++;
  const estado = this.historialPasos[this.indiceHistorial];
  this.pociones = estado.map(p => ({ ...p, ingredientes: [...p.ingredientes] }));
}
\`\`\``
  },
  {
    num: 7,
    title: "Reto 7: Graduación Frontend, Lienzo Creativo y Pull Request Final 🎓",
    body: `🎉 **¡FELICIDADES GRAN MAGO DE FRONTEND!** 🎉

Has superado con honores todos los retos técnicos del Caldero Mágico (Retos 1 al 6).

**--CALIFICACION_AQUI--**

---

### 🎨 Tu Misión Final de Graduación:
1. **El Gran Lienzo Creativo (30% de la Nota):**
   * Ve a \`src/app/components/retos/artefacto-creativo/\`.
   * Personaliza el simulador de duelos existente o construye tu propio artefacto mágico interactivo.
   * Rúbrica obligatoria:
     1. Al menos 3 estados interactivos visibles.
     2. Uso de directivas \`@if\` y \`@for\`.
     3. Uso de Two-Way Binding (\`[(ngModel)]\`).
     4. Implementación de al menos dos hooks de ciclo de vida (\`ngOnInit\` y otro).
     5. Estética visual mágica e inmersiva.
2. **Abre tu Pull Request Obligatorio (Regla de Oro):**
   * Crea tu rama: \`git checkout -b graduacion-frontend\`.
   * Sube tus cambios: \`git add .\`, \`git commit -m "feat: artefacto creativo y graduacion"\` y \`git push origin graduacion-frontend\`.
   * Abre el **Pull Request (PR)** hacia la rama principal del repositorio del Colegio Mágico.
   * Pega en la descripción del PR tu **Bitácora de IA** usando la plantilla de \`assets/plantilla_bitacora_ia.md\` (redactada 100% por ti con criterio humano).

¡Al abrir el Pull Request el Tribunal emitirá el veredicto definitivo! 🏆`,
    hint: null
  }
];

function verificarRetoExitoso(reportContent, retoNumber) {
  if (!reportContent) return false;

  // Verificar que Karma se ejecutó
  const ejecutoPruebas = reportContent.includes('Chrome Headless') || reportContent.includes('TOTAL:');
  if (!ejecutoPruebas) return false;

  // Si hubo un error catastrófico de compilación
  if (reportContent.includes('Application bundle generation failed')) return false;

  // Buscar si existen fallos para este reto específico
  // En Karma: "Chrome Headless ... Reto X: ... FAILED"
  const regexFallo = new RegExp(`Reto ${retoNumber}:[^\n]+FAILED`, 'i');
  const hayFallo = regexFallo.test(reportContent);

  return !hayFallo;
}

module.exports = async ({ github, context }) => {
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  console.log("🏛️ Consultando el Tribunal Mágico de Angular...");

  // 1. Leer el reporte de pruebas generado en el paso anterior
  let reportContent = '';
  const testReportPath = 'test-results.log';
  if (fs.existsSync(testReportPath)) {
    reportContent = fs.readFileSync(testReportPath, 'utf8');
  }

  // 2. Buscar issues abiertos creados por el bot del Tribunal
  const { data: issues } = await github.rest.issues.listForRepo({
    owner,
    repo,
    state: 'open',
    creator: 'github-actions[bot]'
  });

  const openIssues = issues.filter(issue => issue.title.startsWith('Reto'));

  // 3. Caso Inicial: No hay issues abiertos
  if (openIssues.length === 0) {
    const { data: closedIssues } = await github.rest.issues.listForRepo({
      owner,
      repo,
      state: 'closed',
      creator: 'github-actions[bot]'
    });

    const closedRetos = closedIssues.filter(iss => iss.title.startsWith('Reto'));

    if (closedRetos.length === 0) {
      console.log("🌟 Inicio de la aventura mágica. Evaluando Reto 1.");
      const reto1Passed = verificarRetoExitoso(reportContent, 1);

      if (reto1Passed) {
        console.log("¡El estudiante inició con el Reto 1 ya resuelto!");
        await github.rest.issues.create({
          owner,
          repo,
          title: RETOS[1].title,
          body: "✅ **¡Has despertado al Tribunal Mágico con éxito y tu Reto 1 está perfecto!**\n\n---\n\n" + RETOS[1].body
        });
      } else {
        console.log("Abriendo Issue inicial para Reto 1.");
        await github.rest.issues.create({
          owner,
          repo,
          title: RETOS[0].title,
          body: RETOS[0].body
        });
      }
      return;
    } else {
      console.log("Todos los retos han sido completados.");
      return;
    }
  }

  // 4. Evaluar el Reto activo actual
  const currentIssue = openIssues[0];
  const match = currentIssue.title.match(/Reto (\d+)/);
  if (!match) return;

  const retoNum = parseInt(match[1]);
  const retoIndex = retoNum - 1;
  const reto = RETOS[retoIndex];

  console.log(`🔍 Evaluando ${currentIssue.title}...`);

  // Si llegamos al Reto 7 (Lienzo Creativo y PR final), queda abierto para entrega manual del estudiante
  if (retoNum === 7) {
    console.log("🎨 Reto 7 activo. Esperando entrega y Pull Request del estudiante.");
    return;
  }

  // 5. Contar fallos acumulados en este issue
  const { data: currentComments } = await github.rest.issues.listComments({
    owner,
    repo,
    issue_number: currentIssue.number
  });

  const failsInCurrentIssue = currentComments.filter(c =>
    c.body.includes('❌ **El Tribunal ha detectado fallas')
  ).length;

  const testPassed = verificarRetoExitoso(reportContent, retoNum);

  if (testPassed) {
    console.log(`✨ ¡Reto ${retoNum} superado con éxito!`);
    
    // Penalización por push fallido: 10 iniciales, descuenta 2 por fallo, mínimo 2 puntos
    const puntosObtenidos = Math.max(2, 10 - (2 * failsInCurrentIssue));
    const notaReto = (puntosObtenidos / 10) * 5.0;

    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: currentIssue.number,
      body: `✅ **¡Hechizo superado!**\n\nEl Tribunal Mágico ha verificado tu código y todas las pruebas de este reto pasaron exitosamente.\n\n⭐ **Puntos obtenidos en este reto:** ${puntosObtenidos}/10 (Nota: **${notaReto.toFixed(1)}/5.0**)\n\n*(Fallos registrados en este reto: ${failsInCurrentIssue})*\n\nProcedo a cerrar este reto y abriré el siguiente desafío en un momento.`
    });

    await github.rest.issues.update({
      owner,
      repo,
      issue_number: currentIssue.number,
      state: 'closed'
    });

    // Abrir el siguiente reto
    const nextReto = RETOS[retoIndex + 1];
    if (nextReto) {
      let nextBody = nextReto.body;

      // Si el siguiente es el Reto 7 (Final), calcular la calificación técnica total acumulada
      if (nextReto.num === 7) {
        let puntajeTotal = 0;
        let filasTabla = "";

        const { data: allIssues } = await github.rest.issues.listForRepo({
          owner,
          repo,
          state: 'all',
          creator: 'github-actions[bot]'
        });

        for (let i = 1; i <= 6; i++) {
          const issueReto = allIssues.find(iss => iss.title.startsWith(`Reto ${i}:`));
          let fCount = 0;
          if (issueReto) {
            const { data: comms } = await github.rest.issues.listComments({
              owner,
              repo,
              issue_number: issueReto.number
            });
            fCount = comms.filter(c => c.body.includes('❌ **El Tribunal ha detectado fallas')).length;
          }
          const pts = Math.max(2, 10 - (2 * fCount));
          const notaParcial = (pts / 10) * 5.0;
          puntajeTotal += pts;
          filasTabla += `| Reto ${i} | ${pts}/10 | ${notaParcial.toFixed(1)} | ${fCount} |\n`;
        }

        const notaFinalTecnica = (puntajeTotal / 60) * 5.0;
        const calificacionText = `### 🏆 Calificación Técnica Automática (Retos 1 al 6)\n\n| Desafío | Puntos | Nota (0.0 - 5.0) | Fallos |\n| :--- | :---: | :---: | :---: |\n${filasTabla}\n**Puntuación Total Técnica:** ${puntajeTotal} / 60\n**Nota Técnica Caldero (50% de la materia):** **${notaFinalTecnica.toFixed(1)} / 5.0**`;

        nextBody = nextBody.replace("**--CALIFICACION_AQUI--**", calificacionText);
      }

      await github.rest.issues.create({
        owner,
        repo,
        title: nextReto.title,
        body: nextBody
      });
    }
  } else {
    console.log(`❌ Reto ${retoNum} falló.`);
    const nuevoNumeroFallo = failsInCurrentIssue + 1;
    const puntosActuales = Math.max(2, 10 - (2 * nuevoNumeroFallo));

    let pistaTexto = "";
    // Si han fallado 3 o más veces (nuevoNumeroFallo >= 3), dar pista del oráculo
    if (nuevoNumeroFallo >= 3 && reto.hint) {
      pistaTexto = `\n\n---\n\n${reto.hint}`;
    }

    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: currentIssue.number,
      body: `❌ **El Tribunal ha detectado fallas en tu hechizo.**\n\n* Intento fallido **#${nuevoNumeroFallo}** en este reto.\n* Puntos actuales estimados si lo resuelves ahora: **${puntosActuales}/10**.\n\nAsegúrate de probar localmente con \`npm test\` antes de hacer \`git push\`.${pistaTexto}\n\n¡No te rindas, la perseverancia forja a los mejores magos! 🪄`
    });
  }
};
