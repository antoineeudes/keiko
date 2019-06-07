import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
import Style from './Home.style';
import loader from '../../loader.svg';

interface Props {}

interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}
interface State {
  pokemons: PokemonCaracteristics[];
  loading: boolean;
  error: boolean;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pokemons: [],
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const response = await makeGetRequest('/pokemon');
      this.setState({ pokemons: response.body, loading: false });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <Style.Header>Pokedex</Style.Header>
        {this.state.error ? (
          <p>Une erreur est survenue</p>
        ) : this.state.loading ? (
          <img src={loader} alt="loader" width="200" />
        ) : (
          <Style.Container>
            {this.state.pokemons.map(pokemon => (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            ))}
          </Style.Container>
        )}
      </Style.Intro>
    );
  }
}

export default Home;
