

(function(){

    'use strict';

    bgsBackgroundController.$inject = [ '$log', 'bgsAnimationService', 'bgsNavigationService' ];

    function bgsBackgroundController( $log, bgsAnimationService, bgsNavigationService ){
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


        // -------------------------
        // business logic
        // -------------------------

        self.init = function () {
            self.showStartPageBackground = false;
            self.showMythExplorerBackground = false;
        };

        // -------------------------
        // intro animation

        self.introAnimationSetup = function(){

            self.showStartPageBackground = true;

            TweenLite.set( startPageBackgroundTop, {alpha:0} );
            TweenLite.set( startPageBackgroundFloor, {alpha:0} );
            TweenLite.set( raysTop, {alpha:0} );
            TweenLite.set( raysBottom, {alpha:0} );

            self.$digest();

            self.introAnimation();
        };

        self.introAnimation = function(){
            console.log('bgsBackgroundsController.introAnimation');

            TweenLite.to( startPageBackgroundTop, 1, {autoAlpha:1, delay: 0} );
            TweenLite.to( startPageBackgroundFloor, 1, {autoAlpha:1, zIndex:-60, rotationX:70, transformOrigin:'50% 0%', transformPerspective:700, delay: 0} );

            TweenLite.to( raysTop, 1, {autoAlpha:1, delay:.5} );
            TweenLite.to( raysBottom, 1, {autoAlpha:1, delay:.5} );
        };

        // -------------------------
        // myth explorer animation

        self.addMythExplorerBackground = function () {
            self.showMythExplorerBackground = true;
            $('#mythExplorerBackground').fadeTo(0, 0); // initialize the alpha to 0
            TweenMax.to(mythExplorerBackground, 1, {alpha: 1, ease: Power2.easeOut, onComplete: self.onAddMythExplorerBackgroundComplete});
        };

        self.onAddMythExplorerBackgroundComplete = function () {
            console.log('BackgroundsController.onAddMythExplorerBackgroundComplete');
            self.showStartPageBackground = false;
        };

        // -------------------------
        // listeners
        // -------------------------

        $scope.$on( bgsAnimationService.ADD_START_BACKGROUND, function(){
            console.log ('bgsBackgroundsController.ADD_START_BACKGROUND' );
            $scope.introAnimationSetup();
        });

        $scope.$on('broadcastNavigateToStartPage', function(){
            console.log ('bgsBackgroundsController.onBroadcastNavigateToStartPage' );
        });

        $scope.$on( bgsAnimationService.ADD_MYTH_EXPLORER_BACKGROUND, function(){
            console.log ('bgsBackgroundsController.ADD_MYTH_EXPLORER_BACKGROUND' );
            $scope.addMythExplorerBackground()
        });

        $scope.$on( bgsNavigationService.COMPARE_PLANS_STATE, function(){
            console.log('bgsBackgroundsController.COMPARE_PLANS_STATE()');
            $scope.addMythExplorerBackground()    });

    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsBackgroundController', bgsBackgroundController );

})();

