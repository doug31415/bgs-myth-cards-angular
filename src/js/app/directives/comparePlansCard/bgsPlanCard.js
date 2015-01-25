
(function(){
    'use strict';

    bgsPlanCard.$inject = ['$log'];

    function bgsPlanCard( $log ){

        // --------------------
        // vars 
        // --------------------

        // --------------------
        // class factory 
        // --------------------

        var directive = {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                cardText:'@cardTitle',
                planItems:'@planItems'
            },

            templateUrl: 'app/directives/comparePlansCard/plan-card-tmpl.html'
        };

        return directive;

        // --------------------
        // functions 
        // --------------------


    }// END CLASS

    // --------------------
    // inject 
    // --------------------

    angular.module( 'bgsMythCardsApp' )
        .directive( 'bgsPlanCard', bgsPlanCard );

})();