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
          <ul>
            {this.state.pokemons.map(pokemon => (
              <li>
                <Pokemon name={pokemon.name} id={pokemon.id} />
              </li>
            ))}
          </ul>
        )}
      </Style.Intro>
    );
  }
}

export default Home;
