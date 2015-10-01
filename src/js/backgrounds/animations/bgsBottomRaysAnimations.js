/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bottomRaysAnime.$inject = ['$log' ,'EASE'];

  function bottomRaysAnime( $log, EASE ){



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
      $log.debug('bottomRaysAnime.beforeAddClass', className);

      if( className === 'bottomRaysAnime' ){
        TweenMax.set( element, {autoAlpha:0});
        TweenMax.to( element, EASE.long, {autoAlpha: .65, rotationX:70, transformOrigin:'30% 0%', transformPerspective:700, delay: 0});
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bottomRaysAnime.beforeRemoveClass', className);

      if( className === 'bottomRaysAnime' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 0, ease:Linear.easeOut, onComplete:onRemoveComplete, onCompleteParams:[element, done] });
      }
      else {
        done();
      }
    }

    function onRemoveComplete( element, done ){
      $log.debug('bottomRaysAnime.onRemoveComplete');
      TweenMax.set( element, {autoAlpha:0});
      done();

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.bottomRaysAnime', bottomRaysAnime );

})();
