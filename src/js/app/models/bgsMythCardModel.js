

(function(){
    'use strict';

    bgsMythCardModel.$inject = ['$log'];

    function bgsMythCardModel( $log ){

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
            blueCardText : [
                'Managing a retirement plan is going to be too complicated.',
                'Starting a retirement plan is going to take too much time.',
                'I have plenty of time to think about retirement planning later.'
            ],
            greenCardText : [
                'Selling my business is my retirement plan.',
                'Retirement plans are too expensive.',
                'I can afford to wait.'
            ],
            orangeCardText : [
                "My employees wouldn't be interested.",
                'I have to make contributions every year.',
                "I don't need to offer benefits to attract and keep employees."
            ]
        };

        // --------------------
        // class factory
        // --------------------

        var service = {
            getMythCardDataSet: getMythCardDataSet,
            getMythCardInfo: getMythCardInfo
        };

        return service;

        // --------------------
        // functions
        // --------------------

        function getMythCardDataSet( setId ){
            switch( setId ){
                case TIME:
                    return { 'myth_card_0': getMythCardInfo( BLUE, 0 ),
                        'myth_card_1': getMythCardInfo( BLUE, 1 ),
                        'myth_card_2': getMythCardInfo( BLUE, 2 )};

                case MONEY:
                    return  { 'myth_card_0': getMythCardInfo( GREEN, 0 ),
                        'myth_card_1': getMythCardInfo( GREEN, 1 ),
                        'myth_card_2': getMythCardInfo( GREEN, 2 )};

                case EMPLOYEE:
                    return  { 'myth_card_0': getMythCardInfo( ORANGE, 0 ),
                        'myth_card_1': getMythCardInfo( ORANGE, 1 ),
                        'myth_card_2': getMythCardInfo( ORANGE, 2 )};

                case SOLE:
                    return  { 'myth_card_0': getMythCardInfo( BLUE, 0 ),
                        'myth_card_1': getMythCardInfo( GREEN, 0 ),
                        'myth_card_2': getMythCardInfo( ORANGE, 0 )};

                case TWO_TO_TEN:
                    return  { 'myth_card_0': getMythCardInfo( BLUE, 1 ),
                        'myth_card_1': getMythCardInfo( GREEN, 1 ),
                        'myth_card_2': getMythCardInfo( ORANGE, 1 )};

                case MID_SIZE:
                default :
                    return  { 'myth_card_0': getMythCardInfo( BLUE, 2 ),
                        'myth_card_1': getMythCardInfo( GREEN, 2 ),
                        'myth_card_2': getMythCardInfo( ORANGE, 2 )};
            }

            function getMythCardInfo( type, pid ){

                switch( type ){

                    case BLUE:
                        return {
                            pid: pid,
                            color: BLUE,
                            text: data.blueCardText[pid]
                        };

                    case GREEN:
                        return {
                            pid: pid,
                            color: GREEN,
                            text: data.greenCardText[pid]
                        };

                    default:
                    case ORANGE:
                        return {
                            pid: pid,
                            color: ORANGE,
                            text: data.orangeCardText[pid]
                        };
                }
            }
        }

    }// END CLASS

    // --------------------
    // inject
    // --------------------

    angular.module( 'bgsMythCardsApp' )
        .factory( 'bgsMythCardModel', bgsMythCardModel );

})();
