import React, { useState, useEffect } from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from 'services/networking/request';
import { Intro, Header, Link, Container } from './Home.style';
import Loader from 'components/Loader';

export interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}

function Home() {
  const [pokemons, setPokemons] = useState<PokemonCaracteristics[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchPokemons() {
    try {
      const response = await makeGetRequest('/pokemon');
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
        <Container>
          {pokemons.map(pokemon => (
            <Link to={`/pokemon/${pokemon.id}`} className="no-decoration" key={pokemon.id}>
              <Pokemon
                name={pokemon.name}
                id={pokemon.id}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            </Link>
          ))}
        </Container>
      )}
    </Intro>
  );
}
export default Home;
