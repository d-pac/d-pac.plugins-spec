'use strict';

var expect = require( 'must' );
var fixtures = require( './fixtures' );

var subject = require( '../index' );

describe( 'D-PAC plugin specification', function(){
  describe( '.validateManifest()', function(){
    it( "should validate minimal manifests", function(){
      var actual = subject.validateManifest( fixtures.manifests.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full manifests", function(){
      var actual = subject.validateManifest( fixtures.manifests.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate incorrectly named declarations", function(){
      var actual = subject.validateManifest( fixtures.manifests.invalid.missingDpac );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate non-array dpac declarations", function(){
      var actual = subject.validateManifest( fixtures.manifests.invalid.notAnArray );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `name`", function(){
      var actual = subject.validateManifest( fixtures.manifests.invalid.missingName );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `description`", function(){
      var actual = subject.validateManifest( fixtures.manifests.invalid.missingDescription );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `type`", function(){
      var actual = subject.validateManifest( fixtures.manifests.invalid.missingType );
      expect( actual.isValid ).to.equal( false );
    } );
  } );
  describe( '.validateAssessment()', function(){
    it( "should validate minimal assessments", function(){
      var actual = subject.validateAssessment( fixtures.assessments.items.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full assessments", function(){
      var actual = subject.validateAssessment( fixtures.assessments.items.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
  } );
  describe( '.validateComparison()', function(){
    it( "should validate minimal comparisons", function(){
      var actual = subject.validateComparison( fixtures.comparisons.items.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full comparisons", function(){
      var actual = subject.validateComparison( fixtures.comparisons.items.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
  } );
  describe( '.validateComparisonsList()', function(){
    it( "should validate minimal representation lists", function(){
      var actual = subject.validateComparisonsList( fixtures.comparisons.lists.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full representation lists", function(){
      var actual = subject.validateComparisonsList( fixtures.comparisons.lists.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate representation lists with non-unique elements", function(){
      var actual = subject.validateComparisonsList( fixtures.comparisons.lists.invalid.nonUnique );
      expect( actual.isValid ).to.equal( false );
    } );
  } );
  describe( '.validateRepresentation()', function(){
    it( "should validate minimal representations", function(){
      var actual = subject.validateRepresentation( fixtures.representations.items.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full representations", function(){
      var actual = subject.validateRepresentation( fixtures.representations.items.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate representations with missing `id`s", function(){
      var actual = subject.validateRepresentation( fixtures.representations.items.invalid.missingId );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate representations with missing `compared`s", function(){
      var actual = subject.validateRepresentation( fixtures.representations.items.invalid.missingCompared );
      expect( actual.isValid ).to.equal( false );
    } );
  } );
  describe( '.validateRepresentationsList()', function(){
    it( "should validate minimal representation lists", function(){
      var actual = subject.validateRepresentationsList( fixtures.representations.lists.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full representation lists", function(){
      var actual = subject.validateRepresentationsList( fixtures.representations.lists.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate representation lists with too few elements", function(){
      var actual = subject.validateRepresentationsList( fixtures.representations.lists.invalid.tooFew );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate representation lists with non-unique elements", function(){
      var actual = subject.validateRepresentationsList( fixtures.representations.lists.invalid.nonUnique );
      expect( actual.isValid ).to.equal( false );
    } );
  } );
} );
