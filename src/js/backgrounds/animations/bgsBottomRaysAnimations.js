/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bottomRaysAnime.$inject = ['$log', 'anime'];

  function bottomRaysAnime( $log, anime ){



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
        TweenMax.to( element, 1, {autoAlpha: .65, rotationX:70, transformOrigin:'20% 0%', transformPerspective:700, delay: 0});
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      $log.debug('bottomRaysAnime.beforeRemoveClass', className);

      if( className === 'bottomRaysAnime' ){
        TweenMax.to( element, anime.EASE_DUR, {autoAlpha: 0, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function pingComplete(){
      $log.debug('bottomRaysAnime.pingComplete');

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.bottomRaysAnime', bottomRaysAnime );

})();
