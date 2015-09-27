/**
 * Created by douglas goodman on 2/14/15
 */

(function(){
  'use strict';

  bgsHeaderBar.$inject = ['$log'];

  function bgsHeaderBar( $log ){
    $log.debug( 'bgsHeaderBar LOADED');

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

      },
      controller: controller,
      controllerAs: 'headerCtrl',
      templateUrl: 'headerBar/header-bar-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller( $scope, $timeout, ANIME_EVENTS ){
      var self = this;

      self.showPhoneRollover = false;
      self.showHeaderLeft = false;
      self.showHeaderRight = false;

      self.startIntro = function(){
        $timeout( function(){
          self.showHeaderLeft = true;
        }, 900 );

        $timeout( function(){
          self.showHeaderRight = true;
        }, 1000 );
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

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsHeaderBar', bgsHeaderBar );

})();
