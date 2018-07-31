import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../../shared/interfaces/item';
import { CollectionService } from './collection.service';
import { tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _item$: BehaviorSubject<Item> = new BehaviorSubject(null);
  // private _item$: Subject<Item> = new Subject();
  constructor(
    private collectionService: CollectionService
  ) {
  }

  public get item$(): BehaviorSubject<Item> {
    return this._item$;
  }

  public set item$(item: BehaviorSubject<Item>) {
    this._item$ = item;
  }

}
