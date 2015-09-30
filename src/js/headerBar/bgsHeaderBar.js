/**
 * Created by douglas goodman on 2/14/15
 */

(function() {
  'use strict';

  bgsHeaderBar.$inject = [
    '$log',
    'bgsAnimeTimings' ];

  function bgsHeaderBar( $log, bgsAnimeTimings ) {
    $log.debug( 'bgsHeaderBar LOADED' );

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
      bindToController: true,
      controllerAs: 'headerCtrl',
      templateUrl: 'headerBar/header-bar-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller( $scope, $timeout, bgsAnimeTimings, ANIME_EVENTS ) {
      var self = this;

      self.showPhoneRollover = false;
      self.showHeaderLeft = false;
      self.showHeaderRight = false;

      self.startIntro = function() {
        $timeout( function() {
          self.showHeaderLeft = true;
        }, bgsAnimeTimings.intro.showHeaderLeft * 1000 );

        $timeout( function() {
          self.showHeaderRight = true;
        }, bgsAnimeTimings.intro.showHeaderRight * 1000 );
      };

      // -------------------------
      // listeners
      // -------------------------

      $scope.$on( ANIME_EVENTS.startIntro, function() {
        self.startIntro();
      } );

    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsHeaderBar', bgsHeaderBar );

})();
