import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCiboEVinoComponent } from './page-cibo-e-vino.component';

describe('PageCiboEVinoComponent', () => {
  let component: PageCiboEVinoComponent;
  let fixture: ComponentFixture<PageCiboEVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCiboEVinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCiboEVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
