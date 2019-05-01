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
        console.assert(response.body.length == 0);
        this.setState({ pokemons: response.body });
      })
      .catch(() => {
        console.log('no result');
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
    return (
      <Style.Intro>
        <Pokemon name="Carapuce" id={7} />
        <Pokemon name="Carabaffe" id={8} />
        <Pokemon name="Tortank" id={9} />
        {this.state.pokemons.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          <Pokemon name={this.state.pokemons[0].name} id={this.state.pokemons[0].id} />
        )}
      </Style.Intro>
    );
  }
}

export default Home;
