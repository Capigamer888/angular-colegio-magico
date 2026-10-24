# 🚪 Guía Oficial: Cómo Abrir tu Pull Request (PR)

> ⚠️ **RECORDATORIO VITAL (REGLA DE ORO #2):**
> **Sin Pull Request = Calificación de 0.0.**
> Si completas todos los retos pero no abres el Pull Request hacia la rama principal del repositorio oficial, no podremos calificar tu trabajo.

---

## 🧭 Paso a Paso para la Entrega Oficial

### Paso 1: Asegúrate de que todos tus cambios tengan commit y push
En tu terminal:
```bash
git status
# Si hay cambios pendientes:
git add .
git commit -m "feat: completar retos del caldero y artefacto creativo"
git push origin tu-rama
```

### Paso 2: Ve a tu Repositorio en GitHub
1. Abre tu navegador e ingresa a tu repositorio forkeado en GitHub.
2. Verás una barra amarilla con el botón verde **Compare & pull request**. Haz clic en él.
3. Si no aparece, ve a la pestaña **Pull requests** y haz clic en **New pull request**.

### Paso 3: Configurar la Dirección del PR
* **Base repository:** El repositorio oficial del curso / profesor (rama `main`).
* **Head repository:** Tu fork personal (tu rama de trabajo).

### Paso 4: Llenar la Bitácora Obligatoria de IA (20% de la Nota)
1. En el título del PR pon: `Entrega Angular: [Tu Nombre Completo]`.
2. En la caja de descripción, copia y pega el contenido completo de [plantilla_bitacora_ia.md](./plantilla_bitacora_ia.md).
3. Llena cada sección con tus prompts, explicaciones y la descripción de tu artefacto creativo.
4. Haz clic en el botón verde **Create pull request**.

### Paso 5: Esperar el Veredicto del Tribunal
Una vez abierto el PR, el workflow de **GitHub Actions ("El Gran Tribunal de Magia")** se ejecutará automáticamente:
* ✅ **Check verde:** Todos los tests unitarios pasaron con éxito.
* ❌ **Cruz roja:** Algo falló en tus pruebas. Puedes hacer clic en *Details* para ver el log de error, corregirlo en tu código local, hacer `git commit` y `git push`. El PR se actualizará automáticamente.
