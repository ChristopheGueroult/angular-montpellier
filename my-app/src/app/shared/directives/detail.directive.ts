import { Directive, HostListener, Input } from '@angular/core';
import { Item } from '../interfaces/item';
import { ItemService } from '../../core/services/item.service';

@Directive({
  selector: '[appDetail]'
})
export class DetailDirective {
  @Input() appDetail: Item;
  constructor(
    private detailService: ItemService
  ) { }

  @HostListener('mouseover') onHover() {
    this.detailService.item$.next(this.appDetail);
  }

}
