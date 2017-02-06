'use strict';

angular.
  module('app.core').
  filter('checkmark', function() {
    return function(input: boolean) {
      return input ? '\u2713' : '\u0021';
    };
  });