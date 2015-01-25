

(function(){

    'use strict';

    bgsHeaderBarController.$inject = [ '$log', 'bgsAnimationService' ];

    function bgsHeaderBarController( $log, bgsAnimationService ){
        //$log.debug( 'bgsHeaderBarController LOADED');

        // -------------------------
        // vars
        // -------------------------

        var self = this;

        // -------------------------
        // model

        // -------------------------
        // other

        self.showPopup = false;
        self.showHeaderElements = false;

        // -------------------------
        // business logic
        // -------------------------

        self.init = function () {
            self.showPopup = false;
        };

        // -------------------------
        // intro animation

        self.introAnimationSetup = function(){

            self.showHeaderElements = true;

            TweenLite.set( logo, {alpha:0} );
            TweenLite.set( logoBar, {alpha:0} );
            TweenLite.set( phoneNumberImage, {alpha:0} );
            TweenLite.set( linkedInBug, {alpha:0} );
            TweenLite.set( twitterBug, {alpha:0} );
            TweenLite.set( facebookBug, {alpha:0} );

            self.$digest();

            self.introAnimation();
        };

        self.introAnimation = function(){

            TweenLite.to( logo, 1, {autoAlpha:1, delay: 0} );
            TweenLite.to( logoBar, 1, {autoAlpha:1, delay: .25} );
            TweenLite.to( phoneNumberImage, 1, {autoAlpha:1, delay: .5} );

            TweenLite.to( twitterBug, 1, {autoAlpha:1, delay: 1.0} );
            TweenLite.to( linkedInBug, 1, {autoAlpha:1, delay: 1.25} );
            TweenLite.to( facebookBug, 1, {autoAlpha:1, delay: 1.5} );
        };

        // -------------------------
        // mouse over phone number

        self.onPhoneNumberMouseOver = function () {
            self.showPopup = true; // reveal the popup
            TweenLite.set( phoneNumberPopup, {alpha:0} );
            TweenLite.to( phoneNumberPopup, .5, {alpha: 1, top: 50, ease: Power2.easeOut});
        };

        self.onPhoneNumberMouseOut = function () {
            TweenMax.to(phoneNumberPopup, .5, {alpha: 0, top: 80, ease: Power2.easeOut, onComplete: self.onMouseOutComplete});
        };

        self.onMouseOutComplete = function(){
            self.showPopup = false;
        };


        // -------------------------
        // listeners

        $scope.$on( bgsAnimationService.ADD_HEADER_BAR, function(){
            self.introAnimationSetup();
        });


    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsHeaderBarController', bgsHeaderBarController );

})();
