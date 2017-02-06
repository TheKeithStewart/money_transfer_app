module app.account {
  'use strict';

  /**
   * AccountCardController
   */
  class AccountCardController {
    account: Account;

    constructor() { }

    isHighBalance() {
      return this.account.balance > 100;
    }
  }

  angular.module('app.account')
    .component('accountCard', {
      templateUrl: 'app/account/accountCard.html',
      bindings: {
        account: '<'
      },
      controller: AccountCardController,
      controllerAs: 'vm'
    });
}