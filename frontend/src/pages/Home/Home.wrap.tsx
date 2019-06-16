import HOC from 'HOC/withDataFetching';
import Home, { HomeProps, PokemonsObject } from './Home';
import { connect } from 'react-redux';
import { fetchPokemonsRequested } from 'redux/Pokemon/actions';

function fetchPokemons(props: HomeProps) {
  let page = 1;
  if (props.match.params.page != undefined) {
    page = Number(props.match.params.page);
  }
  props.fetchPokemonsRequested(page);
}

const shouldCallHomeEffect = (props: HomeProps) => [props.match.params.page];
const HomeContainer = HOC(fetchPokemons, shouldCallHomeEffect)(Home);

function mapStateToProps(state: Readonly<PokemonsObject>) {
  return { pokemons: Object.values(state.pokemon) };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPokemonsRequested: (page: number) => dispatch(fetchPokemonsRequested(page)),
  };
};

const HomeWrap = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
export default HomeWrap;
