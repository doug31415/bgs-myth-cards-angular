(function(){
  'use strict';

  bgsBackground.$inject = [ '$log', 'bgsAnimationService', 'bgsNavigationService' ];

  function bgsBackground( $log,  bgsAnimationService, bgsNavigationService ){

  // --------------------
  // vars
  // --------------------

  // --------------------
  // class factory
  // --------------------

      var directive = {
          restrict: 'EA',
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

  function controller( $log, $scope, bgsAnimationService, bgsNavigationService ){
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
    self.faderClass = {'fader': self.showBackground };

    self.CLICK = function(){
      $log.debug( 'bkgrnd CLICK');
      self.showBackground = !self.showBackground;
    }


    // -------------------------
    // business logic
    // -------------------------

    self.init = function () {
      //self.showStartPageBackground = false;
      //self.showMythExplorerBackground = false;
      //
      //self.introAnimationSetup();
    };

    // -------------------------
    // intro animation

    self.introAnimationSetup = function(){

      self.showStartPageBackground = true;

      TweenMax.set( startPageBackgroundTop, {alpha:0} );
      TweenMax.set( startPageBackgroundFloor, {alpha:0} );
      TweenMax.set( raysTop, {alpha:0} );
      TweenMax.set( raysBottom, {alpha:0} );

      self.introAnimation();
    };

    self.introAnimation = function(){
      $log.debug('bgsBackgroundsController.introAnimation');

      TweenMax.to( startPageBackgroundTop, 1, {autoAlpha:1, delay: 0} );
      TweenMax.to( startPageBackgroundFloor, 1, {autoAlpha:1, zIndex:-60, rotationX:70, transformOrigin:'50% 0%', transformPerspective:700, delay: 0} );

      TweenMax.to( raysTop, 1, {autoAlpha:1, delay:.5} );
      TweenMax.to( raysBottom, 1, {autoAlpha:1, delay:.5} );

      //$scope.$digest();
    };

    // -------------------------
    // myth explorer animation

    self.addMythExplorerBackground = function () {
      self.showMythExplorerBackground = true;
      $('#mythExplorerBackground').fadeTo(0, 0); // initialize the alpha to 0
      TweenMax.to(mythExplorerBackground, 1, {alpha: 1, ease: Power2.easeOut, onComplete: self.onAddMythExplorerBackgroundComplete});
    };

    self.onAddMythExplorerBackgroundComplete = function () {
      $log.debug('BackgroundsController.onAddMythExplorerBackgroundComplete');
      self.showStartPageBackground = false;
    };

    // -------------------------
    // listeners
    // -------------------------

    $scope.$on( bgsAnimationService.ADD_START_BACKGROUND, function(){
      $log.debug ('bgsBackgroundsController.ADD_START_BACKGROUND' );
      $scope.introAnimationSetup();
    });

    $scope.$on('broadcastNavigateToStartPage', function(){
      $log.debug ('bgsBackgroundsController.onBroadcastNavigateToStartPage' );
    });

    $scope.$on( bgsAnimationService.ADD_MYTH_EXPLORER_BACKGROUND, function(){
      $log.debug ('bgsBackgroundsController.ADD_MYTH_EXPLORER_BACKGROUND' );
      $scope.addMythExplorerBackground()
    });

    $scope.$on( bgsNavigationService.COMPARE_PLANS_STATE, function(){
      $log.debug('bgsBackgroundsController.COMPARE_PLANS_STATE()');
      $scope.addMythExplorerBackground()    });

    // -------------------------
    // init
    // -------------------------
    self.init();

  } // end controller

}// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsBackground', bgsBackground );

})();