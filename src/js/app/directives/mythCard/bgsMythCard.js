

(function(){
  'use strict';
<<<<<<< HEAD

  bgsMythCard.$inject = ['$log'];

  function bgsMythCard( $log ){
    //$log.debug( 'bgsMythCard.LOADED');

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
      cardType:'@cardType',
      cardText:'@cardText',
      cardSize: '@cardSize'
    },
    link: link,
    templateUrl: 'app/directives/mythCard/myth-card-tmpl.html'
  };

  return directive;

  // --------------------
  // functions
  // --------------------

    function link( scope, elem, attrs ){

      var self = scope;

      self.getCardClass = function(){
        $log.debug( 'bgsMythCard.getCardClass', scope.cardType);
        return 'card-wrapper-' + scope.cardType;
      };

      self.onClick = function(){

        $log.debug( 'bgsMythCard.onClick');
        $log.debug( '...cardType', self.cardType);
        $log.debug( '...cardText', self.cardText);
        $log.debug( '...cardSize', self.cardSize);

        $rootScope.$broadcast( 'MYTH_BTN_CLICK_' + $scope.cardId,
            {
              cardType: self.cardType,
              cardId: self.cardId,
              cardPid: self.cardPid
=======
  
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
>>>>>>> master
            }
        );
      };
    }
<<<<<<< HEAD

}// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythCard', bgsMythCard );

})();
=======
  
}// END CLASS
  
  // --------------------
  // inject 
  // --------------------
  
  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythCard', bgsMythCard );
  
})();
>>>>>>> master
