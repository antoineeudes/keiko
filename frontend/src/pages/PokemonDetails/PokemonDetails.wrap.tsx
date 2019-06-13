import { makeGetRequest } from 'services/networking/request';
import PokemonDetails, { PokemonDetailsProps } from './PokemonDetails';
import HOC from 'HOC/withDataFetching';

async function fetchPokemonDetails(props: PokemonDetailsProps) {
  const response = await makeGetRequest(`/pokemon/${props.match.params.id}`);
  return response.body;
}

const shouldCallPokemonDetailsEffect = (props: PokemonDetailsProps) => [props.match.params.id];

const PokemonDetailsContainer = HOC('details', fetchPokemonDetails, shouldCallPokemonDetailsEffect)(
  PokemonDetails,
);

export default PokemonDetailsContainer;
