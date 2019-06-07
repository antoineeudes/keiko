import * as React from 'react';
import Style from './Pokemon.style';
import turnIco from '../../turn-ico.svg';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

const Pokemon = (props: Props) => (
  <Style.Card>
    <Style.TurnIco src={turnIco} alt="turn-ico" />
    <Style.Header>{props.name}</Style.Header>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        props.id
      }.png`}
      alt={props.name}
    />
    <p>
      Id: {props.id} <br />
      Weight: {props.weight / 10} kg <br />
      Height: {props.height * 10} cm
    </p>
  </Style.Card>
);
export default Pokemon;
