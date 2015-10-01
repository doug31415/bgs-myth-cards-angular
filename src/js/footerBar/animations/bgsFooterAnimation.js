/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bgsFooterAnimation.$inject = ['$log', 'EASE'];

  function bgsFooterAnimation( $log, EASE ){



    // --------------------
    // vars
    // --------------------

    // --------------------
    // setup
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
      //$log.debug('bgsFooterAnimation.beforeAddClass', className);

      if( className === 'bgsFooterAnimation' ){
        TweenMax.to( element, EASE.long, { autoAlpha: 1, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bgsFooterAnimation.beforeRemoveClass', className);

      if( className === 'bgsFooterAnimation' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 0, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function onRemoveComplete(){
      $log.debug('bgsFooterAnimation.onRemoveComplete');

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.bgsFooterAnimation', bgsFooterAnimation );

})();
