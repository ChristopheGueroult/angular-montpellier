import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';
import { Subject } from 'rxjs';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public item$: Subject<Item>;
  constructor(
    public itemService: ItemService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.item$ = this.itemService.item$;
  }

  public update(): void {

  }

}
