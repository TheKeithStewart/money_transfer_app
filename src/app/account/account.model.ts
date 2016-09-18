module app.account {
  'use strict';

  export class Account {
    accountId: string;
    balance: number;

    constructor(accountId: string, balance: number) {
      this.accountId = accountId;
      this.balance = balance;
    }
  }
}