import styled from 'styled-components';

export default {
  ImageRow: styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    font-family: 'PokemonGB';
    justify-content: space-between;
  `,
  Container: styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 20px;
    font-family: 'PokemonGB';
    text-align: center;
    justify-content: center;
  `,
  Header: styled.h1`
    font-size: 40px;
    text-transform: capitalize;
    margin-bottom: 10px;
  `,
  Caracteristics: styled.div`
    text-align: left;
    display: inline-block;
  `,
};
