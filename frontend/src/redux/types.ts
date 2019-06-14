import { LoginAction, LoginState } from './Login';
import { PokemonsObject } from 'pages/Home/Home';

export type RootState = Readonly<{
  login: LoginState;
  pokemon: PokemonsObject;
}>;
export type RootAction = LoginAction;
