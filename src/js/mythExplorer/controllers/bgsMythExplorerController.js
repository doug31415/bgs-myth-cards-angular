
(function(){

  'use strict';

  bgsMythCardExplorerController.$inject = [ '$log' ];

  function bgsMythCardExplorerController( $log, bgsNavigationService , bgsMythExplorerModel, bgsMythCardModel, bgsFactModel ){
    //$log.debug( 'bgsMythCardExplorerController LOADED');
    
    // -------------------------
    // vars
    // -------------------------
    
    var self = this;

    // -------------------------
    // model


    // -------------------------
    // other

      self.isHidden = true;
      self.employeeCardsHidden = true;
      self.mythCardsHidden = true;
      self.lingoTextHidden = true;
      self.topTextAreaHidden = true;
      self.factPadHidden = true;
      self.didYouKnowTextHidden = true;
      self.prevButtonHidden = true;
      self.nextButtonHidden = true;

      self.mythCardClickEnabled = true;
      self.nextEnabled = true;
      self.prevEnabled = true;

      self.mythCardArray = []; // an array of the selected card dom elements, kept in order
      self.mythCardDataModel = {}; // a hash of the model objects used to build the card elements

      self.title = false;
      self.subtitle = false;

      self.queuedTitle = false;
      self.queuedSubtitle = false;

      self.didYouKnowImg = ''; // source of the did you know image to the right

      self.currentCardIndex = 0; // index of the current card for next and back

      self.factTextArray = [];


    // -------------------------
    // business logic
    // -------------------------

      self.init = function () {
          //console.log('MythExplorerController.init');

          self.title = bgsMythExplorerModel.numEmployeesTitleText;
          self.subtitle = bgsMythExplorerModel.numEmployeesSubtitleText;

          self.isHidden = true;
          self.employeeCardsHidden = true;
          self.mythCardsHidden = true;
          self.lingoTextHidden = true;
          self.topTextAreaHidden = true;
          self.factPadHidden = true;
          self.didYouKnowTextHidden = true;
          self.prevButtonHidden = true;
          self.nextButtonHidden = true;
          self.mythCardClickEnabled = true;
      };

      // returns the model object used to build a single myth card
      self.getCardInfo = function (clr, idx) {
          return  bgsMythCardModel.getCardInfo(clr, idx);
      };

      // used to build the list of lingo items to the right
      self.getLingoItems = function () {
          return bgsMythExplorerModel.lingoItems;
      };

      // returns a random item from the set of Did You Know images
      self.setRandomDidYouKnowText = function () {
          var len = bgsMythExplorerModel.didYouKnowTextArray.length - 1;
          var rand = Math.round(Math.random() * len);
          self.didYouKnowImg = bgsMythExplorerModel.didYouKnowTextArray[ rand ];
      };

      // -----------------------------------------------------------
      // animations
      // -----------------------------------------------------------

      // -----------------------------------------------------------
      // animation to show the employee cards (intro animation)

      self.addBlotter = function ( then ) {

          self.isHidden = false;
          self.employeeCardsHidden = false;

          TweenLite.set(mythExplorerContainer, {perspective: 1000});
          TweenLite.set(blotter, {alpha: 0, top: 1600, rotationX: 180});
          TweenLite.set(employeeCards, {alpha: 0});

          TweenLite.to(blotter, 1, {alpha: 1, top: 100, ease: Power2.easeOut, onComplete: self.onAddBlotterComplete, onCompleteParams:[then]});
          TweenLite.to(blotter, 1, {rotationX: 0, transformOrigin: "50% 100%"});
      };

      self.onAddBlotterComplete = function ( then ) {
          console.log('MythExplorerController.onAddBlotterComplete then = ' + then );

          if( then == NavigationService.EXPLORER_NUM_EMPLOYEE_STATE ){
              self.addEmployeeCards();
          }
          else{
              self.setUpMythCards( then );
              self.showMythCards( then );
          }

      };

      self.setUpMythCards = function( then ){

          var titles;

          switch( then ){
              case NavigationService.EXPLORER_TIME_STATE:
                  titles = bgsMythExplorerModel.getMythExplorerTitle( 'blue' );
                  self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.TIME );
                  break;

              case  NavigationService.EXPLORER_MONEY_STATE:
                  titles = bgsMythExplorerModel.getMythExplorerTitle( 'green' );
                  self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.MONEY );
                  break;

              case NavigationService.EXPLORER_EMPLOYEE_STATE:
                  titles = bgsMythExplorerModel.getMythExplorerTitle( 'orange' );
                  self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.EMPLOYEE );
              default:
                  break;
          }

          self.mythCardsHidden = false;
          self.lingoTextHidden = false;
          self.topTextAreaHidden = false;

          TweenLite.set(mythCards, {alpha: 0});
          TweenLite.set(topTextArea, {alpha: 0});
          TweenLite.set(lingoText, {alpha: 0});

          self.queuedTitle = titles.title;
          self.queuedSubtitle = titles.text;
      }

      self.addEmployeeCards = function () {
          TweenLite.to(employeeCards, 1, {alpha: 1, onComplete: self.onAddEmployeeCardsComplete});
      };

      self.onAddEmployeeCardsComplete = function () {

      };

      // -----------------------------------------------------------
      // animation to hide the employee cards and show the myth cards (on employee card click)

      self.hideEmployeeCards = function () {

          self.mythCardsHidden = false;
          self.lingoTextHidden = false;
          self.topTextAreaHidden = false;

          TweenLite.set(mythCards, {alpha: 0});
          TweenLite.set(topTextArea, {alpha: 0});
          TweenLite.set(lingoText, {alpha: 0});

          TweenLite.to(employeeCards, .5, {autoAlpha: 0, onComplete: self.showMythCards});
      };

      self.showMythCards = function () {

          console.log( 'MythExplorerController.showMythCards' );

          self.employeeCardsHidden = true;
          self.title = self.queuedTitle;
          self.subtitle = self.queuedSubtitle;
          self.$digest();

          TweenLite.to(mythCards, 1, {autoAlpha: 1, onComplete: self.onShowMythCardsComplete});
          TweenLite.to(topTextArea, 1, {alpha: 1, delay: 0});
          TweenLite.to(lingoText, 1, {alpha: 1, delay: .75});
      };

      self.onShowMythCardsComplete = function () {

      };

      // -----------------------------------------------------------
      // animation on myth card click

      self.onMythCardClick = function( card, removeArray ){
          console.log ('MythExplorerController.onMythCardClick' );

          TweenLite.set( factPad, {alpha:0});
          TweenLite.set( didYouKnowTextArea, {alpha:0});

          TweenLite.set( prevButton, {alpha:0} );
          TweenLite.set( nextButton, {alpha:0} );

          TweenLite.to( lingoText, 1, {autoAlpha:0} );
          TweenLite.to( topTextArea, 1, {autoAlpha:0} );

          // the first element in the array is moved to the upper left
          TweenLite.to(  self.mythCardArray[0], 1, {delay:.25, top:-20, left:-20, rotation:370, onComplete: self.onMoveMythCardComplete} );

          // the subsequent elements are moved off screen
          TweenLite.to( self.mythCardArray[1], 1, {delay:.35, top:700, left:500, rotation:370, autoAlpha:0} );
          TweenLite.to( self.mythCardArray[2], 1, {delay:.35, top:700, left:500, rotation:370, autoAlpha:0, onComplete: self.onRemoveMythCardComplete} );

      };

      self.onMoveMythCardComplete = function () {
          console.log('MythExplorerController.onMoveMythCardComplete');

          self.lingoTextHidden = true;
          self.topTextAreaHidden = true;
          self.factPadHidden = false;
          self.didYouKnowTextHidden = false;
          self.nextButtonHidden = false;

          self.setRandomDidYouKnowText();

          self.$digest();

          TweenLite.to(factPad, 1, {autoAlpha: 1});
          TweenLite.to(didYouKnowTextArea, 1, {autoAlpha: 1, delay: .5});
          TweenLite.to(nextButton, 1, {autoAlpha: 1, delay: 1});
      };

      self.onRemoveMythCardComplete = function () {
          console.log('MythExplorerController.onRemoveMythCardComplete');

          self.mythCardClickEnabled = false;

          // change the stacking order so that the first card is in front
          // and the rest fall under it in descending order
          $.each(self.mythCardArray, function (idx, card) {
              card.style.zIndex = 200 - idx;

              if (idx > 0) {
                  // move the other cards into place
                  TweenLite.set(card, { top: -20, left: -20, rotation: 370, alpha: 1 });
              }
              ;
          });

          self.$digest();

          self.fanOutMythCards();

      };

      self.fanOutMythCards = function () {
          $.each(self.mythCardArray, function (idx, card) {

              if (idx > 0) {
                  // the first one is already in place
                  var rotation = 370 - (idx * 5);
                  TweenLite.to(card, .5, {rotation: rotation, delay: 1, autoAlpha: 1 });
              }
              ;
          });
      };


      // -----------------------------------------------------------
      // on next/back

      self.onNext = function () {
          console.log('MythExplorerController.onNext');

          self.currentCardIndex++;

          if (self.currentCardIndex == 1) {
              TweenLite.to(prevButton, 1, {autoAlpha: 1, delay: 1});
          }
//
//        if( self.currentCardIndex == self.mythCardArray.length - 1 ){
//            $('#nextButton').text( 'The Reality Is' );
//        }

          var card = self.mythCardArray[0];

          TweenLite.to(card, .5, { top: -20, left: 165, rotation: 380, onComplete: self.onFlipOutComplete });
          self.fadeOutFacts();

          // then resort the arrays so that the first element is in the last position
          self.mythCardArray.splice(2, 0, self.mythCardArray.splice(0, 1)[0]);
      };

      self.onPrev = function () {
          console.log('MythExplorerController.onPrev');

          self.currentCardIndex--;

          if (self.currentCardIndex == 0) {
              TweenLite.to(prevButton, 1, {autoAlpha: 0, delay: .5});
          }
//
//        if( self.currentCardIndex == self.mythCardArray.length - 2 ){
//            $('#nextButton').text( 'Next Myth >' );
//        }

          var card = self.mythCardArray[2];

          TweenLite.to(card, .5, { top: -20, left: 165, rotation: 380, onComplete: self.onFlipOutComplete });
          self.fadeOutFacts();

          // then resort the array so that the last element is in the first position
          self.mythCardArray.splice(0, 0, self.mythCardArray.splice(2, 1)[0]);
      };



      self.onFlipOutComplete = function(){
          console.log ('MythExplorerController.onFlipOutComplete' );

          $.each( self.mythCardArray, function( idx, card ){
              console.log ('...card = ' + JSON.stringify( card.id ) );
              card.style.zIndex = 200 - idx;

          });

          self.$digest();

          self.flipBackIn();

      };

      self.flipBackIn = function(){
          console.log ('MythExplorerController.flipBackIn' );

          $.each( self.mythCardArray, function( idx, card ){
              var rotation = 370 - (idx * 5);
              TweenLite.to( card, .5, {rotation: rotation, delay: 0, top: -20, left: -20 } );
          });

      };

      self.fadeOutFacts = function () {
          TweenLite.to(allFacts, .5, { autoAlpha: 0, onComplete: self.onFactsFadedOut });
      };

      self.onFactsFadedOut = function () {

          var cardData = self.getCurrentCardData();

          console.log('MythExplorerController.onFactsFadedOut');
          console.log('...cardData.cardColor: ' + cardData.color);
          console.log('...cardData.cardPid: ' + cardData.pid);

          self.factTextArray = bgsFactModel.getFacts(cardData.color, cardData.pid);

          self.$digest();

          self.fadeInFacts();
      };

      self.getCurrentCardData = function () {
          var cardId = self.mythCardArray[0].id;
          return self.mythCardDataModel[ cardId ];
      };

      self.fadeInFacts = function () {
          TweenLite.to(allFacts, .5, { autoAlpha: 1 });
      };

      // -------------------------
    // listeners

      $scope.$on( NavigationService.START_STATE, function(){
          console.log ('MythExplorerController.START_STATE' );
      });

      $scope.$on( NavigationService.EXPLORER_NUM_EMPLOYEE_STATE, function(){
          self.addBlotter( NavigationService.EXPLORER_NUM_EMPLOYEE_STATE );
      });

      $scope.$on( NavigationService.EXPLORER_MONEY_STATE, function(){
          self.addBlotter( NavigationService.EXPLORER_MONEY_STATE );
      });

      $scope.$on( NavigationService.EXPLORER_TIME_STATE, function(){
          self.addBlotter( NavigationService.EXPLORER_TIME_STATE );
      });

      $scope.$on( NavigationService.EXPLORER_EMPLOYEE_STATE, function(){
          self.addBlotter( NavigationService.EXPLORER_EMPLOYEE_STATE );
      });


      // ------------------------------------
      // specific listeners for myth buttons on this page

      $scope.$on('MYTH_BTN_CLICK_myth_card_0', function( event, data){
          console.log ('MythExplorerController.MYTH_BTN_CLICK_myth_card_0' );

          // prevents clicks on the cards once they are moved to the upper left
          if( !self.mythCardClickEnabled ) return;

          self.factTextArray = bgsFactModel.getFacts( data.cardColor, data.cardPid );

          self.mythCardArray = [ myth_card_0, myth_card_1, myth_card_2 ];

          self.onMythCardClick();

      });

      $scope.$on('MYTH_BTN_CLICK_myth_card_1', function( event, data){
          console.log ('MythExplorerController.MYTH_BTN_CLICK_myth_card_1' );

          // prevents clicks on the cards once they are moved to the upper left
          if( !$scope.mythCardClickEnabled ) return;

          self.factTextArray = bgsFactModel.getFacts( data.cardColor, data.cardPid );

          self.mythCardArray = [ myth_card_1, myth_card_2, myth_card_0 ];

          self.onMythCardClick();

      });

      $scope.$on('MYTH_BTN_CLICK_myth_card_2', function( event, data){
          console.log ('MythExplorerController.MYTH_BTN_CLICK_myth_card_2' );

          // prevents clicks on the cards once they are moved to the upper left
          if( !$scope.mythCardClickEnabled ) return;

          self.factTextArray = self.bgsFactModel.getFacts( data.cardColor, data.cardPid );

          self.mythCardArray = [ myth_card_2, myth_card_0, myth_card_1 ];

          self.onMythCardClick();

      });


      // ------------------------------------

      $scope.$on('broadcastSoleClick', function(){
          console.log ('MythExplorerController.broadcastSoleClick' );

          self.queuedTitle = bgsMythExplorerModel.soleTitle;
          self.queuedSubtitle = bgsMythExplorerModel.soleText;

          self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.SOLE );

          self.hideEmployeeCards();
      });

      $scope.$on('broadcastTwoTenClick', function(){
          console.log ('MythExplorerController.broadcastTwoTenClick' );

          self.queuedTitle = bgsMythExplorerModel.fiveToTenTitle;
          self.queuedSubtitle = bgsMythExplorerModel.fiveToTenText;

          self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.TWO_TO_TEN );

          self.hideEmployeeCards();

      });

      $scope.$on('broadcastMidSizeClick', function(){
          console.log ('MythExplorerController.broadcastMidSizeClick' );

          self.queuedTitle = bgsMythExplorerModel.midSizeTitle;
          self.queuedSubtitle = bgsMythExplorerModel.midSizeText;

          self.mythCardDataModel =  bgsMythCardModel.getMythCardDataSet( bgsMythCardModel.MID_SIZE );

          self.hideEmployeeCards();

      });

  }// END CLASS

  // -------------------------
  // inject
  // -------------------------
  
  angular.module('bgsMythCardsApp')
      .controller('bgsMythCardExplorerController', bgsMythCardExplorerController );

})();

