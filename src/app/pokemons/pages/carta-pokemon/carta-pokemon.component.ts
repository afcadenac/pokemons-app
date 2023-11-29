import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
})
export class CartaPokemonComponent{
  constructor(private ruta: ActivatedRoute,private servicio: PokemonService){}


  public pokemonInfo:any

  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      const id = params['id'];
      this.traerPokemonId(id);
    });
  }

  traerPokemonId=(idPokemon:number):void=>{
    this.servicio.traerPokemon(idPokemon).subscribe((data) => {
      console.log(data)
      this.pokemonInfo = data;
    });
  }

}
