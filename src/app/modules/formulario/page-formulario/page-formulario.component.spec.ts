import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormularioComponent } from './page-formulario.component';

describe('PageFormularioComponent', () => {
  let component: PageFormularioComponent;
  let fixture: ComponentFixture<PageFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFormularioComponent]
    });
    fixture = TestBed.createComponent(PageFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
