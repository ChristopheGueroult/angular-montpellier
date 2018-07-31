import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailDirective } from './directives/detail.directive';
import { ItemComponent } from './components/item/item.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent, ReactiveFormComponent, DetailComponent, DetailDirective, ItemComponent],
  exports: [NavComponent, StateDirective, FormComponent, ReactiveFormComponent, DetailComponent, DetailDirective, ItemComponent]
})
export class SharedModule { }
