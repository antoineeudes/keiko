import * as React from 'react';
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

class Pokemon extends React.Component<Props> {
  render() {
    return (
      <Style.Card>
        <Style.Header>{this.props.name}</Style.Header>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt={this.props.name}
        />
        <p>
          Id: {this.props.id} <br />
          Weight: {this.props.weight / 10} kg <br />
          Height: {this.props.height * 10} cm
        </p>
      </Style.Card>
    );
  }
}

export default Pokemon;
