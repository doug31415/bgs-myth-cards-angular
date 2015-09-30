/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  fader.$inject = ['$log', 'animations'];

  function fader( $log, animations ){



    // --------------------
    // vars
    // --------------------

    var elem = $('.mythExplorerBackground');

    // --------------------
    // setup
    // --------------------

    animations.TweenMax.set( elem, {alpha:0} );

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
      $log.debug('fader.beforeAddClass', className);
      $log.debug('...elem', elem);
      if( className === '.fader' ){
        animations.TweenMax.to( elem, 5, {alpha: 1, ease:Linear.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      $log.debug('fader.beforeRemoveClass', className);

      if( className === '.fader' ){
        animations.TweenMax.to( elem, 5, {alpha: 0, ease:Linear.easeOut, onComplete:done });
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
      .animation( '.fader', fader );

})();