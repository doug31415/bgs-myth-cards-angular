

(function(){

  'use strict';

  bgsAnimationController.$inject = [ '$log', '$rootScope', '$timeout', 'ANIME_EVENTS' ];

  function bgsAnimationController( $log, $rootScope, $timeout, ANIME_EVENTS ){
    $log.debug( 'bgsAnimationController LOADED');

    // -------------------------
    // vars
    // -------------------------

    var self = this;

    // -------------------------
    // page

    self.showBackground = false;


    // -------------------------
    // business logic
    // -------------------------

    self.startIntro = function(){
      // start a timer then trigger the animations
      $timeout( function() {
        $rootScope.$broadcast( ANIME_EVENTS.startIntro )
      }, 1000);
    };

    angular.element(document).ready(function () {
      self.startIntro();
    });


    // -------------------------
    // listeners

  }// END CLASS

  // -------------------------
  // inject
  // -------------------------

  angular.module('bgsMythCardsApp')
    .controller('bgsAnimationController', bgsAnimationController );

})();

