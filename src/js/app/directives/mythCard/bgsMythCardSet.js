/**
 * Created by douglas goodman on 9/27/15
 */

(function() {
  'use strict';

  bgsMythCardSet.$inject = [ '$log' ];

  function bgsMythCardSet( $log ) {
    //$log.debug( 'bgsMythCardSet LOADED');

    // --------------------
    // vars
    // --------------------

    // --------------------
    // class factory
    // --------------------

    var directive = {
      restrict: 'EA',
      replace: true,
      scope: {
        modelData: '=',
        cardSize: '@'
      },
      link: link,
      templateUrl: 'app/directives/mythCard/bgsMythCardSet.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function link( scope, elem, attr ) {
      //$log.debug( 'bgsMythCardSet.link', scope.cardSize);

      //scope.card = scope.modelData[0];

      //scope.cardColor = scope.modelData[0].color;
      //$log.debug( '...cardColor', scope.cardColor);
    }



  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythCardSet', bgsMythCardSet );

})();
