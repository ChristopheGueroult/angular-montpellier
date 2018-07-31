import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { ItemService } from '../../core/services/item.service';

@Directive({
  selector: '[appDetail]'
})
export class DetailDirective implements OnInit  {
  @Input() appDetail: Item;
  constructor(
    private itemService: ItemService
  ) {
  }

  @HostListener('mouseover') onHover() {
    this.itemService.item$.next(this.appDetail);
  }

  ngOnInit() {
    if (!this.itemService.item$.value) {
      // la première fois qu'on charge tabComponent, si item$ est null, on l'initialise
      // pour afficher la premier item par defaut sur la home
      this.itemService.item$.next(this.appDetail);
    }
  }

}
