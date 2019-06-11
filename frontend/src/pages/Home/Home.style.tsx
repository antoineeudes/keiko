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
Intro.displayName = 'displayName';

export const Header = styled.h1`
  font-size: 50px;
  margin: 30px;
`;
Header.displayName = 'Header';

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
Container.displayName = 'Container';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`;
Link.displayName = 'Link';

export const LeftArrow = styled.p`
  left: 20px;
  top: 100px;
  position: absolute;
  font-size: 50px;
`;

export const RightArrow = styled.p`
  right: 20px;
  top: 100px;
  position: absolute;
  font-size: 50px;
`;
