import { PokemonsObject } from 'pages/Home/Home';
import { FETCH_POKEMONS_SUCCESS, FETCH_POKEMON_SUCCESS } from './actions';
import { AnyAction } from 'redux';

const initialState: PokemonsObject = {};

const reducer = (state: PokemonsObject = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS:
      return action.pokemon;
    case FETCH_POKEMON_SUCCESS:
      return action.pokemon;
    default:
      return state;
  }
};

export default reducer;
