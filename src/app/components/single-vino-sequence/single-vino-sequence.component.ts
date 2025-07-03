import { Component, Input } from '@angular/core';
import { Vino } from '../../models/vino';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-vino-sequence',
  imports: [CommonModule],
  templateUrl: './single-vino-sequence.component.html',
  styleUrl: './single-vino-sequence.component.css'
})
export class SingleVinoSequenceComponent {

  @Input() vini: Vino[] = [];
  @Input() vino?: Vino;

    ngOnInit(): void {
    console.log("questo", this.vino);
  }



}
