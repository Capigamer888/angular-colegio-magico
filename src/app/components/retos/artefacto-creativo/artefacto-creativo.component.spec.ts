// ============================================================================
// ⚠️ ARCHIVO SAGRADO DEL TRIBUNAL DE MAGIA (GITHUB ACTIONS)
// PROHIBIDO MODIFICAR ESTE ARCHIVO.
// Regla de Oro: Si este archivo es alterado, la calificación será 0.0 automática.
// ============================================================================

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtefactoCreativoComponent } from './artefacto-creativo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('🏛️ Tribunal de Magia - ArtefactoCreativoComponent (Reto 7 - 30%)', () => {
  let component: ArtefactoCreativoComponent;
  let fixture: ComponentFixture<ArtefactoCreativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtefactoCreativoComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtefactoCreativoComponent);
    component = fixture.componentInstance;
  });

  it('debe instanciarse correctamente como componente del Reto Creativo', () => {
    expect(component).toBeTruthy();
  });

  it('debe implementar el ciclo de vida ngOnInit inicializando el estado', () => {
    fixture.detectChanges();
    expect(component.estadoDuelo).toBeDefined();
    expect(component.hechizosDuelo.length).toBeGreaterThanOrEqual(1);
  });

  it('debe transicionar entre estados interactivos del artefacto', () => {
    fixture.detectChanges();
    expect(component.estadoDuelo).toBe('PREPARACION');

    component.iniciarDuelo();
    expect(component.estadoDuelo).toBe('EN_CURSO');
    expect(component.saludMago).toBe(100);
    expect(component.saludRival).toBe(100);
  });

  it('debe permitir lanzar hechizos y registrar acciones en la bitácora', () => {
    fixture.detectChanges();
    component.iniciarDuelo();

    const hechizoAtaque = component.hechizosDuelo.find(h => h.tipo === 'Ataque');
    expect(hechizoAtaque).toBeDefined();

    if (hechizoAtaque) {
      const saludInicialRival = component.saludRival;
      component.lanzarHechizo(hechizoAtaque);
      expect(component.saludRival).toBeLessThan(saludInicialRival);
      expect(component.historialDuelo.length).toBeGreaterThan(0);
    }
  });

  it('debe implementar ngOnDestroy limpiando recursos', () => {
    fixture.detectChanges();
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
