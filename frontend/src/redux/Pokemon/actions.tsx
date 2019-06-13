import { createStandardAction } from 'typesafe-actions';
import { PokemonCaracteristics, PokemonsObject } from 'pages/Home/Home';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<{
  pokemon: PokemonsObject;
}>();
