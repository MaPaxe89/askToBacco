import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVinoSequenceComponent } from './single-vino-sequence.component';

describe('SingleVinoSequenceComponent', () => {
  let component: SingleVinoSequenceComponent;
  let fixture: ComponentFixture<SingleVinoSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleVinoSequenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVinoSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
