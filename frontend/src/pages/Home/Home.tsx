import React, { useState, useEffect } from 'react';
import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router-dom';
import { makeGetRequest } from 'services/networking/request';
import { PageContainer, Header, Link, PokemonList } from './Home.style';
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
  let page = 1;
  if (match.params.page != undefined) {
    page = Number(match.params.page);
  }

  async function fetchPokemons() {
    try {
      setLoading(true);
      const response = await makeGetRequest(`/pokemon?page=${page}`);
      setPokemons(response.body);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(
    () => {
      fetchPokemons();
    },
    [match.params.page],
  );

  return (
    <PageContainer>
      <Header>
        {!error && !loading && page > 1 ? (
          <Link to={`/pokedex/${page - 1}`}>&lsaquo;</Link>
        ) : (
          <div />
        )}
        <h1>Pokedex</h1>
        {!error && !loading && page < 6 ? (
          <Link to={`/pokedex/${page + 1}`}>&rsaquo;</Link>
        ) : (
          <div />
        )}
      </Header>
      {error ? (
        <p>Une erreur est survenue</p>
      ) : loading ? (
        <Loader />
      ) : (
        <PokemonList>
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
        </PokemonList>
      )}
    </PageContainer>
  );
}

export default Home;
