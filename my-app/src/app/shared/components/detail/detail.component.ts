import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../../interfaces/item';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public item$: Subject<Item>;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.item$ = this.itemService.item$;

  }

}
