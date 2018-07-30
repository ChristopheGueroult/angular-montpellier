import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';
import { Subject } from 'rxjs';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { tap } from 'rxjs/Operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public item: Item;
  constructor(
    private itemService: ItemService,
  ) {
  }

  ngOnInit() {
    // ici double souscription si on fait pas de unsubscribe
    // this.itemService.item$.subscribe((data) => {
    //   this.item = data;
    //   console.log(this.item);
    // });
    this.item = this.itemService.item$.value;
  }

  public update(): void {

  }

}
