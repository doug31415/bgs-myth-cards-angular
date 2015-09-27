/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bkgrndAnime.$inject = ['$log', 'EASE'];

  function bkgrndAnime( $log, EASE ){



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
      //$log.debug('bkgrndAnime.beforeAddClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 1, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bkgrndAnime.beforeRemoveClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 0, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function onRemoveComplete(){
      $log.debug('bkgrndAnime.onRemoveComplete');

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.bkgrndAnime', bkgrndAnime );

})();
