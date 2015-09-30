/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

<<<<<<< HEAD
  bkgrndAnime.$inject = ['$log', 'EASE'];

  function bkgrndAnime( $log, EASE ){
=======
  fader.$inject = ['$log', 'animations'];

  function fader( $log, animations ){
>>>>>>> master



    // --------------------
    // vars
    // --------------------

<<<<<<< HEAD
=======
    var elem = $('.mythExplorerBackground');

>>>>>>> master
    // --------------------
    // setup
    // --------------------

<<<<<<< HEAD
=======
    animations.TweenMax.set( elem, {alpha:0} );

>>>>>>> master
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
<<<<<<< HEAD
      //$log.debug('bkgrndAnime.beforeAddClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 1, ease:Linear.easeOut, onComplete:done });
=======
      $log.debug('fader.beforeAddClass', className);
      $log.debug('...elem', elem);
      if( className === '.fader' ){
        animations.TweenMax.to( elem, 5, {alpha: 1, ease:Linear.easeOut, onComplete:done });
>>>>>>> master
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
<<<<<<< HEAD
      //$log.debug('bkgrndAnime.beforeRemoveClass', className);

      if( className === 'bkgrndAnime' ){
        TweenMax.to( element, EASE.long, {autoAlpha: 0, ease:Linear.easeOut, onComplete:done });
=======
      $log.debug('fader.beforeRemoveClass', className);

      if( className === '.fader' ){
        animations.TweenMax.to( elem, 5, {alpha: 0, ease:Linear.easeOut, onComplete:done });
>>>>>>> master
      }
      else {
        done();
      }
    }

<<<<<<< HEAD
    function onRemoveComplete(){
      $log.debug('bkgrndAnime.onRemoveComplete');

    }

=======
>>>>>>> master

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
<<<<<<< HEAD
      .animation( '.bkgrndAnime', bkgrndAnime );

})();
=======
      .animation( '.fader', fader );

})();
>>>>>>> master
