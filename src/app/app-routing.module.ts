import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartaPokemonComponent } from './pokemons/pages/carta-pokemon/carta-pokemon.component';
import { PokemonListaComponent } from './pokemons/pokemon-lista/pokemon-lista.component';

const routes: Routes = [

  {
    path: '',
    component: PokemonListaComponent
  },

  {
    path: 'pokemon/:id',
    component: CartaPokemonComponent
  },

  {
    path: '**',
    redirectTo: ''
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
