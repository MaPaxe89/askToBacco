import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor(private http:HttpClient) { }

  urlSuggerimentiSearch: String = 'http://localhost:8080/api/vino/cercaVino';

  searchVino(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlSuggerimentiSearch}/${query}`);
  }


  // user scrive in input un vino
  // chiama direttamente il .ts del componente dove chiama la onSearch con controllo sull imput e si iscrive all'evento del vinoService intercettando la rispota
  // vino service chiama il be, aspettando la risposta con observable e la rimanda al subscribe si onSearch
}
