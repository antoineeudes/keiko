import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest } from '../../services/networking/request';
import Style from './Home.style';
import Grid from '@material-ui/core/Grid';

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
      .catch(_ => this.setState({ error: true }));
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <Style.Header>Pokedex</Style.Header>
        {this.state.error ? (
          <h1>Une erreur est survenue</h1>
        ) : this.state.loading ? (
          <Style.Loader />
        ) : (
          <Grid container>
            {this.state.pokemons.map(pokemon => (
              <Grid item md={3} xs={6}>
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
