/**
 * Created by douglas goodman on 2/15/15.
 */

(function(){
  'use strict';

  bgsStartPageCardFlip.$inject = ['$log'];

  function bgsStartPageCardFlip( $log ){
  //$log.debug( 'bgsStartPageCardFlip LOADED');

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
      if( className === '.startCardFlip' ){
        // do stuff
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      if( className === '.startCardFlip' ){
        // do stuff
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
    .animation( '.startCardFlip', bgsStartPageCardFlip );

})();
