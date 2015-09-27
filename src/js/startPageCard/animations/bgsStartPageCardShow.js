/**
 * Created by douglas goodman on 2/15/15.
 */

(function(){
  'use strict';

  bgsStartPageCardShow.$inject = ['$log', 'EASE'];

  function bgsStartPageCardShow( $log, EASE ){
  //$log.debug( 'bgsStartPageCardShow LOADED');

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
      $log.debug('bgsStartPageCardShow.beforeAddClass');

      if( className === 'startCardShow' ){

        var wrapper = element.find( '.start-page-card-wrapper' );

        var card = element.find( '.card' );
        var cardFront = element.find( '.card-front' );
        var cardBack = element.find( '.card-back' );

        var reflection = element.find( '.reflection' );
        var reflectionFront = element.find( '.reflection-front' );
        var reflectionBack = element.find( '.reflection-back' );

        TweenMax.set( wrapper, {autoAlpha:1,  perspective:1000 });
        TweenMax.set( [card, reflection], {autoAlpha:1, transformStyle:'preserve-3d'});
        TweenMax.set( [cardFront, cardBack, reflectionFront, reflectionBack], {backfaceVisibility:'hidden'});
        TweenMax.set( [cardBack, reflectionBack], {rotationX: -180});
        TweenMax.set( card, {rotationX:90});
        TweenMax.set( reflection, {rotationX:-90});

        TweenMax.to( [card, reflection], EASE.xlong, { rotationX:0, delay:2, ease:Power2.easeOut });
        TweenMax.to( [card, reflection], EASE.xlong, { delay: 4, rotationX:-180, ease:Power2.easeOut, onComplete:done });

      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      $log.debug('bgsStartPageCardShow.beforeAddClass', className);

      if( className === 'startCardShow' ){

        var cardFront = element.find( '.card-front' );
        var reflectionFront = element.find( '.reflection-front' );

        //TweenMax.set( [cardFront, reflectionFront], {alpha:1,  perspective:1000, backfaceVisibility: hidden, transformStyle:'preserve-3d'});
        //TweenMax.set( cardFront, {rotationX:90});
        //TweenMax.set( reflectionFront, {rotationX:-90});

        TweenMax.to( cardFront, EASE.long, { rotationX:90, delay:2.5, ease:Power2.easeIn, onComplete:done });
        TweenMax.to( reflectionFront, EASE.long, { rotationX:-90, delay:2.5, ease:Power2.easeIn, onComplete:done })

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
    .animation( '.startCardShow', bgsStartPageCardShow );

})();
