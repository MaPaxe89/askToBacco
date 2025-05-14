import { Component } from '@angular/core';
import { MiniTitoloComponent } from "../../components/mini-titolo/mini-titolo.component";
import { FormServizioRicercaComponent } from "../../components/form-servizio-ricerca/form-servizio-ricerca.component";
import { Constants } from '../../costants/constants';


@Component({
  selector: 'app-page-home',
  imports: [MiniTitoloComponent, FormServizioRicercaComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

  nomeMiniTitolo: string = Constants.TITOLI.MINI_TITOLO_DEFAULT;
  heroTitle: string = Constants.TITOLI.FRASE_HOME;

}
