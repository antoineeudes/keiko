import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Intro = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-family: 'PokemonGB';
`;

export const Header = styled.h1`
  font-size: 50px;
  margin: 30px;
`;

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`;

Link.displayName = 'Link';
Container.displayName = 'Container';
Header.displayName = 'Header';
Intro.displayName = 'displayName';
