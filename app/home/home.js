'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeController as vm',
    });
  }])

  .controller('homeController', ['$window', '$http', '$rootScope', function ($window, $http, $rootScope) {

    var vm = this;
    vm.pokemonArray = [];

    getPokemon();

    function getPokemon() {

      $http.get("https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0")
        .then(function (response) {
          var data = response.data;
          vm.pokemonArray = data.results;
          angular.forEach(vm.pokemonArray, function (value, key) {
            value.id = (key + 1).pad(3);
            value.imageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + value.id + '.png';
          });
        });
    }

    vm.detailPokemon = function (pokemon) {
      $rootScope.selectedPokemon = pokemon;
      $window.location.href = "#!/pokemon";
    }

    Number.prototype.pad = function (size) {
      var s = String(this);
      while (s.length < (size || 2)) { s = "0" + s; }
      return s;
    }

  }]);