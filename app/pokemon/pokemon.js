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
    // vm.selectedPokemon = $rootScope.selectedPokemon;

    //MOCK
    vm.selectedPokemon = {
      name: 'charmander',
      id: '004',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'
    };
    vm.selectedPokemon.imageUrl = vm.selectedPokemon.imageUrl.replace("detail", "full");

    getPokemonDetails();

    function getPokemonDetails() {

      $http.get(vm.selectedPokemon.url, { cache: true })
        .then(function (response) {
          var data = response.data;
        });

    }

  }]);