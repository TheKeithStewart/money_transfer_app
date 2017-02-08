declare var angular: ng.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component, EventEmitter, Output } from '@angular/core';

  /**
   * SideColumnComponent
   */
  @Component({
    moduleId: module.id,
    selector: 'side-column',
    templateUrl: 'side-column.component.html',
    styles: [`
      md-sidenav {
        padding: 15px;
      }
    `]
  })
  export class SideColumnComponent {
    @Output() createAccount = new EventEmitter<number>();
    onCreateAccount(initBalance: number) {
      this.createAccount.emit(initBalance);
    }

    @Output() getAccount = new EventEmitter<string>();
    onGetAccount(acctId: string) {
      this.getAccount.emit(acctId);
    }

    @Output() addAccount = new EventEmitter();
    onAddAccount() {
      this.addAccount.emit();
    }
    
    constructor() {}

  }

  angular.module('app.layout')
    .directive('sideColumn', downgradeComponent({
      component: SideColumnComponent,
      outputs: [
        'addAccount',
        'getAccount',
        'createAccount'
      ]
    }));
