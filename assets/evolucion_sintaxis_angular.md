# 📜 Evolución Histórica de las Directivas en Angular

En las empresas te toparás con proyectos creados en diferentes épocas. Es fundamental que reconozcas cómo se escribían las directivas condicionales y de repetición en cada era de Angular.

---

## 📊 Tabla Comparativa Resumen

| Concepto | AngularJS (1.x Legacy) | Angular Tradicional (v2 a v16) | Angular Moderno (v17+) |
| :--- | :--- | :--- | :--- |
| **Condicional** | `ng-if="condicion"` | `*ngIf="condicion"` | `@if (condicion) { ... }` |
| **Alternativa** | `ng-if="!condicion"` | `<ng-template #elseBlock>` | `@else { ... }` |
| **Iteración** | `ng-repeat="item in items"` | `*ngFor="let item of items"` | `@for (item of items; track item.id) { ... }` |
| **Lista vacía** | `ng-if="items.length === 0"` | `<ng-container *ngIf="items.length === 0">` | `@empty { ... }` |
| **Switch** | `ng-switch` | `[ngSwitch]` y `*ngSwitchCase` | `@switch (valor) { @case (1) { } }` |

---

## 🔍 Ejemplos Prácticos de Código

### 1. Condicionales: Hechizo Desilusionador (Capa de Invisibilidad)

#### Era 1: AngularJS (1.x - Histórico)
```html
<div ng-if="!mago.tieneCapa">
  <span>Harry Potter es visible</span>
</div>
<div ng-if="mago.tieneCapa">
  <span>Harry Potter es invisible</span>
</div>
```

#### Era 2: Angular 2 a 16 (Sintaxis con Asterisco)
```html
<!-- Requiere CommonModule -->
<div *ngIf="!mago.tieneCapa; else capaPuesta">
  <span>Harry Potter es visible</span>
</div>
<ng-template #capaPuesta>
  <div><span>Harry Potter es invisible</span></div>
</ng-template>
```

#### Era 3: Angular Moderno (v17+ - Lo que usamos en este Colegio)
```html
<!-- Built-in Control Flow (Más rápido, sin imports extra) -->
@if (!mago.tieneCapa) {
  <div><span>Harry Potter es visible</span></div>
} @else {
  <div><span>Harry Potter es invisible</span></div>
}
```

---

### 2. Iteración: Geminio (Clonación de Ranas de Chocolate)

#### Era 2: Angular 2 a 16
```html
<ul>
  <li *ngFor="let rana of ranas; let i = index; trackBy: trackRanaPorId">
    {{ i + 1 }}. {{ rana.nombre }}
  </li>
</ul>
```

#### Era 3: Angular Moderno (v17+)
```html
<ul>
  @for (rana of ranas; track rana.id; let i = $index) {
    <li>{{ i + 1 }}. {{ rana.nombre }}</li>
  } @empty {
    <li>No quedan ranas de chocolate en el frasco.</li>
  }
</ul>
```

---

## ⚡ ¿Por qué Angular cambió a `@if` y `@for`?
1. **Rendimiento:** El nuevo control flow está optimizado a nivel de compilador y es hasta un 90% más rápido en renderizado que las directivas estructurales antiguas.
2. **Sintaxis Natural:** Se parece a JavaScript o TypeScript estándar, eliminando la necesidad de `<ng-template>` verbosos para el `@else`.
3. **El bloque `@empty`:** Provee una forma limpia de mostrar mensajes cuando un arreglo está vacío sin tener que hacer chequeos adicionales de `array.length === 0`.
4. **`track` obligatorio:** Obliga al programador a definir una clave única para cada elemento, evitando fugas de rendimiento al renderizar listas grandes.
