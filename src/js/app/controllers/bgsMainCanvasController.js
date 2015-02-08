

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

        self.showBackground = false;


        // -------------------------
        // business logic
        // -------------------------

        self.init = function(){
            $log.debug( 'bgsMainCanvasController.init');

            // start a timer then trigger the animations
            $timeout( function() {
              self.showBackground = true;
            }, 500);
        };

      self.init();


        // -------------------------
        // listeners

    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsMainCanvasController', bgsMainCanvasController );

})();

