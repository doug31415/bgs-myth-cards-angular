

(function(){
  'use strict';

  bgsGetTheFacts.$inject = ['$log'];

  function bgsGetTheFacts( $log ){

    // --------------------
    // vars
    // --------------------

    // --------------------
    // class factory
    // --------------------

    var directive = {
      restrict: 'EA',
      replace: 'true',
      transclude: false,
      scope: {
        cardSize: '@cardSize',
        parentId: '@parentId'
      },
      link: link,
      templateUrl: ''
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function link( scope, elem, attr ){
      scope.$watch( "cardSize", function( val ){
        if( val == 'small' ) {
          $element.html ('<img ng-src="assets/images/btn_getTheFacts.png" style="position:absolute; top:15px; width: 60px; margin-right: auto; margin-left:22%">');
        }
        else if( val == 'medium') {
          $element.html ('<img ng-src="assets/images/btn_getTheFacts.png" style="position:absolute; top:0px; width: 75px; margin-right: auto; margin-left:25%" >');
        }

        $compile( $element.contents() )( $scope );   // Compile the HTML so that the ng directives are handled. See http://docs.angularjs.org/api/ng.$compile
      });
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .directive( 'bgsGetTheFacts', bgsGetTheFacts );

})();



