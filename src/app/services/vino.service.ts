import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Vino } from '../models/vino';


@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor(private http:HttpClient) { }

  urlSuggerimentiSearch: string = 'http://localhost:8080/api/vino/cercaVino';
  urlGeneraVino: string = 'http://localhost:8080/api/vino/listaVini';


  //autocomplete vino
  searchVino(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlSuggerimentiSearch}/${query}`);
  }

    // user scrive in input un vino
  // chiama direttamente il .ts del componente dove chiama la onSearch con controllo sull imput e si iscrive all'evento del vinoService intercettando la rispota
  // vino service chiama il be, aspettando la risposta con observable e la rimanda al subscribe si onSearch

  // genera la sequenza in ordine 
  generateSequence(vini: number[]): Observable<Vino[]> {
  let params = new HttpParams();
  vini.forEach(vinoId => {
    params = params.append('vino', vinoId.toString());
  });

  return this.http.get<Vino[]>(this.urlGeneraVino, { params });
}



}
