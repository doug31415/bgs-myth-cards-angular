/**
 * Created by douglas goodman on 2/15/15
 */

(function () {
  'use strict';

  bgsStartPageCard.$inject = ['$log'];

  function bgsStartPageCard($log) {
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

    function controller( $scope, ANIME_EVENTS ) {

      var self = this;

      self.startCardShow = false;

      self.startIntro = function(){
        $log.debug( 'bgsStartPageCard.startIntro');
        self.startCardShow = true;
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
    .directive('bgsStartPageCard', bgsStartPageCard);

})();
