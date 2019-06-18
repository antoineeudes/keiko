import request from 'superagent';
import { PokemonCaracteristics, PokemonsObject } from 'pages/Home/Home';

const backendBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const makeGetRequest = async (endpoint: string, data: {} | null = null) => {
  if (data === null) {
    return request.get(`${backendBaseUrl}${endpoint}`).set('Accept', 'application/json');
  }

  return request
    .get(`${backendBaseUrl}${endpoint}`)
    .query(data)
    .set('Accept', 'application/json');
};

export const makePostRequest = (endpoint: string, data: {}) =>
  request
    .post(`${backendBaseUrl}${endpoint}`)
    .send(data)
    .set('Accept', 'application/json');

export const makeLoginRequest = (endpoint: string, data: {}) =>
  request.post(`${backendBaseUrl}${endpoint}`).send(data);

export const fetchPokemonRequest = async (id: number) => {
  const response = await makeGetRequest(`/pokemon/${id}`);
  const pokemon: PokemonCaracteristics | undefined = response.body;
  return pokemon;
};

export const fetchPokemonsRequest = async (page: number) => {
  const response = await makeGetRequest(`/pokemon?page=${page}`);
  const pokemons: PokemonsObject | undefined = response.body;
  return pokemons;
};

export const login = async (endpoint: string, data: {}) => {
  const response = await makeLoginRequest(endpoint, data);
  const token: string | undefined = response.body.token || response.body.access;
  if (token) {
    localStorage.setItem('token', token);
  }
  return token;
};
