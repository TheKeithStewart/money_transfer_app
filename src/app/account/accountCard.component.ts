module app.account {
  'use strict';

  /**
   * AccountCardController
   */
  class AccountCardController {

    constructor() { }

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