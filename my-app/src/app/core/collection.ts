import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'François',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Patricia',
    reference: '4512',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Dom',
    reference: '1254',
    state: State.LIVREE
  }
];
