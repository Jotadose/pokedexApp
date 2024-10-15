import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'; // URL de la API

  constructor(private http: HttpClient) {}

  // Cambia el tipo de parámetro a string
  getPokemon(pokemonId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${pokemonId}`); // Usa la ID aquí
  }
}
