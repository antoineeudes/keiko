import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonCaracteristics from '../../PokemonCaracteristics';
import { makeGetRequest } from 'services/networking/request';
import loader from '../../loader.svg';
import Style from './DetailedCard.style';

type urlParams = { id: string };

function DetailedCard({ match }: RouteComponentProps<urlParams>) {
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
    <Style.Container>
      {error ? (
        <p>Une erreur est survenue</p>
      ) : loading ? (
        <img src={loader} alt="loader" width="200" />
      ) : (
        <div>
          <Style.Header>{details.name}</Style.Header>
          <Style.ImageRow>
            <img src={`${urlPrefix}/${details.id}.png`} alt={`${details.name}`} />
            <img src={`${urlPrefix}/back/${details.id}.png`} alt={`${details.name}-back`} />
          </Style.ImageRow>
          <Style.Caracteristics>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
            <p>Id: {details.id}</p>
          </Style.Caracteristics>
        </div>
      )}
    </Style.Container>
  );
}

export default DetailedCard;
