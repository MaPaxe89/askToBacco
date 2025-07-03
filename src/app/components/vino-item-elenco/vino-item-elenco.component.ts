import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core'
import { Vino } from '../../models/vino';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vino-item-elenco',
  imports: [CommonModule],
  templateUrl: './vino-item-elenco.component.html',
  styleUrl: './vino-item-elenco.component.css'
})
export class VinoItemElencoComponent {

   @Input() vini: Vino[] = [];

   @Output() vinoSelezionato = new EventEmitter<Vino>();

  selezionaVino(vino: Vino): void {
    this.vinoSelezionato.emit(vino);
  }

   ngOnit(){
    console.log("questo " + this.vini);
   }

}
