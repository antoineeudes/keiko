import { makeGetRequest } from 'services/networking/request';
import HOC from '../../HOC';
import HomeWrap, { HomeProps } from './HomeWrap';

function fetchPokemons(props: HomeProps) {
  let page = 1;
  if (props.match.params.page != undefined) {
    page = Number(props.match.params.page);
  }
  return makeGetRequest(`/pokemon?page=${page}`);
}

const HomeShouldCallEffect = (props: HomeProps) => [props.match.params.page];
const Home = HOC('pokemons', fetchPokemons, HomeShouldCallEffect)(HomeWrap);

export default Home;
