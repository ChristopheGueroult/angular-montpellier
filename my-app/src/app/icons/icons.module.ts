import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faPenSquare, faTrashAlt);

@NgModule({
  imports: [
    FontAwesomeModule
  ],
  exports: [FontAwesomeModule]
})
export class IconsModule { }
