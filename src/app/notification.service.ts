/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';
  
  /**
   * NotificationService
   */
  export class NotificationService {
    
    static $inject = ['$mdToast'];
    constructor(private $mdToast: ng.material.IToastService) { }
    
    openToast(message: string, fail?: boolean): void {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(message)
          .position('top right')
          .hideDelay(3000)
          .theme((fail ? 'fail-toast' : 'success-toast'))
      )
    }
  }
  
  angular.module('app')
    .service('app.notificationService', NotificationService);
}