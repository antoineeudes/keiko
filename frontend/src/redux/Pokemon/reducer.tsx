import { PokemonsObject } from 'pages/Home/Home';
import { ActionType, getType } from 'typesafe-actions';
import {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMON_SUCCESS,
} from './actions';

type PokemonAction = ActionType<typeof fetchPokemonsSuccess | typeof fetchPokemonSuccess>;

const initialState: PokemonsObject = {};

const reducer = (state: PokemonsObject = initialState, action: PokemonAction) => {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS || FETCH_POKEMON_SUCCESS:
      return action.pokemon;
    default:
      return state;
  }
};

export default reducer;
