import { makeGetRequest } from 'services/networking/request';
import PokemonDetails, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';

function fetchPokemonDetails(props: PokemonDetailsProps) {
  return makeGetRequest(`/pokemon/${props.match.params.id}`);
}

const shouldCallPokemonDetailsEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC('details', fetchPokemonDetails, shouldCallPokemonDetailsEffect)(
  PokemonDetails,
);

export default PokemonDetailsContainer;
