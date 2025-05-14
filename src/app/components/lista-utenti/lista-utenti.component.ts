import { Component } from '@angular/core';
import { UtenteService } from '../../services/utente.service';

@Component({
  selector: 'app-lista-utenti',
  standalone:true,
  imports: [],
  templateUrl: './lista-utenti.component.html',
  styleUrl: './lista-utenti.component.css'
})
export class ListaUtentiComponent {


  constructor(private service: UtenteService){

  }


  ngOnInit(){
    this.service.ListaUtenti().then(ris=>{
      console.log(ris)
    });
  }

  
  
}
