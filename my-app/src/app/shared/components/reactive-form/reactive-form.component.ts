import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { State } from '../../enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../interfaces/item';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public listStates = Object.values(State);
  public form: FormGroup;
  @Output() newCmd: EventEmitter<Item> = new EventEmitter();
  @Input() item: Item;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public process(): void {
    this.newCmd.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  private createForm() {
    // console.log(this.item);
    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER,
      dateLivraison: [
        this.item ? this.item.dateLivraison : new Date(),
        Validators.required
      ]
    });
  }

  public isError(fieldName: string): Boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
