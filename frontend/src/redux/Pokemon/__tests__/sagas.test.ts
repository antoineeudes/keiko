import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { fetchPokemon, fetchPokemons } from '../sagas';
import normalize from 'services/normalizers/PokemonNormalizer';
import {
  fetchPokemonRequest,
  fetchPokemonsRequest,
  makeGetRequest,
} from 'services/networking/request';
import {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
  fetchPokemonRequested,
  fetchPokemonsRequested,
} from '../actions';

const fetchPokemonRequestedAction = fetchPokemonRequested(1);
const fetchPokemonsRequestedAction = fetchPokemonsRequested(6);
const fetchPokemonResult = { id: 1, name: 'bulbasaur', weight: 69, height: 7 };
const fetchPokemonsResult = [{ id: 151, name: 'mew', weight: 40, height: 4 }];

describe('[Saga] Pokemon redux', () => {
  describe('Fecth a single pokemon', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        return expectSaga(fetchPokemon, fetchPokemonRequestedAction)
          .provide([[matchers.call.fn(fetchPokemonRequest), fetchPokemonResult]])
          .put(fetchPokemonSuccess(fetchPokemonResult))
          .run();
      });
    });
  });
  describe('Fecth a page of pokemons', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        const response = await makeGetRequest('/pokemon?page=1');
        return expectSaga(fetchPokemons, fetchPokemonsRequestedAction)
          .provide([[matchers.call.fn(fetchPokemonsRequest), fetchPokemonsResult]])
          .put(fetchPokemonsSuccess(normalize(fetchPokemonsResult)))
          .run();
      });
    });
  });
});
