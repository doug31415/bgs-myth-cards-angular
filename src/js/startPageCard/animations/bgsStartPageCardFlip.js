/**
 * Created by douglas goodman on 2/15/15.
 */

(function(){
  'use strict';

  bgsStartPageCardFlip.$inject = ['$log', 'EASE'];

  function bgsStartPageCardFlip( $log, EASE ){
    //$log.debug( 'bgsStartPageCardFlip LOADED');

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
      //$log.debug('bgsStartPageCardFlip.beforeAddClass');

      if( className === 'startCardFlip' ){

        var wrapper = element.find( '.start-page-card-wrapper' );
        var card = element.find( '.card' );
        var reflection = element.find( '.reflection' );

        TweenMax.to( [card, reflection], EASE.xlong, { rotationX:-180, ease:Power2.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bgsStartPageCardFlip.beforeAddClass', className);

      if( className === 'startCardFlip' ){

        var cardFront = element.find( '.card-front' );
        var reflectionFront = element.find( '.reflection-front' );

        TweenMax.to( reflectionFront, EASE.long, { rotationX:0, ease:Power2.easeIn, onComplete:done })
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
    .animation( '.startCardFlip', bgsStartPageCardFlip );

})();
