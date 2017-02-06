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
      templateUrl: 'app/app.html',
      bindings: {

      },
      controller: AppController,
      controllerAs: 'vm'
    });
}