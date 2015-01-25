
(function(){

    'use strict';

    bgsFooterBarController.$inject = [ '$log', 'bgsAnimationService', 'bgsNavigationService' ];

    function bgsFooterBarController( $log, bgsAnimationService, bgsNavigationService ){
        //$log.debug( 'bgsFooterBarController LOADED');

        // -------------------------
        // vars
        // -------------------------

        var self = this;

        // -------------------------
        // model

        // -------------------------
        // other

        self.isHidden = true;


        // -------------------------
        // business logic
        // -------------------------

        self.onClick = function () {
            bgsNavigationService.navigateToState( NavigationService.COMPARE_PLANS_STATE );
            bgsAnimationService.broadcastAddMythExplorerBackground();

            self.outroAnimation();
        };

        self.onMouseOver = function () {
            TweenMax.to( footerBar, .3, {
                boxShadow: "0px 0px 5px 5px rgba(81,170,220,0.25)"
            });
        };

        self.onMouseOut = function () {
            TweenMax.to( footerBar, .3, {
                boxShadow: "0px 0px 0px 0px rgba(81,170,220,0)"
            });
        };

        // -------------------------
        // intro animation

        self.introAnimationSetup = function(){

            self.isHidden = false;

            TweenMax.set( footerBar, {alpha:0} );

            self.$digest();

            self.introAnimation();
        };

        self.introAnimation = function(){
            TweenMax.to( footerBar, 1, {autoAlpha:1, delay: 0} );
        };

        // -------------------------
        // outro animation

        self.outroAnimation = function(){
            TweenMax.to( footerBar, 1, {autoAlpha:0, delay: 0, onComplete: self.onOutroComplete } );
        };

        self.onOutroComplete = function(){
            self.isHidden = true;
        };

        // -------------------------
        // listeners

        $scope.$on( bgsAnimationService.ADD_FOOTER_BAR, function(){
            self.introAnimationSetup();
        });


    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsFooterBarController', bgsFooterBarController );

})();
