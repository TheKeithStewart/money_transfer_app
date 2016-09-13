/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';

  /**
   * AccountService
   */
  export class AccountService {
    accounts: Array<Account> = [];

    static $inject = ['$q', '$mdDialog'];
    constructor(private $q: ng.IQService, private $mdDialog: ng.material.IDialogService) { }

    createAccount(initialBalance: number): ng.IPromise<Account> {
      let deferred = this.$q.defer();
      let account = new Account(this.randomString(30), initialBalance);
      deferred.resolve(account);
      return deferred.promise;
    }

    getAccount(accountId: string): ng.IPromise<Account> {
      let deferred = this.$q.defer();
      let account = new Account(accountId, 1234);
      deferred.resolve(account);
      return deferred.promise;
    }

    transferMoney(fromAccountId: string, toAccountId: string, amount: number): ng.IPromise<string> {
      let deferred = this.$q.defer();
      deferred.resolve('complete');
      return deferred.promise;
    }

    randomString(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
  }

  angular.module('app')
    .service('app.AccountService', AccountService);
}