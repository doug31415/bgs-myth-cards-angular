(function(){
  'use strict';

  bgsBackground.$inject = [ '$log', '$timeout', 'ANIME_EVENTS' ];

  function bgsBackground( $log, $timeout, ANIME_EVENTS ){
    //$log.debug( 'bgsBackground loaded');

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
      controllerAs: 'bkgrdCtrl',
      templateUrl: 'backgrounds/backgrounds-tmpl.html'

    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller( $log, $scope, ANIME_EVENTS ){
      //$log.debug( 'bgsBackgroundController LOADED');

      // -------------------------
      // vars
      // -------------------------

      var self = this;

      self.showStartPageBackground = false;
      self.showMythExplorerBackground = false;

      self.showBackground = false;

      // -------------------------
      // functions
      // -------------------------

      self.startIntro = function () {
        $log.debug ('bgsBackgroundsController.startIntro' );
        self.showBackground = true;
      };

      // -------------------------
      // listeners
      // -------------------------

      $scope.$on( ANIME_EVENTS.startIntro, function(){
        self.startIntro();
      });


    } // end controller

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsBackground', bgsBackground );

})();
