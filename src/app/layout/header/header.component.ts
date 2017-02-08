declare var angular: ng.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';

/**
 * HeaderComponent
 */
@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styles: [`
    .title {
      text-align: left;
    }
  `]
})
export class HeaderComponent {

  constructor() { }

}

angular.module('app.layout')
  .directive('header', downgradeComponent({
    component: HeaderComponent
  }));
