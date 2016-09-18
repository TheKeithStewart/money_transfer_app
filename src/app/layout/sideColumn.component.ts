module app.layout {
  'use strict';
  
  /**
   * SideColumnController
   */
  class SideColumnController {
    
    constructor() { }

  }

  angular.module('app.layout')
    .component('sideColumn', {
      templateUrl: 'app/layout/sideColumn.html',
      bindings: {
        createAccount: '&',
        getAccount: '&',
        addAccount: '&'
      },
      controller: SideColumnController,
      controllerAs: 'vm'
    });
}