import { State } from '../enums/state.enum';

export interface Item2 {
  id: number;
  name: string;
  reference: string;
  state: State;
  dateLivraison: Date;
}
