/**
 * Created by douglas goodman on 2/15/15.
 */

(function(){
  'use strict';

  bgFanInOutCards.$inject = ['$log', 'EASE'];

  function bgFanInOutCards( $log, EASE ){
    //$log.debug( 'bgFanInOutCards LOADED');

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
      if( className === 'fan-in-out' ){

        //$log.debug( 'elementID =',  element[0].attributes['id'].value );

        var id = element[0].attributes['id'].value;
        var rot;
        if( id === '0' ){
          rot = 355;
        }
        else if( id === '1' ){
          rot = 360;
        }
        else{
          rot = 365;
        }

        TweenMax.to( element, EASE.long, {rotation: rot, transformOrigin:"50% 90%", ease:Power2.easeOut, onComplete: done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      if( className === 'fan-in-out' ){
        TweenMax.to( element, EASE.short, {rotation: 360, transformOrigin:"50% 90%", ease:Power2.easeOut, onComplete: done });
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
    .animation( '.fan-in-out', bgFanInOutCards );

})();
