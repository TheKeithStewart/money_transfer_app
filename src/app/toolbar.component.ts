/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';
  
  /**
   * toolbarController
   */
  class toolbarController {
    
    constructor() { }

  }
  
  angular.module('app')
    .component('toolbar', {
      templateUrl: 'app/toolbar.html',
      bindings: {
        
      },
      controller: toolbarController,
      controllerAs: 'vm'
    });
}