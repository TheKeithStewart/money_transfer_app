module app.account {
  'use strict';
  
  describe('service: AccountService:', () => {
    let $scope: ng.IScope;
    let accountService: AccountService;
    
    beforeEach(() => {
      angular.mock.module('app');
    });
    
    beforeEach(() => {
      inject(['$rootScope', 'app.account.AccountService', (_$rootScope_: ng.IRootScopeService, AccountService: AccountService) => {
        $scope = _$rootScope_.$new();
        accountService = AccountService;
      }]);
    });
    
    it('should initialize correctly', () => {
      expect(accountService).toBeDefined();
    });
    
    describe('createAccount()', () => {
      afterEach(() => {
        // used because service functions are currently returning $q promise
        $scope.$apply();
      });

      it('should create an account with a balance of $1,234', () => {
        let initialBalance = 1234;
        accountService.createAccount(initialBalance).then((account) => {
          expect(account.balance).toEqual(initialBalance);
        });
      });
    });
  });
}