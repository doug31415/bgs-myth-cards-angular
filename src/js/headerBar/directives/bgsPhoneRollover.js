

(function(){
    'use strict';

    bgsPhoneRollover.$inject = ['$log'];

    function bgsPhoneRollover( $log ){

        // --------------------
        // vars 
        // --------------------

        // --------------------
        // class factory 
        // --------------------

        var directive = {
            restrict: 'EA',
            templateUrl: 'headerBar/directives/phone-number-popup-tmpl.html',
            replace: true
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
        .directive( 'bgsPhoneRollover', bgsPhoneRollover );

})();