/**
 * Created by douglas goodman on 2/1/15.
 */

(function(){
  'use strict';

  bgsHeaderPhoneRolloverAnimation.$inject = ['$log', 'EASE'];

  function bgsHeaderPhoneRolloverAnimation( $log, EASE ){



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
      //$log.debug('bgsHeaderPhoneRolloverAnimation.beforeAddClass', className);

      if( className === 'phoneRollover' ){

        var cssStart = {
          top: 100,
          opacity: 0,
          display: 'block'
        };

        var css = {
          top: 45 ,
          opacity: 1
        };

        TweenMax.set( element, {css: cssStart});
        TweenMax.to( element, EASE.medium, {css: css, ease:Power2.easeOut, onComplete:done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug('bgsHeaderPhoneRolloverAnimation.beforeRemoveClass', className);

      if( className === 'phoneRollover' ){

        var css = {
          top: 100,
          opacity: 0
        };

        TweenMax.to( element, EASE.medium, {css: css, ease:Power2.easeOut, onComplete:onRemoveComplete, onCompleteParams: [element, done] });
      }
      else {
        done();
      }
    }

    function onRemoveComplete( element, done ){
      //$log.debug('bgsHeaderPhoneRolloverAnimation.onRemoveComplete');
      var css = {
        top: 100,
        opacity: 0,
        display: 'none'
      };

      TweenMax.set( element, {css: css, autoAlpha: 0});
      done();

    }


  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
      .animation( '.phoneRollover', bgsHeaderPhoneRolloverAnimation );

})();
