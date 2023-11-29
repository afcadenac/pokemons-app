import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemons.service';


@Component({
  selector: 'app-pokemon-detalles',
  templateUrl: './pokemon-detalles.component.html',
})
export class PokemonDetallesComponent {
  @Input()
  pokemon: any;

  public detallesPokemon:any;

  constructor(private servicio: PokemonService) {}


  ngOnInit(): void {
    this.traerDetallesPokemon(this.pokemon.url); // Cambia el número según el Pokémon que desees mostrar
  }

  traerDetallesPokemon(url:string): void {
    this.servicio.traerPokemonURL(url).subscribe((data) => {
      this.detallesPokemon = data;
    });
  }
}
