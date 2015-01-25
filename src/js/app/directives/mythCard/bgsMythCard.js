

(function(){
  'use strict';
  
  bgsMythCard.$inject = ['$log'];
  
  function bgsMythCard( $log ){
  
  // --------------------
  // vars 
  // --------------------
  
  // --------------------
  // class factory 
  // --------------------
  
  var directive = {
    restrict: 'EA',
    replace: true,
    transclude: false,
    scope: {
      cardId: '@cardId',   // the dom id property - so we can grab it for animation
      cardPid: '@cardPid',  // the PID we use to reference its properties, irrespective of its dom id
      cardColor:'@cardColor',
      cardText:'@cardText',
      cardSize: '@cardSize'
    },
    controller: controller,
    templateUrl: 'app/directives/mythCard/myth-card-tmpl.html'
  };
  
  return directive;
  
  // --------------------
  // functions 
  // --------------------

    function controller( $scope, $rootScope ){

      $scope.onCardClick = function(){

        $rootScope.$broadcast( 'MYTH_BTN_CLICK_' + $scope.cardId,
            {
              cardColor: $scope.cardColor,
              cardId: $scope.cardId,
              cardPid: $scope.cardPid
            }
        );
      };
    }
  
}// END CLASS
  
  // --------------------
  // inject 
  // --------------------
  
  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythCard', bgsMythCard );
  
})();