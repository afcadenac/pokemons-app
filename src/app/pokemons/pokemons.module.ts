import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetallesComponent } from './pokemon-detalles/pokemon-detalles.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { CartaPokemonComponent } from './pages/carta-pokemon/carta-pokemon.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PokemonDetallesComponent,
    PokemonListaComponent,
    CartaPokemonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    PokemonDetallesComponent,
    PokemonListaComponent
  ]
})
export class PokemonsModule { }
