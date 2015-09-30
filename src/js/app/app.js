

(function(){
  'use strict';

  angular.module('bgsMythCardsApp',
      [ 'ui.router',
<<<<<<< HEAD
        'ngAnimate'
      ])

    .constant( 'ANIME_EVENTS', {
      startIntro: 'startIntro'
    })

    .constant( 'EASE', {
      'xlong': 1.5,
      'long': 1,
      'medium':.5,
      'short':.35,
      'xshort':.2
    } )
=======
        'ngAnimate',
        'mobile-angular-ui'
      ])

      .constant( 'animations', {
        'TweenMax': TweenMax
      } )
>>>>>>> master

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
<<<<<<< HEAD
=======
              //template: '<div><h3>HERE TOO</h3></div>'
>>>>>>> master
            });
      })

      .run( ['$log', '$state', function( $log, $state ){
          $log.debug( 'bgsMythCardApp.run' );

        $state.go( 'start' );
      }]);
<<<<<<< HEAD
})();
=======
})();
>>>>>>> master
