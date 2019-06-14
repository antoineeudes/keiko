import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PokemonCaracteristics } from 'pages/Home/Home';
import { ImageRow, Header, Caracteristics } from './PokemonDetails.style';

type urlParams = { id: string };

export interface PokemonDetailsProps extends RouteComponentProps<urlParams> {
  pokemon: PokemonCaracteristics;
  fetchPokemonSuccess: any;
}

function PokemonDetails(props: PokemonDetailsProps) {
  const urlPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  return (
    <Fragment>
      <Header>{props.pokemon.name}</Header>
      <ImageRow>
        <img src={`${urlPrefix}/${props.pokemon.id}.png`} alt={`${props.pokemon.name}`} />
        <img src={`${urlPrefix}/back/${props.pokemon.id}.png`} alt={`${props.pokemon.name}-back`} />
      </ImageRow>
      <ImageRow>
        <img
          src={`${urlPrefix}/shiny/${props.pokemon.id}.png`}
          alt={`shiny-${props.pokemon.name}`}
        />
        <img
          src={`${urlPrefix}/back/shiny/${props.pokemon.id}.png`}
          alt={`back-shiny-${props.pokemon.name}`}
        />
      </ImageRow>
      <Caracteristics>
        <p>Height: {props.pokemon.height}</p>
        <p>Weight: {props.pokemon.weight}</p>
        <p>Id: {props.pokemon.id}</p>
      </Caracteristics>
    </Fragment>
  );
}

export default PokemonDetails;
