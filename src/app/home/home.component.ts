module app {
  'use strict';

  /**
   * HomeController
   */
  class HomeController {

    constructor() { }
  }

  angular.module('app')
    .component('home', {
      templateUrl: 'dist/app/home/home.component.html',
      bindings: {

      },
      controller: HomeController,
      controllerAs: 'vm'
    });
}