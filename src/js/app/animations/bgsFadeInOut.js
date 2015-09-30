/**
 * Created by douglas goodman on 2/15/15.
 */

(function(){
  'use strict';

  bgsFadeInOut.$inject = ['$log', 'EASE'];

  function bgsFadeInOut( $log, EASE ){
    //$log.debug( 'bgsFadeInOut LOADED');

    // --------------------
    // vars
    // --------------------

    // --------------------
    // init
    // --------------------

    // --------------------
    // class factory
    // --------------------

    var animations = {
      beforeAddClass: beforeAddClass,
      beforeRemoveClass: beforeRemoveClass
    };

    return animations;

    // --------------------
    // functions
    // --------------------

    function beforeAddClass( element, className, done ){
      if( className === 'fade-in-out' ){
        //$log.debug( 'bgsFadeInOut.beforeAddClass');
        TweenMax.to( element, 1, {autoAlpha: 1, onComplete: done});
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      if( className === 'fade-in-out' ){
        //$log.debug( 'bgsFadeInOut.beforeAddClass');
        TweenMax.to( element, 1, {autoAlpha: 0, onComplete: done});
      }
      else {
        done();
      }
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .animation( '.fade-in-out', bgsFadeInOut );

})();
