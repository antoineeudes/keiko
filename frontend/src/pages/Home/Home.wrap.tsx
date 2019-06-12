import { makeGetRequest } from 'services/networking/request';
import HOC from 'HOC/withDataFetching';
import HomeWrap, { HomeProps } from './Home';

function fetchPokemons(props: HomeProps) {
  let page = 1;
  if (props.match.params.page != undefined) {
    page = Number(props.match.params.page);
  }
  return makeGetRequest(`/pokemon?page=${page}`);
}

const shouldCallHomeEffect = (props: HomeProps) => [props.match.params.page];
const HomeContainer = HOC('pokemons', fetchPokemons, shouldCallHomeEffect)(HomeWrap);

export default HomeContainer;
