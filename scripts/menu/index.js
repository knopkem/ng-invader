angular.module('app.menu', [])
.config(function($stateProvider) {
  // Our first state called `menu`
  $stateProvider
    .state('menu', {
      url: '',
      templateUrl: '/scripts/menu/main.html',
      controller: 'MenuController as ctrl'
    });
});