# 🧙‍♂️ Guía de Solución: El Caldero de Pociones (Retos 1 al 6)

Este documento es de uso **exclusivo para el profesor** o como guía de referencia para evaluar los retos de los estudiantes en `src/app/components/retos/caldero/caldero.component.ts`.

---

## 🔮 Reto 1: El Ingrediente Base (Capa Models & ngOnInit)
```typescript
ngOnInit(): void {
  this.iniciarFuegoCaldero();

  // Solución Reto 1:
  this.pociones = [
    {
      id: 1,
      nombre: 'Poción Multijugos',
      descripcion: 'Permite transformarse temporalmente en otra persona.',
      nivelPeligro: 8,
      tiempoCoccionMinutos: 45,
      tipoMagia: 'Transmutacion',
      ingredientes: ['Crisopas', 'Sanguijuelas', 'Polvo de cuerno de bicornio'],
      estable: true
    },
    {
      id: 2,
      nombre: 'Felix Felicis',
      descripcion: 'La poción de la suerte líquida.',
      nivelPeligro: 3,
      tiempoCoccionMinutos: 120,
      tipoMagia: 'Curacion',
      ingredientes: ['Cenizas de huevo de Ashwinder', 'Tentáculo de Murtlap'],
      estable: true
    },
    {
      id: 3,
      nombre: 'Filtro de Muertos',
      descripcion: 'Un somnífero tan poderoso que induce un sueño idéntico a la muerte.',
      nivelPeligro: 10,
      tiempoCoccionMinutos: 90,
      tipoMagia: 'Prohibida',
      ingredientes: ['Ajenjo', 'Raíz de asfódelo'],
      estable: false
    }
  ];

  this.guardarEstadoGiratiempo();
}
```

---

## 🪞 Reto 3: Data Binding & Preparar Nueva Poción
```typescript
esFormularioValido(): boolean {
  return (
    this.nuevoNombre.trim().length >= 3 &&
    this.nuevoTiempoCoccion > 0 &&
    this.nuevoNivelPeligro >= 1 &&
    this.nuevoNivelPeligro <= 10
  );
}

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

  // Reset del formulario
  this.nuevoNombre = '';
  this.nuevaDescripcion = '';
  this.nuevoNivelPeligro = 1;
  this.nuevoTiempoCoccion = 10;
  this.nuevoTipoMagia = 'Curacion';
}
```

---

## ⏳ Reto 4: Ciclo de Vida ngOnDestroy
```typescript
ngOnDestroy(): void {
  if (this.timerIntervalId) {
    clearInterval(this.timerIntervalId);
  }
}
```

---

## 🔍 Reto 5 (IA Challenge): Filtros Dinámicos y Estabilidad
```typescript
getPocionesFiltradas(): Pocion[] {
  let resultado = [...this.pociones];

  if (this.filtroTexto.trim() !== '') {
    const q = this.filtroTexto.toLowerCase();
    resultado = resultado.filter(p => 
      p.nombre.toLowerCase().includes(q) || 
      p.descripcion.toLowerCase().includes(q)
    );
  }

  if (this.filtroTipoMagia !== 'TODAS') {
    resultado = resultado.filter(p => p.tipoMagia === this.filtroTipoMagia);
  }

  if (this.filtroSoloPeligrosas) {
    resultado = resultado.filter(p => p.nivelPeligro > 7);
  }

  resultado.sort((a, b) => 
    this.ordenAscendente ? a.nivelPeligro - b.nivelPeligro : b.nivelPeligro - a.nivelPeligro
  );

  return resultado;
}

calcularEstabilidadCaldero(): 'SEGURO' | 'INESTABLE' | 'CRÍTICO' {
  const peligrosas = this.pociones.filter(p => p.nivelPeligro >= 8).length;
  if (peligrosas >= 2) return 'CRÍTICO';

  const moderadas = this.pociones.filter(p => p.nivelPeligro >= 5).length;
  if (moderadas >= 1) return 'INESTABLE';

  return 'SEGURO';
}
```

---

## ⏳ Reto 6 (IA Challenge): El Giratiempo (Undo / Redo)
```typescript
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
```
