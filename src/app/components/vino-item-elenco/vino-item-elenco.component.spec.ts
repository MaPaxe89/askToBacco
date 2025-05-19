import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoItemElencoComponent } from './vino-item-elenco.component';

describe('VinoItemElencoComponent', () => {
  let component: VinoItemElencoComponent;
  let fixture: ComponentFixture<VinoItemElencoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinoItemElencoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoItemElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
