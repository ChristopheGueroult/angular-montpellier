import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../../shared/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _item$: BehaviorSubject<Item> = new BehaviorSubject(null);
  // private _item$: Subject<Item> = new Subject();
  constructor() {
  }

  public get item$(): BehaviorSubject<Item> {
    return this._item$;
  }

  public set item$(item: BehaviorSubject<Item>) {
    this._item$ = item;
  }
}
