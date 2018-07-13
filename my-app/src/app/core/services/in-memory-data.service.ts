import { Injectable } from '@angular/core';
import { State } from '../../shared/enums/state.enum';
import { Item2 } from '../../shared/interfaces/item2';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const collection: Item2[] = [
      {
        id: 0,
        name: 'François',
        reference: '1234',
        state: State.ALIVRER,
        dateLivraison: new Date(20108, 7, 12)
      },
      {
        id: 1,
        name: 'Patricia',
        reference: '4512',
        state: State.ENCOURS,
        dateLivraison: new Date(20108, 7, 13)
      },
      {
        id: 2,
        name: 'Dom',
        reference: '1254',
        state: State.LIVREE,
        dateLivraison: new Date(20108, 7, 14)
      }
    ];
    return {collection};
  }
}
