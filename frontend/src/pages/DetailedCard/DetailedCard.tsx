import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type urlParams = { id: string };

function DetailedCard({ match }: RouteComponentProps<urlParams>) {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default DetailedCard;
