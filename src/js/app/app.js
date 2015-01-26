

(function(){
  'use strict';

  angular.module('bgsMythCardsApp',
      [ 'ui.router',
        'mobile-angular-ui'
      ])

      .config(function( $stateProvider, $urlRouterProvider ){
        // ----------------------------
        // state management
        // ----------------------------

        $urlRouterProvider.when( '', '/start');
        $urlRouterProvider.when('/', '/start');
        $urlRouterProvider.otherwise('/start');

        $stateProvider
            .state('start', {
              url: 'start',
              templateUrl: 'app/app.html'
              //template: '<div><h3>HERE TOO</h3></div>'
            });
      })

      .run( ['$log', '$state', function( $log, $state ){
          $log.debug( 'bgsMythCardApp.run' );

        $state.go( 'start' );
      }]);
})();