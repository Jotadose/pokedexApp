import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'; // Importa el servicio

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage {
  pokemon: any = null; // Variable para almacenar el Pokémon
  pokemonId: number = 1; // ID del Pokémon a buscar (comienza con 1)

  constructor(private pokemonService: PokemonService) {}

  // Método para buscar el Pokémon
  searchPokemon() {
    // Convierte pokemonId a string al pasar como argumento
    this.pokemonService.getPokemon(this.pokemonId.toString()).subscribe(
      (data) => {
        this.pokemon = data; // Asigna los datos del Pokémon a la variable
      },
      (error) => {
        console.error('Pokémon no encontrado', error);
        this.pokemon = null; // Resetea la variable si no se encuentra
      }
    );
  }
}
