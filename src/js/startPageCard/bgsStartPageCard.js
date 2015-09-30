/**
 * Created by douglas goodman on 2/15/15
 */

(function() {
  'use strict';

  bgsStartPageCard.$inject = [
    '$log',
    '$timeout',
    'bgsAnimeTimings' ];

  function bgsStartPageCard( $log, $timeout, bgsAnimeTimings ) {
    //$log.debug( 'bgsStartPageCard LOADED');

    // --------------------
    // vars
    // --------------------

    // --------------------
    // class factory
    // --------------------

    var directive = {
      restrict: 'EA',
      replace: true,
      scope: {},
      controller: controller,
      controllerAs: 'startCardCtrl',
      templateUrl: 'startPageCard/start-page-card-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller( $rootScope, $timeout, bgsAnimeTimings, ANIME_EVENTS ) {

      var self = this;

      self.startCardShow = false;
      self.startCardFlip = false;
      self.hideStartCard = false;

      // -------------------------
      // functions
      // -------------------------

      self.startNow = function(){
        $log.debug( 'bgsStartPageCard.startNow');
        $rootScope.$broadcast( ANIME_EVENTS.showBlotter );
      };


      // -------------------------
      // listeners
      // -------------------------

      $rootScope.$on( ANIME_EVENTS.startIntro, function() {
        $timeout( function() {
          self.startCardShow = true;
        }, bgsAnimeTimings.intro.showStartCard * 1000 );

        $timeout( function() {
          self.startCardFlip = true;
        }, bgsAnimeTimings.intro.flipStartCard * 1000 );
      } );


      $rootScope.$on( ANIME_EVENTS.showBlotter, function(){
        $timeout( function() {
          self.hideStartCard = true;
        }, bgsAnimeTimings.showBlotter.hideStartCard * 1000 );
      })
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsStartPageCard', bgsStartPageCard );

})();
