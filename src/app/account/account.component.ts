module app.account {
  'use strict';

  /**
   * AccountController
   */
  class AccountController {
    accounts: Array<account.Account> = [];

    static $inject = ['app.account.AccountService', 'app.core.notificationService', '$mdDialog', '$mdMedia'];
    constructor(private accountService: account.AccountService, private notificationService: core.NotificationService, private $mdDialog: ng.material.IDialogService, private $mdMedia: ng.material.IMedia) {
      this.accounts = this.accountService.accounts;
    }

    createAccount(initialBalance: number): void {
      this.accountService.createAccount(initialBalance).then((account) => {
        this.accounts.push(account);
        this.notificationService.openToast('Account added successfully!');
      }, (response) => {
        this.notificationService.openToast('Received the following error when attempting to create the account: ' + response.statusText, true);
      });
    }

    getAccount(accountId: string): void {
      this.accountService.getAccount(accountId).then((account) => {
        if (account) {
          this.accounts.push(account);
          this.notificationService.openToast('The account was found');
        }
      }, () => {
        this.notificationService.openToast('No account with id \'' + accountId + '\' was found');
      });
    }

    addAccount($event): void {
      let useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

      this.$mdDialog.show({
        templateUrl: '/dist/app/account/addAccount.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        controller: account.AddAccount,
        controllerAs: 'vm'
      }).then((accountInfo: account.IAddAccountResponse) => {
        this.createAccount(accountInfo.initialBalance);
      });
    }
  }

  angular.module('app.account')
    .component('account', {
      templateUrl: 'app/account/account.component.html',
      bindings: {

      },
      controller: AccountController,
      controllerAs: 'vm'
    });
}