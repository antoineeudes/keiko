import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const PageContainer = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 95%;
  margin: auto;
  padding: 30px;
  font-family: 'PokemonGB';
`;
PageContainer.displayName = 'PageContainer';

export const Header = styled.div`
  padding-bottom: 10px;
  font-size: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
Header.displayName = 'Header';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`;
Link.displayName = 'Link';

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
PokemonList.displayName = 'PokemonList';
