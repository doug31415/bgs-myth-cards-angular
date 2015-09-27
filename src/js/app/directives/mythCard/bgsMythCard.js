

(function(){
  'use strict';

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
