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

    function controller( $scope, ANIME_EVENTS ){

      var self = this;

      self.showFooter = false;

      self.startIntro = function(){
        self.showFooter = true;
      };

      // -------------------------
      // listeners
      // -------------------------

      $scope.$on( ANIME_EVENTS.startIntro, function(){
        self.startIntro();
      });
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module('bgsMythCardsApp')
    .directive('bgsFooterBar', bgsFooterBar);

})();
