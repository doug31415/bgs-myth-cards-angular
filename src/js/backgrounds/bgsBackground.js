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

      // -------------------------
      // model

      // -------------------------
      // other

      self.showStartPageBackground = false;
      self.showMythExplorerBackground = false;

      self.showBackground = false;


      // -------------------------
      // business logic
      // -------------------------

      self.startIntro = function () {
        $log.debug ('bgsBackgroundsController.startIntro' );
        self.showBackground = true;
      };


      //// -------------------------
      //// myth explorer animation
      //
      //self.addMythExplorerBackground = function () {
      //  self.showMythExplorerBackground = true;
      //  $('#mythExplorerBackground').fadeTo(0, 0); // initialize the alpha to 0
      //  TweenMax.to(mythExplorerBackground, 1, {alpha: 1, ease: Power2.easeOut, onComplete: self.onAddMythExplorerBackgroundComplete});
      //};
      //
      //self.onAddMythExplorerBackgroundComplete = function () {
      //  $log.debug('BackgroundsController.onAddMythExplorerBackgroundComplete');
      //  self.showStartPageBackground = false;
      //};

      // -------------------------
      // listeners
      // -------------------------

      $scope.$on( ANIME_EVENTS.startIntro, function(){
        self.startIntro();
      });
      //
      //$scope.$on('broadcastNavigateToStartPage', function(){
      //  $log.debug ('bgsBackgroundsController.onBroadcastNavigateToStartPage' );
      //});
      //
      //$scope.$on( bgsAnimationService.ADD_MYTH_EXPLORER_BACKGROUND, function(){
      //  $log.debug ('bgsBackgroundsController.ADD_MYTH_EXPLORER_BACKGROUND' );
      //  $scope.addMythExplorerBackground()
      //});
      //
      //$scope.$on( bgsNavigationService.COMPARE_PLANS_STATE, function(){
      //  $log.debug('bgsBackgroundsController.COMPARE_PLANS_STATE()');
      //  $scope.addMythExplorerBackground()    });


    } // end controller

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsBackground', bgsBackground );

})();
