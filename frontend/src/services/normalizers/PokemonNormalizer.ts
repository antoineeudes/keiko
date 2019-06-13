import { PokemonsObject, PokemonCaracteristics } from 'pages/Home/Home';

export default function normalize(array: PokemonCaracteristics[]) {
  return array.reduce((obj: PokemonsObject, item: PokemonCaracteristics) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
