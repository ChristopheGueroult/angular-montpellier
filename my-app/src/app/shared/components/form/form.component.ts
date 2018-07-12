import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() newCmd: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.initItem();
  }

  private initItem(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      dateLivraison: new Date()
    };
  }

  public process(): void {
    this.newCmd.emit(this.newItem);
    this.initItem();
  }

}
