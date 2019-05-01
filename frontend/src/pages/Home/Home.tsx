import * as React from 'react';
import Pokemon from 'components/Pokemon';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    const pokemonId = 7;
    const pokeType = 'Eau';

    return (
      <Style.Intro>
        <Pokemon name={pokemon} id={pokemonId} type={pokeType} />
      </Style.Intro>
    );
  }
}

export default Home;
