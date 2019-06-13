import { PokemonCaracteristics, PokemonsObject } from 'pages/Home/Home';
import { ActionType, getType } from 'typesafe-actions';
import { AnyAction } from 'redux';
import { fetchPokemonsSuccess } from './actions';

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

export type PokemonState = PokemonsObject;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return typedAction.payload.pokemon;
    default:
      return state;
  }
};

export default reducer;
