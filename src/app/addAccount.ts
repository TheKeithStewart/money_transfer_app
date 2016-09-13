/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';

  export interface IAddAccountResponse {
    initialBalance: number;
  }
  
  export class AddAccount {
    initialBalance: number;

    static $inject = ['$mdDialog'];
    constructor(private $mdDialog: ng.material.IDialogService) { }

    cancel(): void {
      this.$mdDialog.cancel();
    }

    save(): void {
      let response: IAddAccountResponse = {
        initialBalance: this.initialBalance
      }
      this.$mdDialog.hide(response);
    }
  }
}