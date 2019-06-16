import PokemonDetails, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';
import { connect } from 'react-redux';
import { fetchPokemonRequested } from 'redux/Pokemon/actions';
import { PokemonsObject } from 'pages/Home/Home';

function fetchPokemonDetails(props: PokemonDetailsProps) {
  props.fetchPokemonRequested(props.match.params.id);
}

const shouldCallPokemonDetailsEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC(fetchPokemonDetails, shouldCallPokemonDetailsEffect)(
  PokemonDetails,
);

function getPokemon(state: Readonly<PokemonsObject>) {
  return { pokemon: Object.values(state.pokemon)[0] };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPokemonRequested: (id: number) => dispatch(fetchPokemonRequested(id)),
  };
};

export default connect(
  getPokemon,
  mapDispatchToProps,
)(PokemonDetailsContainer);
