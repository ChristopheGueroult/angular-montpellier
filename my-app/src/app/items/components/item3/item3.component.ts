import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  constructor(
    private is: ItemService
  ) { }

  ngOnInit() {
    console.log(this.is.item$.value);
  }

}
