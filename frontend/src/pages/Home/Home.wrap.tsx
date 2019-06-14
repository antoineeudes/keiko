import { makeGetRequest } from 'services/networking/request';
import HOC from 'HOC/withDataFetching';
import Home, { HomeProps, PokemonsObject } from './Home';
import { connect } from 'react-redux';
import { fetchPokemonsSuccess } from 'redux/Pokemon/actions';
import normalize from 'services/normalizers/PokemonNormalizer';

async function fetchPokemons(props: HomeProps) {
  let page = 1;
  if (props.match.params.page != undefined) {
    page = Number(props.match.params.page);
  }
  const response = await makeGetRequest(`/pokemon?page=${page}`);
  props.fetchPokemonsSuccess(normalize(response.body));
}

const shouldCallHomeEffect = (props: HomeProps) => [props.match.params.page];
const HomeContainer = HOC('pokemons', fetchPokemons, shouldCallHomeEffect)(Home);

function mapStateToProps(state: Readonly<PokemonsObject>) {
  return { pokemons: Object.values(state.pokemon) };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPokemonsSuccess: (pokemon: PokemonsObject) => dispatch(fetchPokemonsSuccess(pokemon)),
  };
};

const HomeWrap = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
export default HomeWrap;
