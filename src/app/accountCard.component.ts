/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';

  /**
   * AccountCardController
   */
  class AccountCardController {

    constructor() { }

  }

  angular.module('app')
    .component('accountCard', {
      templateUrl: 'app/accountCard.html',
      bindings: {
        account: '<'
      },
      controller: AccountCardController,
      controllerAs: 'vm'
    });
}