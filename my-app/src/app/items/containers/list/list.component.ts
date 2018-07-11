import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';

import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public collection: Item[];
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }

}
