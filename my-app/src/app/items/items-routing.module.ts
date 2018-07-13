import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';
import { AddReactive2Component } from './containers/add-reactive2/add-reactive2.component';
import { ListComponent } from './containers/list/list.component';
import { List2Component } from './containers/list2/list2.component';
import { EditComponent } from './containers/edit/edit.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-reactive', component: AddReactiveComponent },
  { path: 'add-reactive2', component: AddReactive2Component },
  { path: 'list2', component: List2Component },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
