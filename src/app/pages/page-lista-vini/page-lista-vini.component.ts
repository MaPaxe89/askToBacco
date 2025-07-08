import { Component } from '@angular/core';
import { ListaUtentiComponent } from "../../components/lista-utenti/lista-utenti.component";
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'app-page-lista-vini',
  imports: [ListaUtentiComponent, LoginComponent],
  templateUrl: './page-lista-vini.component.html',
  styleUrl: './page-lista-vini.component.css'
})
export class PageListaViniComponent {



}
