# 📜 Bitácora de Uso de IA en el Colegio Mágico (Entrega en PR)

> **Instrucciones:** Copia todo este contenido y pégalo en la descripción de tu Pull Request (PR).  
> **Recordatorio:** Este informe vale el **20% de tu calificación final** y debe ser redactado con tus propias palabras (sin utilizar IA para generar el texto del reporte).

---

## 🧙‍♂️ Datos del Aprendiz
* **Nombre del Estudiante:** [Carlos Andrés Prado Ibarra]
* **Usuario de GitHub:** [@Capigamer888]
* **Herramientas de IA utilizadas:** [gpt 6 luna y gemini 4 argon ]

---

## 🔍 Bitácora del Reto 5: El Transmutador de Estados (Filtros y Estabilidad)

### 1. Prompt Principal Formulado
> *Pega aquí el prompt exacto que le diste a la IA:*
```text
[Explicame que funciones o metodos debo usar para este reto y que hace cada una de ellas]
```

### 2. ¿Qué respuesta te entregó la IA?
*Describe brevemente la solución que te propuso:*
- [Me explico que funciones necesitaria y como afectaba a la variable]

### 3. Ajustes y Correcciones Manuales
*¿La solución funcionó a la primera? ¿Qué tuviste que corregir o adaptar para que pasaran las pruebas del Tribunal?*
- [La solución fue a la primera y no tuve que corregir nada ]

---

## ⏳ Bitácora del Reto 6: El Giratiempo (Undo / Redo Inmutable)

### 1. Prompt Principal Formulado
> *Pega aquí el prompt exacto que le diste a la IA:*
```text
[Segun las funciones dadas en este TODO (linea 198) explicamelas a fondo y que logica deberia seguir para poder hacer este todo]
```

### 2. ¿Cómo abordó la IA la inmutabilidad de los objetos?
*Explica qué método te sugirió para clonar el arreglo de pociones sin mutar las referencias originales (ej. map con spread operator, structuredClone, etc.):*
- [aplicar un patron donde se copia cada poción(y sus elementos), aplica esa misma copia tanto al agregar un paso al historial (push) como al recuperarlo en giratiempoDeshacer() y giratiempoRehacer(), evitando que cambios futuros alteren los estados ya guardados, para borrar el historial futuro tras un undo, genera un arreglo nuevo sin mutar el existente  ]

### 3. Depuración de Errores con la IA
*Si una prueba de Jasmine falló, ¿cómo usaste la IA para encontrar el bug?*
- [ninguna prueba fallo, revise el codigo linea por linea antes de probarlo para revisar errores de sintaxis o logica ]

---

## 🎨 Resumen del Reto Creativo (Reto 7 - 30%)
* **Nombre de tu Artefacto Mágico:** [Pelea de magos: ALL SUPER]
* **¿Qué hace tu artefacto y cómo interactúa el usuario?**
  - [Simula una pelea de magos por turnos avanzada donde hasta el mas ligero hechizo puede hacerte perder, ya sea al malgastar tu energia, no saber usar bien los buffs o debuffs, o incluso no saber cuanto utilizar tus "ULTS"]
* **¿Qué hooks de ciclo de vida implementaste?**
  - [Ej: ngOnInit establece las estadísticas base de salud y energía al 100%, reinicia los contadores y carga el mensaje de bienvenida en el historial antes de comenzar el combate, ngOnDestroy limpia la memoria y previene mal uso de recursos de la pc, cancela el setTimeout pendiente de la respuesta del rival y limpia todos los temporizadores activos de las animaciones]
* **¿Qué directivas y enlaces utilizaste?**
  - [dado a que solo mejore el simulador de duelos exitente los nuevos que use fueron: disabled(para manejar los cd y otras cosas),@for,@if,click(guardar las acciones del jugador), el ngclass, style.width.%(automatización de tamaño o responsive)]

---

## 💡 Reflexión Crítica del Aprendiz
*¿En qué momentos sentiste que la IA te ahorró tiempo y en qué momentos una mala respuesta te retrasó?*
- [me ahorro tiempo en tener que ir a buscar como funcionaba cada función o buscar que función podria usar para cierta parate del codigo, los modelos que use no me retrasaron pero siento que si huebiera pasado con otros modelos menos eficientes o potentes]
