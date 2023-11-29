import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  traerPokemon(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  traerPokemonURL(url: string): Observable<any> {
    return this.http.get(url);
  }

  traerListaPokemon(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1500`);
  }

}