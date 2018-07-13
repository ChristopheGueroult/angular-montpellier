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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListComponent, ItemComponent, AddComponent, AddReactiveComponent, Item2Component, List2Component, AddReactive2Component, EditComponent]
})
export class ItemsModule { }
