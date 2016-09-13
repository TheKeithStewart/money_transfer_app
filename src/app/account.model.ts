/*
 * CollabNet TeamForge(r)
 * Copyright 2007-2016 CollabNet, Inc. All rights reserved.
 * http://www.collab.net
 */
module app {
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