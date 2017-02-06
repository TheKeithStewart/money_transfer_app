module app {
  'use strict';

  angular.module('app')
    .config(($mdThemingProvider: ng.material.IThemingProvider) => {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
      $mdThemingProvider.theme('success-toast');
      $mdThemingProvider.theme('fail-toast');
    })
    .config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
      $routeProvider.when('/home', {
        template: '<home></home>'
      }).when('/account', {
        template: '<account></account>'
      }).otherwise({
        redirectTo: '/home'
      });
    });

}