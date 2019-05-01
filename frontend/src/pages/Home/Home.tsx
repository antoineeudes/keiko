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
        <Pokemon name="Carapuce" id={7} type="Eau" />
        <Pokemon name="Bulbuzarre" id={1} type="Plante/Poison" />
        <Pokemon name="Salamèche" id={4} type="Feu" />
      </Style.Intro>
    );
  }
}

export default Home;
