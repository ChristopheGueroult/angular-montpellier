import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent, ReactiveFormComponent],
  exports: [NavComponent, StateDirective, FormComponent, ReactiveFormComponent]
})
export class SharedModule { }
