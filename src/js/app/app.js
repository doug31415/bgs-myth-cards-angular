

(function(){
  'use strict';

  angular.module('bgsMythCardsApp',
      [ 'ui.router',
        'mobile-angular-ui',
        'bgsMythCardsApp.controllers.Main'
      ])

      .config(function( $stateProvider ){
        // ----------------------------
        // state management
        // ----------------------------
        $stateProvider
            .state('index', {
              url: '/',
              templateUrl: 'home.html',
              controller: 'MainController as homeCtrl'
            });
      });
})();