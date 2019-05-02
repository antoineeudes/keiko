import * as React from 'react';

interface Props {
  name: string;
  id: number;
  type: string;
}

class Pokemon extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} - N°{this.props.id}
        </h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
          alt={this.props.name}
        />
        <div>Type {this.props.type}</div>
      </div>
    );
  }
}

export default Pokemon;
