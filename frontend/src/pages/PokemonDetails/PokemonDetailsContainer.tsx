import { makeGetRequest } from 'services/networking/request';
import PokemonDetailsWrap, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';

function fetchPokemonDetails(props: PokemonDetailsProps) {
  return makeGetRequest(`/pokemon/${props.match.params.id}`);
}

const PokemonDetailsShouldCallEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC('details', fetchPokemonDetails, PokemonDetailsShouldCallEffect)(
  PokemonDetailsWrap,
);

export default PokemonDetailsContainer;
