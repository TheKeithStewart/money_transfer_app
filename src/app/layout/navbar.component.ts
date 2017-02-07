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
      templateUrl: 'dist/app/layout/navbar.component.html',
      bindings: {
        
      },
      controller: NavbarController,
      controllerAs: 'vm'
    });
}