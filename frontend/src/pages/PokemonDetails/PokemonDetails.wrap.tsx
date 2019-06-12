import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PokemonCaracteristics } from 'src/pages/Home/HomeWrap';
import { ImageRow, Header, Caracteristics } from './PokemonDetails.style';

type urlParams = { id: string };

export interface PokemonDetailsProps extends RouteComponentProps<urlParams> {
  details: PokemonCaracteristics;
}

function PokemonDetailsWrap(props: PokemonDetailsProps) {
  const urlPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  return (
    <Fragment>
      <Header>{props.details.name}</Header>
      <ImageRow>
        <img src={`${urlPrefix}/${props.details.id}.png`} alt={`${props.details.name}`} />
        <img src={`${urlPrefix}/back/${props.details.id}.png`} alt={`${props.details.name}-back`} />
      </ImageRow>
      <ImageRow>
        <img
          src={`${urlPrefix}/shiny/${props.details.id}.png`}
          alt={`shiny-${props.details.name}`}
        />
        <img
          src={`${urlPrefix}/back/shiny/${props.details.id}.png`}
          alt={`back-shiny-${props.details.name}`}
        />
      </ImageRow>
      <Caracteristics>
        <p>Height: {props.details.height}</p>
        <p>Weight: {props.details.weight}</p>
        <p>Id: {props.details.id}</p>
      </Caracteristics>
    </Fragment>
  );
}

export default PokemonDetailsWrap;
