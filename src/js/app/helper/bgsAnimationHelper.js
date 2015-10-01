
/**
 * Created by douglas goodman on 2/12/15.
 */

(function(){
  'use strict';

  bgsAnimationHelper.$inject = [ '$log', '$window'];

  function bgsAnimationHelper( $log, $window ){
    $log.debug( 'bgsAnimationHelper LOADED');

    // ----------------------------
    // vars
    // ----------------------------

    var PHONE_MAX = 480;
    var TABLET_MAX = 960;
    var MARGIN_OFFSET = 0;

    // ----------------------------
    // class factory
    // ----------------------------
    var service = {
      getAppWidth: getAppWidth,
      getAppHeight: getAppHeight,

      isPhone: isPhone,
      isTablet: isTablet,

      getElementCenterXpos: getElementCenterXpos,
      getElementCenterYpos: getElementCenterYpos,
    };

    return service;

    // ----------------------------
    // functions
    // ----------------------------

    function getAppWidth(){
      return $window.innerWidth;
    }

    function getAppHeight(){
      return $window.innerHeight;
    }

    function isPhone(){
      return getAppWidth() <= PHONE_MAX;
    }

    function isTablet(){
      var appW = getAppWidth();
      return appW <= TABLET_MAX && !isPhone();
    }

    function getElementCenterXpos( elemW ){
      return (getAppWidth() - elemW - MARGIN_OFFSET) / 2;
    }

    function getElementCenterYpos( elemH ){
      return (getAppHeight() - elemH - MARGIN_OFFSET*2) / 2; // slightly higher than center
    }



  }//END CLASS


  // ----------------------------
  // injection
  // ----------------------------

  angular.module( 'bgsMythCardsApp' )
    .factory( 'bgsAnimationHelper', bgsAnimationHelper );

})();
