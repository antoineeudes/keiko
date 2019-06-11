import React, { useState, useEffect } from 'react';
import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router-dom';
import { makeGetRequest } from 'services/networking/request';
import { Intro, Header, Link, Container, LeftArrow, RightArrow } from './Home.style';
import Loader from 'components/Loader';

export interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}

type urlParams = { page: string };

function Home({ match }: RouteComponentProps<urlParams>) {
  const [pokemons, setPokemons] = useState<PokemonCaracteristics[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const urlIcons = 'https://img.icons8.com/metro/50/000000/';
  let page = Number(match.params.page);
  if (match.params.page == undefined) {
    page = 1;
  } else {
    page = Number(match.params.page);
  }

  async function fetchPokemons() {
    try {
      const response = await makeGetRequest(`/pokemon?page=${page.toString()}`);
      setPokemons(response.body);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemons();
  });

  return (
    <Intro>
      <Header>Pokedex</Header>
      {error ? (
        <p>Une erreur est survenue</p>
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <LeftArrow>
            {page == 1 ? (
              <div />
            ) : (
              <Link
                to={`/pokedex/${(page - 1).toString()}`}
                onClick={() => {
                  setPokemons([]);
                  setLoading(true);
                }}
              >
                <img src={`${urlIcons}chevron-left.png`} width="30" />
              </Link>
            )}
          </LeftArrow>
          <RightArrow>
            {page == 6 ? (
              <div />
            ) : (
              <Link
                to={`/pokedex/${(page + 1).toString()}`}
                onClick={() => {
                  setPokemons([]);
                  setLoading(true);
                }}
              >
                <img src={`${urlIcons}chevron-right.png`} width="30" />
              </Link>
            )}
          </RightArrow>
          <Container>
            {pokemons.map(pokemon => (
              <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <Pokemon
                  name={pokemon.name}
                  id={pokemon.id}
                  weight={pokemon.weight}
                  height={pokemon.height}
                />
              </Link>
            ))}
          </Container>
        </div>
      )}
    </Intro>
  );
}

export default Home;
