(function () {
    'use strict';

    bgsAnimationService.$inject = ['$log', '$rootScope', '$timeout'];

    function bgsAnimationService( $log, $rootScope, $timeout ){

        // --------------------
        // vars
        // --------------------

        var ADD_HEADER_BAR = 'ADD_HEADER_BAR';
        var ADD_FOOTER_BAR = 'ADD_FOOTER_BAR';
        var ADD_START_PAGE = 'ADD_START_PAGE';
        var ADD_START_BACKGROUND = 'ADD_START_BACKGROUND';
        var ADD_MYTH_EXPLORER_BACKGROUND = 'ADD_MYTH_EXPLORER_BACKGROUND';

        // --------------------
        // class factory
        // --------------------

        var service = {
            ADD_HEADER_BAR: ADD_HEADER_BAR,
            ADD_FOOTER_BAR: ADD_FOOTER_BAR,
            ADD_START_PAGE: ADD_START_PAGE,
            ADD_START_BACKGROUND: ADD_START_BACKGROUND,
            ADD_MYTH_EXPLORER_BACKGROUND: ADD_MYTH_EXPLORER_BACKGROUND,

            startIntroAnimation: startIntroAnimation,

            broadcastAddStartBackground: broadcastAddStartBackground,
            broadcastAddHeaderBar: broadcastAddHeaderBar,
            broadcastAddFooterBar: broadcastAddFooterBar,
            broadcastAddStartPage: broadcastAddStartPage,
        };

        return service;

        // --------------------
        // functions
        // --------------------

        function startIntroAnimation() {
            $timeout( function() {
                broadcastAddStartBackground();
            }, 100);

            $timeout( function() {
                broadcastAddHeaderBar();
            }, 600);

            $timeout( function() {
                broadcastAddFooterBar();
            }, 1000);

            $timeout( function() {
                broadcastAddStartPage();
            }, 2000);
        }

        function broadcastAddStartBackground(){
            $rootScope.$broadcast( ADD_START_BACKGROUND );
        }

        function broadcastAddHeaderBar(){
            $rootScope.$broadcast( ADD_HEADER_BAR );
        }

        function broadcastAddFooterBar(){
            $rootScope.$broadcast( ADD_FOOTER_BAR );
        }

        function broadcastAddStartPage(){
            $rootScope.$broadcast( ADD_START_PAGE );
        }

    }// END CLASS

    // --------------------
    // inject
    // --------------------

    angular.module('bgsMythCardsApp')
        .factory('bgsAnimationService', bgsAnimationService);

})();
