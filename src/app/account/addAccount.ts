module app.account {
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