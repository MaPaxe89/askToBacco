import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { VinoService } from '../../services/vino.service';

@Component({
  selector: 'app-form-servizio-ricerca',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,HttpClientModule],
  templateUrl: './form-servizio-ricerca.component.html',
  styleUrl: './form-servizio-ricerca.component.css'
})
export class FormServizioRicercaComponent {


    query: string = "";
    suggerimenti: any[]=[];
    

    constructor(private vinoService: VinoService){}

    onSearch(){
        if(this.query.length > 2){
          console.log(this.query);
          this.vinoService.searchVino(this.query).subscribe(
              (data)=>{
                console.log(data)
                this.suggerimenti = data;
              }
          )
        } else {
          this.suggerimenti = [];
        }
    }

    onSelect(vino: any) {
      this.query = vino.nome;  // Imposta il nome del vino selezionato nella casella
      this.suggerimenti = [];  // Pulisce la lista dei suggerimenti
    }
  

   
}
