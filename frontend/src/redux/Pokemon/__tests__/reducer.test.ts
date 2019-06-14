import { fetchPokemonSuccess, fetchPokemonsSuccess } from '../actions';
import reducer from '../reducer';

const initialState = {};
const pokemonsObj = { '1': { id: 1, name: 'bulbasaur', weight: 69, height: 7 } };
const pokemonCaracteristics = { id: 1, name: 'bulbasaur', weight: 69, height: 7 };
describe('Pokemon reducer', () => {
  describe('FETCH_POKEMONS_SUCCESS', () => {
    it('Should return an initial state with an object containing one pokemon', () => {
      const action = fetchPokemonsSuccess(pokemonsObj);
      const expectedState = pokemonsObj;

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe('FETCH_POKEMON_SUCCESS', () => {
    it('Should return an initial state with an object containing one pokemon from the caracteristics of the pokemon', () => {
      const action = fetchPokemonSuccess(pokemonCaracteristics);
      const expectedState = pokemonsObj;

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
