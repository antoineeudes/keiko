import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PokemonCaracteristics, PokemonsObject } from 'pages/Home/Home';
import { ImageRow, Header, Caracteristics } from './PokemonDetails.style';

type urlParams = { id: string };

export interface PokemonDetailsProps extends RouteComponentProps<urlParams> {
  details: PokemonsObject;
  fetchPokemonSuccess: any;
}

function PokemonDetails(props: PokemonDetailsProps) {
  const urlPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const pokemon = props.details[0];
  return (
    <Fragment>
      <Header>{pokemon.name}</Header>
      <ImageRow>
        <img src={`${urlPrefix}/${pokemon.id}.png`} alt={`${pokemon.name}`} />
        <img src={`${urlPrefix}/back/${pokemon.id}.png`} alt={`${pokemon.name}-back`} />
      </ImageRow>
      <ImageRow>
        <img src={`${urlPrefix}/shiny/${pokemon.id}.png`} alt={`shiny-${pokemon.name}`} />
        <img src={`${urlPrefix}/back/shiny/${pokemon.id}.png`} alt={`back-shiny-${pokemon.name}`} />
      </ImageRow>
      <Caracteristics>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Id: {pokemon.id}</p>
      </Caracteristics>
    </Fragment>
  );
}

export default PokemonDetails;
