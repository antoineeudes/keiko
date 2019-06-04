import * as React from 'react';
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

function UppercaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Pokemon extends React.Component<Props> {
  render() {
    return (
      <Style.Card>
        <Style.Header>{UppercaseFirstLetter(this.props.name)}</Style.Header>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt={this.props.name}
        />
        <p>
          Id: {this.props.id} <br />
          Weight: {this.props.weight} kg <br />
          Height: {this.props.height} cm
        </p>
      </Style.Card>
    );
  }
}

export default Pokemon;
