module app.core {
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
  
  angular.module('app.core')
    .service('app.core.notificationService', NotificationService);
}