'use strict';

mythApp.factory('mythExplorerModel', function() {
    var model = {

        numEmployeesTitleText: "There isn't another business quite like yours. That's why retirement plans must be unique. What kind of plan makes sense for your business? Let's start with your employees.",
        numEmployeesSubtitleText: "How many employees do you have?",

        blueCardTitleText : 'Time Myths',
        blueCardText : "Where will you find the time to think about your retirement when growing and managing your business takes top priority?  You might be surprised to learn it takes less time than you think.",

        greenCardTitleText : 'Money Myths',
        greenCardText : "Have you always thought retirement plans are too expensive? After all, it seems like there are a lot of fees and paperwork involved—and that takes money and time away from your business. Read on, and you may change your mind.",

        orangeCardTitleText : "Employee Myths",
        orangeCardText : "Maybe you suspect your employees aren’t interested in benefits. Or maybe you think benefits are a giant headache you don’t need. But the truth may surprise you.",

        soleTitle: "Myths for Sole Proprietorships",
        soleText: "You took the time to map out a plan for your business -- take the time now to start mapping out a plan for your comfortable retirement.",

        fiveToTenTitle: "Myths for businesses with Several Employees",
        fiveToTenText: "The benefits of a workplace retirement plan can often outweigh the necessary cost and oversight it may take to sponsor one. The potential tax advantages – deduction, deferral and start-up cost  credit  - offer an opportunity for you to start saving today and help your employees to do the same.",

        midSizeTitle: "Myths for businesess with Many Employees",
        midSizeText: "Waiting to offer a retirement plan could be standing in the way of attracting and retaining the top talent to help your company grow. Establishing a plan is not as time consuming as you may think.",

        getMythExplorerTitle: function( type ){

            switch( type ){

                case 'blue':
                    return {
                        text: this.blueCardText,
                        title: this.blueCardTitleText
                    };
                case 'green':
                    return {
                        text: this.greenCardText,
                        title: this.greenCardTitleText
                    };
                default:
                case 'orange':
                    return {
                        text: this.orangeCardText,
                        title: this.orangeCardTitleText
                    };
            }
        },

        lingoItems: ['Tax deferrals', "Tax credit", "Business deduction", "Fees", "SEP IRA", "SIMPLE IRA", "Matching contribution", "401(k) plan"],
        lingoItemPopups: ['Tax deferrals', "Tax credit", "Business deduction", "Fees", "SEP IRA", "SIMPLE IRA", "Matching contribution", "401(k) plan"],

        didYouKnowTextArray: ['didYouKnow.png', 'didYouKnow44.png', 'didYouKnow77.png', 'didYouKnowInvesting.png', 'didYouKnowTaxCredit.png'],


    };



    return model;
});

(function(){
    'use strict';

    bgsMythExplorerModel.$inject = ['$log'];

    function bgsMythExplorerModel( $log ){

        // --------------------
        // vars
        // --------------------

        var data = {
            numEmployeesTitleText: "There isn't another business quite like yours. That's why retirement plans must be unique. What kind of plan makes sense for your business? Let's start with your employees.",
            numEmployeesSubtitleText: "How many employees do you have?",

            blueCardTitleText : 'Time Myths',
            blueCardText : "Where will you find the time to think about your retirement when growing and managing your business takes top priority? You might be surprised to learn it takes less time than you think.",

            greenCardTitleText : 'Money Myths',
            greenCardText : "Have you always thought retirement plans are too expensive? After all, it seems like there are a lot of fees and paperwork involved—and that takes money and time away from your business. Read on, and you may change your mind.",

            orangeCardTitleText : "Employee Myths",
            orangeCardText : "Maybe you suspect your employees aren’t interested in benefits. Or maybe you think benefits are a giant headache you don’t need. But the truth may surprise you.",

            soleTitle: "Myths for Sole Proprietorships",
            soleText: "You took the time to map out a plan for your business -- take the time now to start mapping out a plan for your comfortable retirement.",

            fiveToTenTitle: "Myths for businesses with Several Employees",
            fiveToTenText: "The benefits of a workplace retirement plan can often outweigh the necessary cost and oversight it may take to sponsor one. The potential tax advantages – deduction, deferral and start-up cost  credit  - offer an opportunity for you to start saving today and help your employees to do the same.",

            midSizeTitle: "Myths for businesess with Many Employees",
            midSizeText: "Waiting to offer a retirement plan could be standing in the way of attracting and retaining the top talent to help your company grow. Establishing a plan is not as time consuming as you may think.",

            lingoItems: [
                'Tax deferrals',
                "Tax credit",
                "Business deduction",
                "Fees",
                "SEP IRA",
                "SIMPLE IRA",
                "Matching contribution",
                "401(k) plan"],

            lingoItemPopups: [
                'Tax deferrals',
                "Tax credit",
                "Business deduction",
                "Fees",
                "SEP IRA",
                "SIMPLE IRA",
                "Matching contribution",
                "401(k) plan"],

            didYouKnowTextArray: [
                'didYouKnow.png',
                'didYouKnow44.png',
                'didYouKnow77.png',
                'didYouKnowInvesting.png',
                'didYouKnowTaxCredit.png']
        };

        // --------------------
        // class factory
        // --------------------

        var service = {
            getMythExplorerTitle: getMythExplorerTitle,
            getLingoItem: getLingoItem,
            getLingoItemPopupText: getLingoItemPopupText,
            getDidYouKnowText: getDidYouKnowText
        };

        return service;

        // --------------------
        // functions
        // --------------------

        function getMythExplorerTitle( type ) {

            switch (type) {

                case 'blue':
                    return {
                        text: data.blueCardText,
                        title: data.blueCardTitleText
                    };
                case 'green':
                    return {
                        text: data.greenCardText,
                        title: data.greenCardTitleText
                    };
                default:
                case 'orange':
                    return {
                        text: data.orangeCardText,
                        title: data.orangeCardTitleText
                    };
            }
        }

        function getLingoItem( idx ){
            return data.lingoItems[ idx ];
        }

        function getLingoItemPopupText( idx ){
            return data.lingoItemPopups[ idx ];
        }

        function getDidYouKnowText( idx ){
            return data.didYouKnowTextArray[ idx ];
        }


    }// END CLASS

    // --------------------
    // inject
    // --------------------

    angular.module( 'bgsMythCardsApp' )
        .factory( 'bgsMythExplorerModel', bgsMythExplorerModel );

})();