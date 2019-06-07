import React, { useState, useEffect } from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
import Style from './Home.style';
import loader from '../../loader.svg';

interface PokemonCaracteristics {
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
    <Style.Intro>
      <Style.Header>Pokedex</Style.Header>
      {error ? (
        <p>Une erreur est survenue</p>
      ) : loading ? (
        <img src={loader} alt="loader" width="200" />
      ) : (
        <Style.Container>
          {pokemons.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          ))}
        </Style.Container>
      )}
    </Style.Intro>
  );
}

export default Home;
