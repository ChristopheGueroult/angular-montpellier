import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public collection$: Observable<Item[]>;
  constructor(
    private collectionService: CollectionService,
  ) { }

  ngOnInit() {
    this.collection$ = this.collectionService.collection;
  }
}
