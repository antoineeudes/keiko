import { takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { FETCH_POKEMONS_REQUESTED, FETCH_POKEMON_REQUESTED } from './actions';
import { makeGetRequest } from 'services/networking/request';
import { call, put } from 'redux-saga/effects';
import normalize from 'services/normalizers/PokemonNormalizer';
import { fetchPokemonsSuccess, fetchPokemonSuccess } from 'redux/Pokemon/actions';

async function homeRequest(page: number) {
  const response = await makeGetRequest(`/pokemon?page=${page}`);
  return response.body;
}

async function pokemonDetailsRequest(id: number) {
  const response = await makeGetRequest(`/pokemon/${id}`);
  return response.body;
}

function* fetchPokemons(action: AnyAction) {
  const result = yield call(homeRequest, action.page);
  yield put(fetchPokemonsSuccess(normalize(result)));
}

function* fetchPokemon(action: AnyAction) {
  const result = yield call(pokemonDetailsRequest, action.id);
  yield put(fetchPokemonSuccess(result));
}
export default function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS_REQUESTED, fetchPokemons);
  yield takeEvery(FETCH_POKEMON_REQUESTED, fetchPokemon);
}
