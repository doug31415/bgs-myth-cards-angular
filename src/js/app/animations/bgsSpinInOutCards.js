/**
 * Created by douglas goodman on 2/15/15.
 */

(function() {
  'use strict';

  bgsSpinInOutCards.$inject = [
    '$log',
    'EASE' ];

  function bgsSpinInOutCards( $log, EASE ) {
    //$log.debug( 'bgsSpinInOutCards LOADED');

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

    function beforeAddClass( element, className, done ) {
      if( className === 'spin-in-out' ) {
        TweenMax.set( element, {
          width: '100%',
          height: '200%'
        } );
        TweenMax.to( element, EASE.long,
          {
            css: {
              rotation: 360,
              width: '50%',
              height: '100%',
              marginLeft: '25%',
              marginRight: 'auto'
            },
            onComplete: done
          } );
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ) {
      if( className === 'spin-in-out' ) {
        TweenMax.to( element, EASE.short,
          {
            css: {
              rotation: -360,
              width: '50%',
              height: '100%',
              marginLeft: '25%',
              marginRight: 'auto'
            },
          } );
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
    .animation( '.spin-in-out', bgsSpinInOutCards );

})();
