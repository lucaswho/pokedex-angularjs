'use strict';

angular.module('myApp.pokemon', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/pokemon', {
      templateUrl: 'pokemon/pokemon.html',
      controller: 'pokemonController as vm',
    });
  }])

  .controller('pokemonController', ['$http', '$rootScope', function ($http, $rootScope) {

    var vm = this;
    console.log($rootScope.selectedPokemon)

  }]);