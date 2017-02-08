import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideColumnComponent } from './side-column/side-column.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SideColumnComponent
  ],
  entryComponents: [
    // While functioning as a hybrid app all migrated components must also be listed a an entryComponents
    HeaderComponent,
    NavbarComponent,
    SideColumnComponent
  ]
})
export class LayoutModule {}