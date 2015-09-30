/**
 * Created by douglas goodman on 2/14/15
 */

(function() {
  'use strict';

  bgsMythExplorer.$inject = [
    '$log',
    '$rootScope',
    '$timeout',
    'bgsAnimeTimings',
    'ANIME_EVENTS' ];

  function bgsMythExplorer( $log, $rootScope, $timeout, bgsAnimeTimings, ANIME_EVENTS ) {
    //$log.debug( 'bgsMythExplorer LOADED');

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
      controllerAs: 'mythCtrl',
      bindToController: true,
      templateUrl: 'mythExplorer/myth-explorer-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller() {

      var self = this;

      self.addBlotter = false;

      $rootScope.$on( ANIME_EVENTS.showBlotter, function() {
        $timeout( function() {
          self.showBlotter = true;
        }, bgsAnimeTimings.showBlotter.addBlotter * 1000 );
      } )
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythExplorer', bgsMythExplorer );

})();
