/**
 * Created by douglas goodman on 2/14/15
 */

(function () {
  'use strict';

  bgsMythExplorer.$inject = ['$log'];

  function bgsMythExplorer($log) {
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
      templateUrl: 'mythExplorer/myth-explorer-tmpl.html'
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
    .directive('bgsMythExplorer', bgsMythExplorer);

})();
