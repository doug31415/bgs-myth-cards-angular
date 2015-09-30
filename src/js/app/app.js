(function () {
  'use strict';

  angular.module('bgsMythCardsApp',
    ['ui.router',
      'ngAnimate'
    ])

    .constant('ANIME_EVENTS', {
      startIntro: 'startIntro',
      showBlotter: 'showBlotter'
    })

    .constant('EASE', {
      'xlong': 1.5,
      'long': 1,
      'medium': .5,
      'short': .35,
      'xshort': .2
    })

    .config(function ($stateProvider, $urlRouterProvider) {
      // ----------------------------
      // state management
      // ----------------------------

      $urlRouterProvider.when('', '/start');
      $urlRouterProvider.when('/', '/start');
      $urlRouterProvider.otherwise('/start');

      $stateProvider
        .state('start', {
          url: 'start',
          templateUrl: 'app/app.html'
        });
    })

    .run(['$log', '$state', function ($log, $state) {
      $log.debug('bgsMythCardApp.run');
      $state.go('start');
    }]);
})();
