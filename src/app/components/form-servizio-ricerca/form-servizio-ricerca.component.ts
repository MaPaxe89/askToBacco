import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { VinoService } from '../../services/vino.service';
import { vinoInput } from '../../models/vinoInput';
import { Vino } from '../../models/vino';

@Component({
  selector: 'app-form-servizio-ricerca',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,HttpClientModule],
  templateUrl: './form-servizio-ricerca.component.html',
  styleUrl: './form-servizio-ricerca.component.css'
})
export class FormServizioRicercaComponent {

  

     viniInputs: vinoInput[] = [
    { query: '', suggerimenti: [] },
    { query: '', suggerimenti: []},
    { query: '', suggerimenti: []}
  ];

  selectedVini: Vino[] = [];

  constructor(private vinoService: VinoService, private router: Router) {}

  onSearch(index: number) {
    const query = this.viniInputs[index].query;

    if (query.length > 2) {
      this.vinoService.searchVino(query).subscribe((data) => {
        this.viniInputs[index].suggerimenti = data;
      });
    } else {
      this.viniInputs[index].suggerimenti = [];
    }
  }

  onSelect(vino: any, index: number) {
    this.viniInputs[index].query = vino.nome;
    this.viniInputs[index].suggerimenti = [];
      const alreadySelected = this.selectedVini.find(v => v.nome === vino.nome && v.cantina === vino.cantina && v.idVino === vino.idVino);
      
  if (!alreadySelected) {
    this.selectedVini.push(vino);
    console.log(this.selectedVini)

  } else{
    alert("QUESTO VINO E' STATO GIA' INSERITO")
    this.viniInputs[index].query = " ";  
    
  }
  }

  reset(){    
      this.selectedVini = [];      
      console.log(this.selectedVini)
  } 
  
  generaSequenza() {
  const ids: number[] = this.selectedVini
    .map(v => v.idVino)
    .filter((id): id is number => id !== undefined);

  this.vinoService.generateSequence(ids).subscribe(result => {
    console.log('Sequenza ordinata:', result);
    this.router.navigate(['/lista-ordinata'], { state: { vini: result } });
  });
  }
}


