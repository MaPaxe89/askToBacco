import { Component } from '@angular/core';
import { VinoItemElencoComponent } from "../../components/vino-item-elenco/vino-item-elenco.component";
import { Vino } from '../../models/vino';
import { SingleVinoSequenceComponent } from "../../components/single-vino-sequence/single-vino-sequence.component";

@Component({
  selector: 'app-page-sequenza',
  imports: [VinoItemElencoComponent, SingleVinoSequenceComponent],
  templateUrl: './page-sequenza.component.html',
  styleUrl: './page-sequenza.component.css'
})
export class PageSequenzaComponent {

  vini: Vino[] = [];

  ngOnInit(): void {
  const state = history.state;
  if (state && state.vini) {
    this.vini = state.vini;

    if (this.vini.length > 0) {
      this.vinoSelezionato = this.vini[0];
    }
  }
}


  vinoSelezionato?: Vino;

onVinoSelezionato(vino: Vino): void {
  this.vinoSelezionato = vino;
}

}
