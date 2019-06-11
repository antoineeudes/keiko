import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PokemonCaracteristics } from 'src/pages/Home/Home';
import { makeGetRequest } from 'services/networking/request';
import { Container, ImageRow, Header, Caracteristics } from './PokemonDetails.style';
import Loader from 'components/Loader';

type urlParams = { id: string };

function PokemonDetails({ match }: RouteComponentProps<urlParams>) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<PokemonCaracteristics>({
    id: 0,
    name: '',
    weight: 0,
    height: 0,
  });
  const urlPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  async function fetchPokemonDetails(id: string) {
    try {
      const response = await makeGetRequest(`/pokemon/${id}`);
      setDetails(response.body);
      setLoading(false);
    } catch {
      setError(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonDetails(match.params.id);
  });

  return (
    <Container>
      {error ? (
        <p>Une erreur est survenue</p>
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <Header>{details.name}</Header>
          <ImageRow>
            <img src={`${urlPrefix}/${details.id}.png`} alt={`${details.name}`} />
            <img src={`${urlPrefix}/back/${details.id}.png`} alt={`${details.name}-back`} />
          </ImageRow>
          <ImageRow>
            <img src={`${urlPrefix}/shiny/${details.id}.png`} alt={`shiny-${details.name}`} />
            <img
              src={`${urlPrefix}/back/shiny/${details.id}.png`}
              alt={`back-shiny-${details.name}`}
            />
          </ImageRow>
          <Caracteristics>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
            <p>Id: {details.id}</p>
          </Caracteristics>
        </div>
      )}
    </Container>
  );
}

export default PokemonDetails;
