import { Component, OnInit } from '@angular/core';
import { Item2 } from '../../../shared/interfaces/item2';
import { Collection2Service } from '../../../core/services/collection2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reactive2',
  templateUrl: './add-reactive2.component.html',
  styleUrls: ['./add-reactive2.component.css']
})
export class AddReactive2Component implements OnInit {

  constructor(
    private collection2Service: Collection2Service,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(arg: Item2): void {
    this.collection2Service.add(arg);
    this.router.navigate(['/items/list2']);
  }

}
