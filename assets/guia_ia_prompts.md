# 🧠 Guía de Hechicería con IA: Anatomía del Prompt Técnico

En el Colegio Mágico, la Inteligencia Artificial no está prohibida; al contrario, es como poseer un **giratiempo o un pensadero**: una herramienta de amplificación cognitiva. Sin embargo, un mal uso de la IA conduce a alucinaciones, código deprecado y errores que el Tribunal detectará de inmediato.

Esta guía te enseñará a formular prompts profesionales para Angular, especialmente útiles para los **Retos 5 y 6**.

---

## 🏛️ 1. La Anatomía de un Prompt Técnico Mágico

Un prompt novato suele ser: *"Hazme un filtro para Angular"*.  
Ese prompt fallará porque la IA asumirá versiones viejas (AngularJS o sintaxis con `*ngFor` y `pipe` impuro).

Un prompt profesional consta de 4 ingredientes obligatorios:

```
┌────────────────────────────────────────────────────────┐
│  1. ROL: Define quién es la IA                         │
│  2. CONTEXTO: Qué tecnologías y versiones usas        │
│  3. RESTRICCIÓN: Qué NO debe hacer o qué sintaxis usar│
│  4. FORMATO ESPERADO: Cómo quieres la respuesta       │
└────────────────────────────────────────────────────────┘
```

### ✨ Ejemplo de Prompt de Alto Nivel para el Reto 5:
> **Rol:** "Actúa como un arquitecto senior especializado en Angular 18+ y TypeScript estricto."  
> **Contexto:** "Tengo una lista de objetos tipo `Pocion` (con campos: id, nombre, descripcion, nivelPeligro: number, tipoMagia: string). Estoy trabajando en un componente Standalone en Angular moderno."  
> **Restricción:** "No uses pipes impuros ni librerías externas. Necesito un método en TypeScript puro que reciba 4 filtros combinados (texto en nombre/descripción, tipo de magia, toggle de solo peligrosas > 7, y orden ascendente/descendente). Debe ser una función pura que no mute el arreglo original."  
> **Formato:** "Entrégame solo la función TypeScript con tipado explícito y una breve explicación de cómo garantizar la inmutabilidad."

---

## 🎯 2. ¿Qué es un System Prompt / Skill de IA?

Cuando uses herramientas como ChatGPT, Claude o asistentes integrados, puedes configurar instrucciones personalizadas (System Prompts) para ahorrar tiempo:

```markdown
Eres un tutor técnico de Frontend. Mis restricciones fijas son:
- Usamos Angular 18/19 Standalone (sin NgModules).
- Usamos el nuevo Control Flow (@if, @for) en lugar de *ngIf/*ngFor.
- Todas las variables deben tener tipos de TypeScript estrictos (nada de 'any').
- Explica el porqué de cada solución antes de dar el código.
```

---

## 🚫 3. Antipatrones: Cómo NO Usar la IA

1. **El Copy-Paste Ciego:** Pegar código sin leerlo casi siempre romperá las pruebas de Jasmine/Karma porque la IA puede inventar nombres de métodos que no coinciden con la interfaz esperada por el test.
2. **Pedirle a la IA que modifique los archivos `*.spec.ts`:** ¡Recuerda la Regla de Oro! Si tocas los tests, sacas **0.0 automáticamente**.
3. **Generar la Bitácora con IA:** La bitácora del PR vale el **20% de tu calificación** y debe ser redactada por ti, reflexionando honestamente sobre tu experiencia. Si se detecta un informe generado con IA, ese 20% será anulado.

---

## 🔍 4. Ciclo de Iteración y Depuración

Si el código que te dio la IA falla en `npm test`:
1. Copia el mensaje exacto de error que arrojó Jasmine en la terminal.
2. Pásaselo a la IA con este prompt:
   > *"Al ejecutar npm test, Jasmine me arrojó el siguiente error: [pegar error]. ¿Por qué falló esta aserción y cómo ajusto mi lógica sin modificar el archivo spec.ts?"*
3. Analiza la respuesta antes de aplicar el cambio.
