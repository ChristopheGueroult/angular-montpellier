import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';

import { CollectionService } from '../../../core/services/collection.service';
import { ItemService } from '../../../core/services/item.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() item: Item;
  public item$: BehaviorSubject<Item>;
  public state = State;
  public states = Object.values(State);
  private sub: Subscription;
  constructor(
    private collectionService: CollectionService,
    private itemService: ItemService,
    private router: Router,
  ) { }

  ngOnInit() {
    // when use on home component, @Input() item doesnt exist
    if (!this.item) {
      // console.log(this.item);
      this.item$ = this.itemService.item$;
    }
  }

  public changeState(etat: State, item: Item): void {
    item.state = etat;
    console.log(item.id, item);
    this.collectionService.update(item);
  }

  public delete(item: Item) {
    this.collectionService.delete(item);
  }

  public edit(item: Item): void {
    this.itemService.item$.next(item);
    this.router.navigate(['/items/edit']);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
