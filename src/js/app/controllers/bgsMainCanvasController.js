

(function(){

    'use strict';

    bgsMainCanvasController.$inject = [ '$log', '$timeout', 'bgsAnimationService' ];

    function bgsMainCanvasController( $log, $timeout, bgsAnimationService ){
        $log.debug( 'bgsMainCanvasController LOADED');

        // -------------------------
        // vars
        // -------------------------

        var self = this;

        // -------------------------
        // page

        self.startIntroAnimation = false;


        // -------------------------
        // business logic
        // -------------------------

        self.init = function(){
            $log.debug( 'bgsMainCanvasController.init');

            // start a timer then trigger the animations
            $timeout( function() {
                this.startAnimations();
            }, 500);
        };

        self.startAnimations = function(){
            $log.debug( 'MainCanvasController.startAnimations');
            bgsAnimationService.startIntroAnimation();
        };

        // -------------------------
        // listeners

    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsMainCanvasController', bgsMainCanvasController );

})();

