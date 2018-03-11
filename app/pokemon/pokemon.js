'use strict';

angular.module('myApp.pokemon', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/pokemon', {
      templateUrl: 'pokemon/pokemon.html',
      controller: 'pokemonController as vm',
    });
  }])

  .controller('pokemonController', ['$window', '$http', '$rootScope', function ($window, $http, $rootScope) {

    var vm = this;
    if ($rootScope.selectedPokemon) {
      vm.selectedPokemon = $rootScope.selectedPokemon;
      vm.selectedPokemon.imageUrl = vm.selectedPokemon.imageUrl.replace("detail", "full");
    } else {
      $window.location.href = "#!/home";
    }

    //MOCK
    vm.info = [
      {
        title: 'Height',
        desc: '99 m'
      },
      {
        title: 'Category',
        desc: 'MOCK'
      },
      {
        title: 'Weight',
        desc: '99 kg'
      },
      {
        title: 'Abilities',
        desc: 'MOCK'
      },
      {
        title: 'Gender',
        desc: 'F/M'
      },
    ]

    getPokemonDetails();

    function getPokemonDetails() {

      $http.get(vm.selectedPokemon.url, { cache: true })
        .then(function (response) {
          var data = response.data;
          console.log(data);
          vm.moves = data.moves;
        });
    }

  }]);