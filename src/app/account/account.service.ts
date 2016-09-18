module app.account {
  'use strict';

  /**
   * AccountService
   */
  export class AccountService {
    accounts: Array<Account> = [];

    static $inject = ['$q', '$mdDialog'];
    constructor(private $q: ng.IQService, private $mdDialog: ng.material.IDialogService) { }

    createAccount(initialBalance: number): ng.IPromise<Account> {
      let account = new Account(this.randomString(30), initialBalance);
      return this.$q.when(account);
    }

    getAccount(accountId: string): ng.IPromise<Account> {
      let account = new Account(accountId, 1234);
      return this.$q.when(account);
    }

    private randomString(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
  }

  angular.module('app.account')
    .service('app.account.AccountService', AccountService);
}