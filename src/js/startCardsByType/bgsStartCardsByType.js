/**
 * Created by douglas goodman on 2/15/15
 */

(function() {
  'use strict';

  bgsStartCardsByType.$inject = [
    '$log',
    '$rootScope',
    '$timeout',
    'ANIME_EVENTS' ];

  function bgsStartCardsByType( $log, $rootScope, $timeout, ANIME_EVENTS ) {
    //$log.debug( 'bgsStartCardsByType LOADED');

    // --------------------
    // vars
    // --------------------

    // --------------------
    // class factory
    // --------------------

    var directive = {
      restrict: 'EA',
      replace: true,
      scope: {},
      controller: controller,
      controllerAs: 'cbtCtrl',
      bindToController: true,
      templateUrl: 'startCardsByType/start-cards-by-type-tmpl.html'
    };

    return directive;

    // --------------------
    // functions
    // --------------------

    function controller( $scope, $timeout, bgsAnimeTimings, bgsMythCardModel, ANIME_EVENTS ) {

      var self = this;

      self.addCards = false;
      self.fanInCards = false;
      self.fadeInTitle = false;

      self.timeCardData = bgsMythCardModel.getMythCardDataSet( 'time' );
      self.moneyCardData = bgsMythCardModel.getMythCardDataSet( 'money' );
      self.employeeCardData = bgsMythCardModel.getMythCardDataSet( 'employee' );

      // --------------------
      // listeners
      // --------------------

      //each related animation has a delay property to sequence the events
      $rootScope.$on( ANIME_EVENTS.startIntro, function() {
        //$log.debug( 'bgsStartCardsByType.startIntro' );
        $timeout( function() {
          self.fadeInTitle = true;
          //$log.debug( '...adding title' );
        }, bgsAnimeTimings.intro.showCategoryTitle * 1000 );

        $timeout( function() {
          self.addCards = true;
          //$log.debug( '...adding card wrapper' );
        }, bgsAnimeTimings.intro.showCategoryCards * 1000 );

      } );

      $rootScope.$on( ANIME_EVENTS.showBlotter, function(){
        $timeout( function() {
          self.fadeInTitle = false;
          self.addCards = false;
        }, bgsAnimeTimings.showBlotter.hideCategoryCards * 1000 );
      })

    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .directive( 'bgsStartCardsByType', bgsStartCardsByType );

})();
