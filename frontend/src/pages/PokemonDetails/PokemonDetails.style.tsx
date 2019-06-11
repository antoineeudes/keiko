import styled from 'styled-components';

export const ImageRow = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin: 20px;
  font-family: 'PokemonGB';
  justify-content: space-between;
`;
ImageRow.displayName = 'ImageRow';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 20px;
  font-family: 'PokemonGB';
  text-align: center;
  justify-content: center;
`;
Container.displayName = 'Container';

export const Header = styled.h1`
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
Header.displayName = 'Header';

export const Caracteristics = styled.div`
  text-align: left;
  display: inline-block;
`;
Caracteristics.displayName = 'Caracteristics';
