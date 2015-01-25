

(function(){

    'use strict';

    bgsComparePlansController.$inject = [ '$log', 'bgsNavigationService' ];

    function bgsComparePlansController( $log, bgsNavigationService ){
        //$log.debug( 'bgsComparePlansController LOADED');

        // -------------------------
        // vars
        // -------------------------

        var self = this;

        // -------------------------
        // model

        // -------------------------
        // other

        self.isHidden = true;
        self.cardsHidden = true;


        // -------------------------
        // business logic
        // -------------------------

        self.init = function () {
            //console.log('ComparePlansController.init');

            self.isHidden = true;
            self.cardsHidden = true;
        };

        // -------------------------
        // intro animation

        self.setUpIntroAnimation = function (){

            self.isHidden = false;
            self.cardsHidden = false;

            TweenLite.set(plan_card_0, {alpha: 0});
            TweenLite.set(plan_card_1, {alpha: 0});
            TweenLite.set(plan_card_2, {alpha: 0});

            self.introAnimation();
        };

        self.introAnimation = function (){

            TweenLite.to(plan_card_0, 1, {alpha: 1});
            TweenLite.to(plan_card_1, 1, {alpha: 1});
            TweenLite.to(plan_card_2, 1, {alpha: 1});
        };

        // -------------------------
        // on next/back

        self.onNext = function () {
            console.log('bgsComparePlansController.onNext');
        };

        self.onPrev = function () {
            console.log('bgsComparePlansController.onPrev');
        };

        // -------------------------
        // listeners

    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsComparePlansController', bgsComparePlansController );

})();
