'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeController as vm',
    });
  }])

  .controller('homeController', ['$window', function ($window) {

    var vm = this;

  }]);