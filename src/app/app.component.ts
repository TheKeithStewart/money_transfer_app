module app {
  'use strict';

  /**
   * AppController
   */
  class AppController {

    constructor() {}

  }

  angular.module('app')
    .component('app', {
      templateUrl: 'dist/app/app.html',
      bindings: {

      },
      controller: AppController,
      controllerAs: 'vm'
    });
}