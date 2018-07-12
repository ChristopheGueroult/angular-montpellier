import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public listStates = Object.values(State);
  public newItem: Item;
  constructor() { }

  ngOnInit() {
    this.initItem();
  }

  private initItem(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  public process(): void {
    console.log(this.newItem);
  }

}
