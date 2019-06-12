import { makeGetRequest } from 'services/networking/request';
import PokemonDetailsWrap, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';

function fetchPokemonDetails(props: PokemonDetailsProps) {
  return makeGetRequest(`/pokemon/${props.match.params.id}`);
}

const shouldCallPokemonDetailsEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC('details', fetchPokemonDetails, shouldCallPokemonDetailsEffect)(
  PokemonDetailsWrap,
);

export default PokemonDetailsContainer;
