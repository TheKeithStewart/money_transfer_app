import { UpgradeModule } from '@angular/upgrade/static';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    MaterialModule.forRoot(),
    LayoutModule
  ],
  declarations: [
    
  ],
  entryComponents: [
    // While functioning as a hybrid app all migrated components must also be listed a an entryComponents
    
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
