import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {
  val: any;

  constructor(
    private is: ItemService
  ) { }

  ngOnInit() {
    console.log(this.is.item$.value);
    this.val = this.is.item$;
  }

}
