declare var angular: ng.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';

/**
 * NavbarComponent
 */
@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  constructor() { }

}

angular.module('app.layout')
  .directive('navbar', downgradeComponent({
    component: NavbarComponent
  }));
