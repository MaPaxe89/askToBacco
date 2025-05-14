import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServizioRicercaComponent } from './form-servizio-ricerca.component';

describe('FormServizioRicercaComponent', () => {
  let component: FormServizioRicercaComponent;
  let fixture: ComponentFixture<FormServizioRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormServizioRicercaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormServizioRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
