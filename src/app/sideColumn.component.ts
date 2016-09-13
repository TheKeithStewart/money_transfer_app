/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
  'use strict';
  
  /**
   * SideColumnController
   */
  class SideColumnController {
    createAccount: (initialBalance: any) => void;
    getAccount: (accountId: any) => void;
    getAccountId: string;
    
    static $inject = ['$mdDialog', '$mdMedia'];
    constructor(private $mdDialog: ng.material.IDialogService, private $mdMedia: ng.material.IMedia) { }

    addAccount($event): void {
      let useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

      this.$mdDialog.show({
        templateUrl: '/dist/app/addAccount.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        controller: AddAccount,
        controllerAs: 'vm'
      }).then((accountInfo: IAddAccountResponse) => {
        this.createAccount({initialBalance: accountInfo.initialBalance});
      });
    }
  }

  angular.module('app')
    .component('sideColumn', {
      templateUrl: 'app/sideColumn.html',
      bindings: {
        createAccount: '&',
        getAccount: '&'
      },
      controller: SideColumnController,
      controllerAs: 'vm'
    });
}