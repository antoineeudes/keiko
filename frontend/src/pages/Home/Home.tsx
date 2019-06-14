import React, { Fragment } from 'react';
import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Link, PokemonList } from './Home.style';

export interface PokemonsObject {
  [id: string]: PokemonCaracteristics;
}

export interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}

type urlParams = { page: string };

export interface HomeProps extends RouteComponentProps<urlParams> {
  pokemons: PokemonCaracteristics[];
  fetchPokemonsSuccess: any;
}

export default function Home(props: HomeProps) {
  let page = 1;
  if (props.match.params.page != undefined) {
    page = Number(props.match.params.page);
  }
  console.log(props.pokemons);
  return (
    <Fragment>
      <Header>
        {page > 1 ? <Link to={`/pokedex/${page - 1}`}>&lsaquo;</Link> : <div />}
        <h1>Pokedex</h1>
        {page < 6 ? <Link to={`/pokedex/${page + 1}`}>&rsaquo;</Link> : <div />}
      </Header>

      <PokemonList>
        {props.pokemons.map(pokemon => (
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
    </Fragment>
  );
}
