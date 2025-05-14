import { Injectable } from '@angular/core';
import { Utente } from '../models/utente';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor() { }

  

  async ListaUtenti(): Promise<Utente[]> {
    try {
      const response = await fetch("http://localhost:8080/api/utente/all");
  
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
  
      const utenti = await response.json();
  
      if (Array.isArray(utenti)) {
        return utenti; //  direttamente l'array che arriva
      }
  
      return [];
    } catch (error) {
      console.error("Errore durante il fetch degli utenti:", error);
      return [];
    }
  }
}
