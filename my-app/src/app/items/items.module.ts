import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './containers/list/list.component';
import { AddComponent } from './containers/add/add.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';
import { Item2Component } from './components/item2/item2.component';
import { List2Component } from './containers/list2/list2.component';
import { AddReactive2Component } from './containers/add-reactive2/add-reactive2.component';
import { EditComponent } from './containers/edit/edit.component';
import { Item1Component } from './components/item1/item1.component';
import { Item3Component } from './components/item3/item3.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [ListComponent, ItemComponent, AddComponent, AddReactiveComponent, Item2Component, List2Component, AddReactive2Component, EditComponent, Item1Component, Item3Component]
})
export class ItemsModule { }
