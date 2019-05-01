import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest, makePostRequest } from '../../services/networking/request';

import Style from './Home.style';

interface Props {}

interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}
interface State {
  pokemons: PokemonCaracteristics[];
}

interface ListItemProps {
  key: number;
  value: PokemonCaracteristics;
}

function ListItem(props: ListItemProps) {
  return (
    <li>
      <Pokemon name={props.value.name} id={props.value.id} />
    </li>
  );
}

function ListOfPokemons(props: State) {
  const PokemonList = props.pokemons;
  return (
    <ul>
      {PokemonList.map(pokemon => (
        <ListItem key={pokemon.id} value={pokemon} />
      ))}
    </ul>
  );
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    makeGetRequest('/pokemon')
      .then(response => {
        if (response.body.length === 0) {
          throw 'datablase empty';
        }
        this.setState({ pokemons: response.body });
      })
      .catch(() => {
        const data = {
          name: 'Bulbizarre',
          height: 1,
          weight: 2,
        };
        makePostRequest('/pokemon', data)
          .then(() => makeGetRequest('/pokemon'))
          .then(response => this.setState({ pokemons: response.body }));
      });
  }

  render(): React.ReactNode {
    const pokemonsItems = this.state.pokemons.map(pokemon => (
      <li key={pokemon.id}>
        <Pokemon name={pokemon.name} id={pokemon.id} />
      </li>
    ));
    return (
      <Style.Intro>
        <Pokemon name="Carapuce" id={7} />
        <Pokemon name="Carabaffe" id={8} />
        <Pokemon name="Tortank" id={9} />
        {this.state.pokemons.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          <ListOfPokemons pokemons={this.state.pokemons} />
        )}
      </Style.Intro>
    );
  }
}

export default Home;
