import * as React from 'react';

interface Props {
  name: string;
  id: number;
  type: string;
}

class Pokemon extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.props.name} - N°{('00' + this.props.id).slice(-3)}
          </h1>
        </div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.props.id
            }.png`}
            alt={this.props.name}
          />
        </div>
        <div>Type {this.props.type}</div>
      </div>
    );
  }
}

export default Pokemon;
