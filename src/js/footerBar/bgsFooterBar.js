/**
 * Created by douglas goodman on 2/14/15
 */

(function () {
  'use strict';

  bgsFooterBar.$inject = ['$log'];

  function bgsFooterBar( $log ){
    //$log.debug( 'bgsFooterBar LOADED');

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
      controllerAs: 'footerCtrl',
      templateUrl: 'footerBar/footer-bar-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller(  $rootScope, $timeout, bgsAnimeTimings, ANIME_EVENTS ){

      var self = this;

      self.showFooter = false;

      // -------------------------
      // listeners
      // -------------------------

      $rootScope.$on( ANIME_EVENTS.startIntro, function(){
        $timeout( function(){
          self.showFooter = true;
        }, bgsAnimeTimings.intro.showFooter * 1000);
      });
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module('bgsMythCardsApp')
    .directive('bgsFooterBar', bgsFooterBar);

})();
