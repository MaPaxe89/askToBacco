import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSequenzaComponent } from './page-sequenza.component';

describe('PageSequenzaComponent', () => {
  let component: PageSequenzaComponent;
  let fixture: ComponentFixture<PageSequenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSequenzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSequenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
