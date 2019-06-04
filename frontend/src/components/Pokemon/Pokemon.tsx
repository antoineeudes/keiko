import * as React from 'react';
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

function jsUcfirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Pokemon extends React.Component<Props> {
  render() {
    return (
      <Style.Card>
        <h1>{jsUcfirst(this.props.name)}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt={this.props.name}
        />
        <p>Id: {this.props.id}</p>
        <p>
          Weight: <b>{this.props.weight}</b> kg
        </p>
        <p>
          Height: <b>{this.props.height}</b> cm
        </p>
      </Style.Card>
    );
  }
}

export default Pokemon;
