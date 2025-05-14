import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-mini-titolo',
  standalone:true,
  imports: [],
  templateUrl: './mini-titolo.component.html',
  styleUrl: './mini-titolo.component.css'
})
export class MiniTitoloComponent {

  
  @Input() miniTitolo: string = '';

  
  
}
