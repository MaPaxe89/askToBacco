import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTitoloComponent } from './mini-titolo.component';

describe('MiniTitoloComponent', () => {
  let component: MiniTitoloComponent;
  let fixture: ComponentFixture<MiniTitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniTitoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniTitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
