import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';

import { Item } from '../../../shared/interfaces/item';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public collection: Observable<Item[]>;
  // public collection: Item[];
  // private sub: Subscription;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
    // this.sub = this.collectionService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
