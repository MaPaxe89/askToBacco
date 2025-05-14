import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaViniComponent } from './page-lista-vini.component';

describe('PageListaViniComponent', () => {
  let component: PageListaViniComponent;
  let fixture: ComponentFixture<PageListaViniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListaViniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListaViniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
