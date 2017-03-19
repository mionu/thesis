import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  // awesomeThings = [];
  // newThing = '';
  thing = {}

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    // this.$http.get('/api/things')
    //   .then(response => {
    //     this.awesomeThings = response.data;
    //   });
  }

  // addThing() {
    // if(this.newThing) {
    //   this.$http.post('/api/things', {
    //     name: this.newThing
    //   });
    //   this.newThing = '';
    // }
  // }

  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }

  displayThing(thing) {
    this.thing = thing;
  }
}

export default angular.module('appApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;