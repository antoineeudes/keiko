import React, { useState } from 'react';
import { TurnIco, Card, Header } from './Pokemon.style';
import turnIco from 'turn-ico.svg';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

function Pokemon(props: Props) {
  const [turned, setTurned] = useState(false);
  const urlPrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  return (
    <Card>
      <TurnIco
        src={turnIco}
        alt="turn-ico"
        onClick={event => {
          event.preventDefault();
          setTurned(!turned);
        }}
      />
      <Header>{props.name}</Header>
      <img src={`${urlPrefix}${turned ? '/back/' : '/'}${props.id}.png`} alt={props.name} />
      <p>Id: {props.id}</p>
      <p>Weight: {props.weight / 10} kg</p>
      <p>Height: {props.height * 10} cm</p>
    </Card>
  );
}

export default Pokemon;
