/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';

  /**
   * AppController
   */
  class AppController {
    accounts: Array<Account> = [];

    static $inject = ['app.AccountService', 'app.notificationService', '$mdDialog'];
    constructor(private accountService: AccountService, private notificationService: NotificationService, private $mdDialog: ng.material.IDialogService) {
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
  }

  angular.module('app')
    .component('app', {
      templateUrl: 'app/app.html',
      bindings: {

      },
      controller: AppController,
      controllerAs: 'vm'
    });
}