

(function(){

    'use strict';

    bgsStartPageController.$inject = [ '$log', 'bgsNavigationService', 'bgsAnimationService', 'bgsMythCardModel' ];

    function bgsStartPageController( $log, bgsNavigationService, bgsAnimationService, bgsMythCardModel ){
        //$log.debug( 'bgsStartPageController LOADED');

        // -------------------------
        // vars
        // -------------------------

        var self = this;

        // -------------------------
        // model

        // -------------------------
        // other

        self.isHidden;
        self.introCardStartHidden;
        self.introCardHidden;

        self.set1Cards = bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.TIME );
        self.set2Cards = bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.MONEY );
        self.set3Cards = bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.EMPLOYEE );


        // -------------------------
        // business logic
        // -------------------------

        self.init = function () {
            self.isHidden = true;
            self.introCardStartHidden = true;
            self.introCardHidden = true;

        };

        self.onStartButtonClick = function () {
            bgsNavigationService.navigateToState( bgsNavigationService.EXPLORER_NUM_EMPLOYEE_STATE );
            self.removeStartContainer();
            bgsAnimationService.broadcastAddMythExplorerBackground();
        };

        self.onMouseOverSet = function ( type ) {
            //self[ 'fanOut_' + type ]( 0, 0, 0 );
        };

        self.onMouseLeaveSet = function ( type ) {
            var rot1 = -5;
            var rot2 = rot1 * -1;
            //`self[ 'fanOut_' + type ]( rot1, rot2, 0 );
        };

        self.onClickSet = function ( type ) {

            return;

            var eventType;

            switch( type ){
                case 'set1':
                    eventType = bgsNavigationService.EXPLORER_TIME_STATE;
                    break;

                case 'set2':
                    eventType = bgsNavigationService.EXPLORER_MONEY_STATE;
                    break;

                case 'set3':
                default:
                    eventType = bgsNavigationService.EXPLORER_EMPLOYEE_STATE;
                    break;
            }

            bgsNavigationService.navigateToState( eventType );
            self.removeStartContainer();
        };

        self.getCardInfo = function (type, id) {
            console.log('StartPageController.getCardInfo()');
            console.log('...type: ' + type);
            console.log('...id: ' + id);

            var cardInfo = bgsMythCardModel.getMythCardInfo(type, id);

            console.log('...cardInfo: ' + JSON.stringify(cardInfo));

            return cardInfo;
        };


        // -----------------------------------------------------------
        // animations
        // -----------------------------------------------------------

        // -----------------------------------------------------------
        // intro build animation

        self.introAnimationSetup = function(){

            self.isHidden = false;
            self.introCardStartHidden = false;

            TweenLite.set( introCard, {alpha:1, rotationX:-90, transformPerspective:1000});
            TweenLite.set( introCardReflection, {alpha:1, rotationX:90, transformPerspective:1000});

            TweenLite.set( introCardStart, {alpha:0, rotationX:0, transformPerspective:1000});
            TweenLite.set( introCardStartReflection, {alpha:0, rotationX:0, transformPerspective:1000});

            TweenLite.set( subText, {alpha:0});

            TweenLite.set( set1, {alpha:0});
            TweenLite.set( set2, {alpha:0});
            TweenLite.set( set3, {alpha:0});

            self.$digest();

            self.introAnimation();
        };


        self.introAnimation = function(){

            TweenLite.to( introCardStart, 1, {autoAlpha:1, delay:0 });
            TweenLite.to( introCardStartReflection, 1, {autoAlpha:1, delay:0 });

            TweenLite.to( subText, 1, {autoAlpha:1, delay:.5 });

            TweenLite.to( set1, 1, {autoAlpha:1, delay:1 });
            TweenLite.to( set2, 1, {autoAlpha:1, delay:1.5 });
            TweenLite.to( set3, 1, {autoAlpha:1, delay:2 });

            TweenMax.to( introCardStart, 1, { rotationX:90, transformPerspective:1000, delay:2.5, ease:Power2.easeIn, onComplete: self.onCardHalfFlipped })
            TweenMax.to( introCardStartReflection, 1, { rotationX:-90, transformPerspective:1000, delay:2.5, ease:Power2.easeIn })

        };

        self.removeStartContainer = function () {
            self.showMythExplorerBackground = true;
            TweenLite.set(startContainer, {alpha: 1});
            TweenMax.to(startContainer, .75, {alpha: 0, ease: Power2.easeOut, onComplete: self.onRemoveStartBoxComplete});
        };
        ;

        self.onRemoveStartBoxComplete = function () {
            self.showStartPageBackground = false;
            self.isHidden = true;
        };

        self.onCardHalfFlipped = function(){

            self.introCardStartHidden = true;
            self.introCardHidden = false;
            self.$digest();

            TweenMax.to( introCard, 1, { rotationX:0, transformPerspective:1000, ease:Power2.easeOut, onComplete: self.fanOutCards() })
            TweenMax.to( introCardReflection, 1, { rotationX:0, transformPerspective:1000, ease:Power2.easeOut, onComplete: self.fanOutCards() })
        }


        self.fanOutCards = function(){
            var rot1 = -5;
            var rot2 = rot1 * -1;
            var delay = 1;

            self.fanOut_set1( rot1, rot2, delay );
            self.fanOut_set2( rot1, rot2, delay + .1 );
            self.fanOut_set3( rot1, rot2, delay + .2 );
        }

        self.fanOut_set1 = function( rot1, rot2, delay ){

            TweenMax.to( time2, .5, { rotation:rot1, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
            TweenMax.to( time1, .5, { rotation:rot2, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
        }

        self.fanOut_set2 = function( rot1, rot2, delay ){

            TweenMax.to( money2, .5, { rotation:rot1, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
            TweenMax.to( money1, .5, { rotation:rot2, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
        }

        self.fanOut_set3 = function( rot1, rot2, delay ){

            TweenMax.to( employee2, .5, { rotation:rot1, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
            TweenMax.to( employee1, .5, { rotation:rot2, transformOrigin:"50% 90%", ease:Power2.easeOut, delay: delay });
        }

        // -------------------------
        // listeners
        $scope.$on( bgsNavigationService.COMPARE_PLANS_STATE, function(){
            console.log('bgsStartPageController.COMPARE_PLANS_STATE()');
            self.removeStartContainer();
        });

        $scope.$on( bgsAnimationService.ADD_START_PAGE, function(){
            self.introAnimationSetup();
        });


    }// END CLASS

    // -------------------------
    // inject
    // -------------------------

    angular.module('bgsMythCardsApp')
        .controller('bgsStartPageController', bgsStartPageController );

})();

