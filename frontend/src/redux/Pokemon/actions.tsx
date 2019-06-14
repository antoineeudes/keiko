import { PokemonsObject, PokemonCaracteristics } from 'pages/Home/Home';

export const FETCH_POKEMONS_SUCCESS = 'Pokemon/FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMON_SUCCESS = 'Pokemon/FETCH_POKEMON_SUCCESS';

export const fetchPokemonsSuccess = (pokemon: PokemonsObject) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    pokemon,
  };
};

export const fetchPokemonSuccess = (pokemonCaract: PokemonCaracteristics) => {
  const pokemon = { [pokemonCaract.id.toString()]: pokemonCaract };
  return {
    type: FETCH_POKEMON_SUCCESS,
    pokemon,
  };
};
