(function() {
  'use strict';

  bgsMythCardModel.$inject = [ '$log' ];

  function bgsMythCardModel( $log ) {

    // --------------------
    // vars
    // --------------------

    var BLUE = 'blue';
    var GREEN = 'green';
    var ORANGE = 'orange';

    var TIME = 'time';
    var MONEY = 'money';
    var EMPLOYEE = 'employee';

    var SOLE = 'sole';
    var TWO_TO_TEN = 'twoToTen';
    var MID_SIZE = 'midSize';

    var data = {
      blueCardText: [
        'Managing a retirement plan is going to be too complicated.',
        'Starting a retirement plan is going to take too much time.',
        'I have plenty of time to think about retirement planning later.'
      ],
      greenCardText: [
        'Selling my business is my retirement plan.',
        'Retirement plans are too expensive.',
        'I can afford to wait.'
      ],
      orangeCardText: [
        "My employees wouldn't be interested.",
        'I have to make contributions every year.',
        "I don't need to offer benefits to attract and keep employees."
      ]
    };

    // --------------------
    // class factory
    // --------------------

    var model = {
      getMythCardDataSet: getMythCardDataSet,
      getMythCardInfo: getMythCardInfo
    };

    return model;

    // --------------------
    // functions
    // --------------------

    function getMythCardDataSet( setId ) {
      switch( setId ) {
        case TIME:
          return [
            model.getMythCardInfo( BLUE, 0 ),
            model.getMythCardInfo( BLUE, 1 ),
            model.getMythCardInfo( BLUE, 2 ) ];

        case MONEY:
          return [
            model.getMythCardInfo( GREEN, 0 ),
            model.getMythCardInfo( GREEN, 1 ),
            model.getMythCardInfo( GREEN, 2 ) ];

        case EMPLOYEE:
          return [
            model.getMythCardInfo( ORANGE, 0 ),
            model.getMythCardInfo( ORANGE, 1 ),
            model.getMythCardInfo( ORANGE, 2 ) ];

        case SOLE:
          return [
            model.getMythCardInfo( BLUE, 0 ),
            model.getMythCardInfo( GREEN, 0 ),
            model.getMythCardInfo( ORANGE, 0 ) ];

        case TWO_TO_TEN:
          return [
            model.getMythCardInfo( BLUE, 1 ),
            model.getMythCardInfo( GREEN, 1 ),
            model.getMythCardInfo( ORANGE, 1 ) ];

        case MID_SIZE:
        default :
          return [
            model.getMythCardInfo( BLUE, 2 ),
            model.getMythCardInfo( GREEN, 2 ),
            model.getMythCardInfo( ORANGE, 2 ) ];
      }
    }

    function getMythCardInfo( type, pid ) {

      switch( type ) {

        case BLUE:
          return {
            pid: pid,
            color: BLUE,
            text: data.blueCardText[ pid ]
          };

        case GREEN:
          return {
            pid: pid,
            color: GREEN,
            text: data.greenCardText[ pid ]
          };

        default:
        case ORANGE:
          return {
            pid: pid,
            color: ORANGE,
            text: data.orangeCardText[ pid ]
          };
      }
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .factory( 'bgsMythCardModel', bgsMythCardModel );

})();
