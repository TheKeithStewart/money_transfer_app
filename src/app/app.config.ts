module app {
  'use strict';

  angular.module('app')
    .config(($mdThemingProvider: ng.material.IThemingProvider) => {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
      $mdThemingProvider.theme('success-toast');
      $mdThemingProvider.theme('fail-toast');
    });

}