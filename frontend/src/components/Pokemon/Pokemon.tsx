import * as React from 'react';
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render() {
    return (
      <Style.Card>
        <h1>
          {this.props.name} - N°{this.props.id}
        </h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt={this.props.name}
        />
      </Style.Card>
    );
  }
}

export default Pokemon;
