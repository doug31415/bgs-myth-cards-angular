/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bgsHeaderSectionAnimation.$inject = ['$log', 'EASE'];

  function bgsHeaderSectionAnimation( $log, EASE ){



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
      //$log.debug('bgsHeaderSectionAnimation.beforeAddClass', className);

      if( className === 'headerSectionAnimation' ){
        TweenMax.set( element, {autoAlpha: 0});
        TweenMax.to( element, EASE.medium, {autoAlpha: 1, ease:Power2.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bgsHeaderSectionAnimation.beforeRemoveClass', className);

      if( className === 'headerSectionAnimation' ){
        TweenMax.to( element, EASE.medium, {autoAlpha: 0, ease:Power2.easeOut, onComplete:onRemoveComplete, onCompleteParams: [element, done] });
      }
      else {
        done();
      }
    }

    function onRemoveComplete( element, done ){
      //$log.debug('bgsHeaderSectionAnimation.onRemoveComplete');

      TweenMax.set( element, {autoAlpha: 0});
      done();

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.headerSectionAnimation', bgsHeaderSectionAnimation );

})();
