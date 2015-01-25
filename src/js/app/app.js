

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
              templateUrl: 'app/app.html',
              controller: 'bgsMainCanvasController as mainCtrl'
            });
      });
})();