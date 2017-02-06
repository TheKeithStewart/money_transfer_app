module app.layout {
  'use strict';
  
  /**
   * NavbarController
   */
  class NavbarController {
    
    constructor() { }

  }
  
  angular.module('app.layout')
    .component('navbar', {
      templateUrl: 'app/layout/navbar.component.html',
      bindings: {
        
      },
      controller: NavbarController,
      controllerAs: 'vm'
    });
}