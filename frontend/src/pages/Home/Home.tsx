import React, { useState, useEffect } from 'react';
// import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router-dom';
import { makeGetRequest } from 'services/networking/request';
// import { PageContainer, Header, Link, PokemonList } from './Home.style';
import HOC from 'HOC';

export interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}

type urlParams = { page: string };

interface HomeProps {
  pokemons: PokemonCaracteristics[];
  match: RouteComponentProps<urlParams>;
}

function Home({ match }: RouteComponentProps<urlParams>) {
  return <h1>Component Rendered</h1>;
}

// async function fetchPokemons(props: HomeProps) {
//   let page = 1;
//   if (props.match.params.page != undefined) {
//     page = Number(props.match.params.page);
//   }
//   return makeGetRequest(`/pokemon?page=${page}`);
// }

async function fetchPokemons({ match }: RouteComponentProps<urlParams>) {
  let page = 1;
  if (match.params.page != undefined) {
    page = Number(match.params.page);
  }
  return makeGetRequest(`/pokemon?page=${page}`);
}

const oneShouldCallEffect = (props: HomeProps) => [undefined];

const HomeWrap = HOC(fetchPokemons, oneShouldCallEffect)(Home);

export default HomeWrap;
