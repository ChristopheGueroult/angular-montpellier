import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';

import { CollectionService } from '../../../core/services/collection.service';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  constructor(
    private collectionService: CollectionService,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public changeState(etat: State): void {
    this.item.state = etat;
    this.collectionService.update(this.item);
  }

  public delete() {
    this.collectionService.delete(this.item);
  }

  public edit(): void {
    this.itemService.item$.next(this.item);
    // this.router.navigate(['/items/edit']);
  }

}
