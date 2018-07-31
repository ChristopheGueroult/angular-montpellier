import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    console.log(new Date(2018, 7, 12));
  }

}
