'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import main from '../../app/main/main.component';

export class SidebarComponent {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  isOpen = true;
  categories = [{
    name: 'cat1',
    things: [{ name: 'thing1' }, { name: 'thing2' }]
  }, {
    name: 'cat2'
  }]
}

export default angular.module('directives.sidebar', [])
  .component('sidebar', {
    template: require('./sidebar.html'),
    controller: SidebarComponent
  })
  .name;
