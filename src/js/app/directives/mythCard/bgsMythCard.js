

(function(){
  'use strict';

  bgsMythCard.$inject = ['$log', '$rootScope', '$timeout', 'ANIME_EVENTS'];

  function bgsMythCard( $log, $rootScope, $timeout, ANIME_EVENTS ){
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
      cardId:'@cardId',
      cardSize: '@cardSize'
    },
    link: link,
    controller: controller,
    controllerAs: 'mcCtrl',
    bindToController: true,
    templateUrl: 'app/directives/mythCard/myth-card-tmpl.html'
  };

  return directive;

  // --------------------
  // functions
  // --------------------

    function link( scope, elem, attrs ){

      scope.cardId = attrs.cardId;

      scope.getCardWrapperClass = function(){
        //$log.debug( 'bgsMythCard.getCardClass', attrs.cardType);
        return 'myth-card-wrapper ' + attrs.cardType;
      };

      scope.getCardTextClass = function(){
        //$log.debug( 'bgsMythCard.getCardTextClass');
        return 'myth-card-text ' + attrs.cardType + ' ' + attrs.cardSize
      };

      scope.onClick = function(){
      };
    } //END LINK

    function controller( $rootScope, bgsAnimeTimings ){
      var self = this;


      self.getCardTextClass = function(){
        //$log.debug( 'bgsMythCard.getCardTextClass');
        return 'myth-card-text ' + self.cardType + ' ' + self.cardSize
      };

      $rootScope.$on( ANIME_EVENTS.startIntro, function() {
        //$log.debug( 'bgsMythCard.startIntro');

        $timeout( function(){
          self.addCards = true;
          //$log.debug( '...adding cards');
        }, bgsAnimeTimings.intro.showCategoryCards * 1000);


        $timeout( function(){
          self.fanInCards = true;
          //$log.debug( '...fanning cards');
        }, bgsAnimeTimings.intro.fanCategoryCards * 1000);
      } );
    }

}// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsMythCard', bgsMythCard );

})();
