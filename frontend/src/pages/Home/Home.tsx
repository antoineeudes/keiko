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
        <Style.Header>Pokedex</Style.Header>
        {this.state.pokemons.length == 0 ? (
          <h1>Loading...</h1>
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
