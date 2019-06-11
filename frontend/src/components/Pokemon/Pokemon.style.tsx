import styled from 'styled-components';

export const Card = styled.div`
  border: thick double;
  font-size: 15px;
  font-family: 'PokemonGB';
  text-align: center;
  padding: 10px;
  margin: 10px;
  position: relative;
  height: 175px;
  width: 250px;
`;
Card.displayName = 'Card';

export const Header = styled.h1`
  margin-top: 5px;
  font-size: 20px;
  text-transform: capitalize;
`;
Header.displayName = 'Header';

export const TurnIco = styled.img`
  position: absolute;
  top: 2px;
  right: 2px;
`;
TurnIco.displayName = 'TurnIco';
