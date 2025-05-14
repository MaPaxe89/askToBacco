import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContattiComponent } from './page-contatti.component';

describe('PageContattiComponent', () => {
  let component: PageContattiComponent;
  let fixture: ComponentFixture<PageContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContattiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
