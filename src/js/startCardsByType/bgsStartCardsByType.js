/**
 * Created by douglas goodman on 2/15/15
 */

(function () {
  'use strict';

  bgsStartCardsByType.$inject = ['$log'];

  function bgsStartCardsByType($log) {
    //$log.debug( 'bgsStartCardsByType LOADED');

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
      controllerAs: 'cbtCtrl',
      templateUrl: 'startCardsByType/start-cards-by-type-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller() {

      var self = this;
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module('bgsMythCardsApp')
    .directive('bgsStartCardsByType', bgsStartCardsByType);

})();
