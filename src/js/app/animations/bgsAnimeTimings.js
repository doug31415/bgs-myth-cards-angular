/**
 * Created by douglas goodman on 9/27/15
 */

 (function(){
  'use strict';

  bgsAnimeTimings.$inject = ['$log'];

  function bgsAnimeTimings( $log ){
  //$log.debug( 'bgsAnimeTimings LOADED');

  // --------------------
  // vars
  // --------------------
    // all timings in seconds
    var timings = {
      intro:{

        showStartCard: .5,
        showCategoryTitle: 1,
        showCategoryCards: 3,
        fanCategoryCards: 4,
        flipStartCard: 6,
        showHeaderLeft: 6.5,
        showHeaderRight: 6.9,
        showFooter: 7.3,
      },

      showBlotter: {
        hideStartCard:.25,
        hideCategoryCards:.5,
        addBlotter: 1
      }

    }

  // --------------------
  // class factory
  // --------------------

  var service = {
    timings: timings,
    intro: timings.intro,
    showBlotter: timings.showBlotter
  };

  return service;

  // --------------------
  // functions
  // --------------------

  function foo(){

  }

}// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .factory( 'bgsAnimeTimings', bgsAnimeTimings );

})();
