

(function(){
    'use strict';

    bgsComparePlansModel.$inject = ['$log'];

    function bgsComparePlansModel( $log ){

        // FORMERLY factModel

        // --------------------
        // vars
        // --------------------

        var data = {

            // ------------------------------------------
            Y: [ [true, false, false, false], [false, false, false, false], [false, false, false, false] ],
            N: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            // ------------------------------------------
            YY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NY: [ [true, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NN: [ [true, false, false, false], [false, false, false, false], [false, false, false, false] ],

            // ------------------------------------------
            YYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            YYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            // ------------------------------------------
            YYYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNYY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            YYNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNNY: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            YYYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNYN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],

            YYNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            YNNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NYNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ],
            NNNN: [ [false, false, false, false], [false, false, false, false], [false, false, false, false] ]
        };

        // --------------------
        // class factory
        // --------------------

        var service = {
            data: data
        };

        return service;

        // --------------------
        // functions
        // --------------------

    }// END CLASS

    // --------------------
    // inject
    // --------------------

    angular.module( 'bgsMythCardsApp' )
        .factory( 'bgsComparePlansModel', bgsComparePlansModel );

})();
