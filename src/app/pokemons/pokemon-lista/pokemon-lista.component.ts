import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
})
export class PokemonListaComponent {
  pokemonList: any[] = [];

  constructor(private servicio: PokemonService) {}

  ngOnInit(): void {
    this.traerListaPokemon();
  }

  traerListaPokemon(): void {
    this.servicio.traerListaPokemon().subscribe((data) => {
      console.log(data.results)
      this.pokemonList = data.results;
    });
  }



  buscar(buscarPokemon:string): void {

    this.pokemonList = []
    
    if (buscarPokemon.length >= 0) {

      this.servicio.traerListaPokemon().subscribe((data) => {
        this.pokemonList = data.results;
        this.pokemonList = this.pokemonList.filter(
          (pokemon) => pokemon.name.toLowerCase().includes(buscarPokemon.toLowerCase())
        );
      });
      
    } else {

      this.traerListaPokemon();
    }
  }
}
