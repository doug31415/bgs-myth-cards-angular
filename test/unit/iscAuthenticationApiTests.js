
(function(){
  'use strict';

  describe('foobar', function(){
    var scope;


    beforeEach( module('bgsMythCardsApp' ));

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('bgs.templates') );

    // show $log statements
    beforeEach( module( 'bgsMythCardsApp', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope  ){
      scope = $rootScope.$new();

    }));

    // -------------------------
    describe( 'foobar tests ', function(){

      it( 'should run tests', function(){
        expect( true ).toBe( true );
      });
    });




  });

})();

