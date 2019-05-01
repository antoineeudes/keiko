import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    const pokemonId = 7;
    const pokeType = 'Eau';

    return (
      <Style.Intro>
        <div>
          <h1>
            {pokemon} - N°{('00' + pokemonId).slice(-3)}
          </h1>
        </div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt={pokemon}
          />
        </div>
        <div>Type {pokeType}</div>
      </Style.Intro>
    );
  }
}

export default Home;
