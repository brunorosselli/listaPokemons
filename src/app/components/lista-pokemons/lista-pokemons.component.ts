import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { PokemonModel } from '../../interfaces/pokemon-model'
import { PokemonsService} from '../../services/pokemons.service'

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {

  pokemon: PokemonModel = new PokemonModel();
  pokemons: Array <any> = new Array();
  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.listarPokemons();
  }
 // Transforma a primeira letra de uma string em maiuscula.
  primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Faz o tratamento do array que recebe o resultado de getPokemons
  listarPokemons(){
    this.pokemonService.getPokemons()
    .subscribe(resultado => {
      const res =  ((resultado));
      console.log(res);
      const values = Object.values(res);
      console.log('Values:', values)
      this.pokemons.push(values[3]);
      console.log('Pokemons:', this.pokemons);
     } );
   }
 }