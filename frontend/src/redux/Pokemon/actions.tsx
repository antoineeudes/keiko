import { createStandardAction } from 'typesafe-actions';
import { PokemonsObject } from 'pages/Home/Home';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<{
  pokemon: PokemonsObject;
}>();

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<{
  pokemon: PokemonsObject;
}>();
