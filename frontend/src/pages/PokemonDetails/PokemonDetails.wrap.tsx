import { makeGetRequest } from 'services/networking/request';
import PokemonDetails, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';
import { connect } from 'react-redux';
import { fetchPokemonSuccess } from 'redux/Pokemon/actions';
import { PokemonsObject } from 'pages/Home/Home';
import normalize from 'services/normalizers/PokemonNormalizer';

async function fetchPokemonDetails(props: PokemonDetailsProps) {
  const response = await makeGetRequest(`/pokemon/${props.match.params.id}`);
  console.log(normalize([response.body]));
  props.fetchPokemonSuccess(normalize([response.body]));
}

const shouldCallPokemonDetailsEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC('details', fetchPokemonDetails, shouldCallPokemonDetailsEffect)(
  PokemonDetails,
);

function getPokemon(state: Readonly<PokemonsObject>) {
  return { details: Object.values(state.pokemon) };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPokemonSuccess: (pokemon: PokemonsObject) =>
      dispatch(fetchPokemonSuccess({ pokemon: pokemon })),
  };
};

export default connect<{}, {}, {}, PokemonDetailsProps>(
  getPokemon,
  mapDispatchToProps,
)(PokemonDetailsContainer);
