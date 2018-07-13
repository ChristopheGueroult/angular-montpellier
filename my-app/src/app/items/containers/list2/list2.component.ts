import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item2 } from '../../../shared/interfaces/item2';
import { Collection2Service } from '../../../core/services/collection2.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  public collection2: Observable<Item2[]>;
  constructor(private collection2Service: Collection2Service) { }

  ngOnInit() {
    this.collection2 = this.collection2Service.collection;
  }

}
