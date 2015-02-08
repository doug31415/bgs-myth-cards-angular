/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bkgrndAnime.$inject = ['$log', 'anime'];

  function bkgrndAnime( $log, anime ){



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
      $log.debug('bkgrndAnime.beforeAddClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, 1, {autoAlpha: 1, ease:Linear.easeOut, onComplete:pingComplete });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      $log.debug('bkgrndAnime.beforeRemoveClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, anime.EASE_DUR, {autoAlpha: 0, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function pingComplete(){
      $log.debug('bkgrndAnime.pingComplete');

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.bkgrndAnime', bkgrndAnime );

})();
