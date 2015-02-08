

(function(){
    'use strict';

    bgsEmployeeCard.$inject = ['$log'];

    function bgsEmployeeCard( $log ){

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
            controller: controller,

            scope: {
                cardType:'@cardType',
                cardEvent:'@cardEvent',
                cardButtonText:'@cardButtonText',
                buttonState:'@buttonState'
            },

            templateUrl: 'app/directives/employeeCard/employee-card-tmpl.html'
        };

        return directive;

        // --------------------
        // functions 
        // --------------------

        function controller( $scope, $rootScope ) {

            $log.debug( '...cardType', $scope.cardType );

            $scope.onClick = function() {
                $rootScope.$broadcast( $scope.cardEvent );
            }
        }

    }// END CLASS

    // --------------------
    // inject 
    // --------------------

    angular.module( 'bgsMythCardsApp' )
        .directive( 'bgsEmployeeCard', bgsEmployeeCard );

})();