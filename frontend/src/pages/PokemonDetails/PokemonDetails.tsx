import { makeGetRequest } from 'services/networking/request';
import PokemonDetailsWrap, { PokemonDetailsProps } from './PokemonDetails.wrap';
import HOC from '../../HOC';

function fetchPokemonDetails(props: PokemonDetailsProps) {
  return makeGetRequest(`/pokemon/${props.match.params.id}`);
}

const PokemonDetailsShouldCallEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetails = HOC('details', fetchPokemonDetails, PokemonDetailsShouldCallEffect)(
  PokemonDetailsWrap,
);

export default PokemonDetails;
