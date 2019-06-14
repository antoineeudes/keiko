import React from 'react';
import { fetchPokemonSuccess, fetchPokemonsSuccess } from '../actions';
import reducer from '../reducer';
import normalize from 'services/normalizers/PokemonNormalizer';
import { mount } from 'enzyme';
import { mapStateToProps, TestComponent } from 'pages/Home/Home';
import Home from 'pages/Home';

const initialState = {};
const pokemonsObj = { '1': { id: 1, name: 'bulbasaur', weight: 69, height: 7 } };
const pokemonCaracteristics = { id: 1, name: 'bulbasaur', weight: 69, height: 7 };
const pokemonCaracteristics2 = { id: 2, name: 'test', weight: 0, height: 10 };

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

describe('Pokemon normalizer', () => {
  it('Should return an object of objects from an array of objects', () => {
    const ObjectOfPokemons = normalize([pokemonCaracteristics, pokemonCaracteristics2]);
    const expectedObj = { '1': pokemonCaracteristics, '2': pokemonCaracteristics2 };
    expect(ObjectOfPokemons).toEqual(expectedObj);
  });
});

describe('Home selector', () => {
  it('should return home props from redux state', () => {
    const reduxState = { router: {}, pokemon: pokemonsObj, login: {} };
    const homeProps = { pokemons: Object.values(reduxState.pokemon) };
    const expectedObj = { pokemons: [pokemonCaracteristics] };
    expect(homeProps).toEqual(expectedObj);
  });
});
