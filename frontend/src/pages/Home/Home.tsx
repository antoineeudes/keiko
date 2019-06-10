import React, { useState, useEffect } from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
import Style from './Home.style';
import loader from '../../loader.svg';
import PokemonCaracteristics from '../../PokemonCaracteristics';
import { Link } from 'react-router-dom';
import './Link.css';

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
            <Link to={`/pokemon/${pokemon.id}`} className="no-decoration" key={pokemon.id}>
              <Pokemon
                name={pokemon.name}
                id={pokemon.id}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            </Link>
          ))}
        </Style.Container>
      )}
    </Style.Intro>
  );
}

export default Home;
