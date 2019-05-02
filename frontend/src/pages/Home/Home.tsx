import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
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
    makeGetRequest('/pokemon').then(response => this.setState({ pokemons: response.body }));
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
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
