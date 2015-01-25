

(function () {
    'use strict';

    bgsNavigationService.$inject = ['$log', '$rootScope'];

    function bgsNavigationService( $log, $rootScope ){

        // --------------------
        // vars
        // --------------------

        var START_STATE = 'START_STATE';
        var EXPLORER_TIME_STATE = 'EXPLORER_TIME_STATE';
        var EXPLORER_MONEY_STATE = 'EXPLORER_MONEY_STATE';
        var EXPLORER_EMPLOYEE_STATE = 'EXPLORER_EMPLOYEE_STATE';
        var COMPARE_PLANS_STATE = 'COMPARE_PLANS_STATE';
        var EXPLORER_NUM_EMPLOYEE_STATE = 'EXPLORER_NUM_EMPLOYEE_STATE';

        var currentState = START_STATE;


        // --------------------
        // class factory
        // --------------------

        var service = {
            START_STATE: START_STATE,
            EXPLORER_TIME_STATE: EXPLORER_TIME_STATE,
            EXPLORER_MONEY_STATE: EXPLORER_MONEY_STATE,
            EXPLORER_EMPLOYEE_STATE: EXPLORER_EMPLOYEE_STATE,
            COMPARE_PLANS_STATE: COMPARE_PLANS_STATE,
            EXPLORER_NUM_EMPLOYEE_STATE: EXPLORER_NUM_EMPLOYEE_STATE,

            getCurrentState: getCurrentState,
            setCurrentState: setCurrentState,

            navigateToState: navigateToState
        };

        return service;

        // --------------------
        // functions
        // --------------------

        function navigateToState( requestedState, data ){
            $log.debug( 'bgsNavigationService.navigateToState : ' + requestedState );

            $rootScope.$broadcast( requestedState, data );

            // save this off so we can poll the class for what page we are on
            currentState = requestedState;
        }

        function getCurrentState(){
            return currentState;
        }

        function setCurrentState( val ){
            currentState = val;
        }

    }// END CLASS

    // --------------------
    // inject
    // --------------------

    angular.module('bgsMythCardsApp')
        .factory('bgsNavigationService', bgsNavigationService);

})();



