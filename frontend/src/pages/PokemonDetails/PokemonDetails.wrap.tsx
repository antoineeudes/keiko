import { makeGetRequest } from 'services/networking/request';
import PokemonDetails, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';
import { connect } from 'react-redux';
import { fetchPokemonSuccess } from 'redux/Pokemon/actions';
import { PokemonsObject, PokemonCaracteristics } from 'pages/Home/Home';

async function fetchPokemonDetails(props: PokemonDetailsProps) {
  const response = await makeGetRequest(`/pokemon/${props.match.params.id}`);
  props.fetchPokemonSuccess(response.body);
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
    fetchPokemonSuccess: (pokemon: PokemonCaracteristics) => dispatch(fetchPokemonSuccess(pokemon)),
  };
};

export default connect(
  getPokemon,
  mapDispatchToProps,
)(PokemonDetailsContainer);
