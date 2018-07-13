import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../../shared/interfaces/item';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _item$: Subject<Item> = new Subject();
  constructor() {
  }

  public get item$(): Subject<Item> {
    return this._item$;
  }

  public set item$(item: Subject<Item>) {
    this._item$ = item;
  }

  public getItem() {
    return this.item$.subscribe((data) => {
      return data;
    });
  }
}
