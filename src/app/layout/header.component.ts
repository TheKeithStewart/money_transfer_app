module app.layout {
  'use strict';
  
  /**
   * HeaderController
   */
  class HeaderController {
    
    constructor() { }

  }
  
  angular.module('app.layout')
    .component('header', {
      templateUrl: 'app/layout/header.html',
      bindings: {
        
      },
      controller: HeaderController,
      controllerAs: 'vm'
    });
}