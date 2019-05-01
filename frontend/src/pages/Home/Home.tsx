import * as React from 'react';
import Pokemon from 'components/Pokemon';
import { makeGetRequest, makePostRequest } from '../../services/networking/request';

import Style from './Home.style';

interface Props {}

const listOfPokemonsToShow = [
  { id: 1, name: 'Bulbizarre', height: 3, weight: 4 },
  { id: 2, name: 'Herbizarre', height: 3, weight: 4 },
  { id: 3, name: 'Florizarre', height: 3, weight: 4 },
  { id: 4, name: 'Salamèche', height: 3, weight: 4 },
  { id: 5, name: 'Reptincel', height: 3, weight: 4 },
  { id: 6, name: 'Dracaufeu', height: 3, weight: 4 },
  { id: 7, name: 'Carapuce', height: 3, weight: 4 },
  { id: 8, name: 'Carabaffe', height: 3, weight: 4 },
  { id: 9, name: 'Tortank', height: 3, weight: 4 },
];

interface PokemonCaracteristics {
  id: number;
  name: string;
  height: number;
  weight: number;
}
interface State {
  pokemons: PokemonCaracteristics[];
}

interface ListItemProps {
  key: number;
  value: PokemonCaracteristics;
}

function ListItem(props: ListItemProps) {
  return (
    <li>
      <Pokemon name={props.value.name} id={props.value.id} />
    </li>
  );
}

function ListOfPokemons(props: State) {
  const PokemonList = props.pokemons;
  return (
    <ul>
      {PokemonList.map(pokemon => (
        <ListItem key={pokemon.id} value={pokemon} />
      ))}
    </ul>
  );
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    makeGetRequest('/pokemon')
      .then(response => {
        if (response.body.length === 0) {
          throw 'datablase empty';
        }
        this.setState({ pokemons: response.body });
      })
      .catch(() => {
        listOfPokemonsToShow.map(pokemon => {
          var data = {
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
          };
          makePostRequest('/pokemon', data);
        });
        this.setState({ pokemons: listOfPokemonsToShow });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        {this.state.pokemons.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          <ListOfPokemons pokemons={this.state.pokemons} />
        )}
      </Style.Intro>
    );
  }
}

export default Home;
