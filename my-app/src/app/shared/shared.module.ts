import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent],
  exports: [NavComponent, StateDirective, FormComponent]
})
export class SharedModule { }
