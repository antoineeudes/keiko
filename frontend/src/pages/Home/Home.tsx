import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
import Style from './Home.style';
import Grid from '@material-ui/core/Grid';
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

  componentDidMount() {
    makeGetRequest('/pokemon')
      .then(response => this.setState({ pokemons: response.body, loading: false }))
      .catch(() => this.setState({ error: true, loading: false }));
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
          <Grid container>
            {this.state.pokemons.map(pokemon => (
              <Grid item md={3} xs={6} key={pokemon.id}>
                <Pokemon
                  name={pokemon.name}
                  id={pokemon.id}
                  weight={pokemon.weight}
                  height={pokemon.height}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Style.Intro>
    );
  }
}

export default Home;
