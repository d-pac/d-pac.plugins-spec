'use strict';

var expect = require( 'must' );
var fixtures = require( './fixtures' );

var subject = require( '../index' );

describe( 'D-PAC plugin specification', function(){
  describe( '.isManifest()', function(){
    it( "should validate minimal manifests", function(){
      expect( subject.isManifest( fixtures.manifests.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full manifests", function(){
      expect( subject.isManifest( fixtures.manifests.valid.full ) ).to.equal( true );
    } );
    it( "should invalidate incorrectly named declarations", function(){
      expect( subject.isManifest( fixtures.manifests.invalid.missingDpac ) ).to.equal( false );
    } );
    it( "should invalidate non-array dpac declarations", function(){
      expect( subject.isManifest( fixtures.manifests.invalid.notAnArray ) ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `name`", function(){
      expect( subject.isManifest( fixtures.manifests.invalid.missingName ) ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `description`", function(){
      expect( subject.isManifest( fixtures.manifests.invalid.missingDescription ) ).to.equal( false );
    } );
    it( "should invalidate dpac declarations without `type`", function(){
      expect( subject.isManifest( fixtures.manifests.invalid.missingType ) ).to.equal( false );
    } );
  } );
  describe( '.isAssessment()', function(){
    it( "should validate minimal assessments", function(){
      expect( subject.isAssessment( fixtures.assessments.items.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full assessments", function(){
      expect( subject.isAssessment( fixtures.assessments.items.valid.full ) ).to.equal( true );
    } );
  } );
  describe( '.isComparison()', function(){
    it( "should validate minimal comparisons", function(){
      expect( subject.isComparison( fixtures.comparisons.items.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full comparisons", function(){
      expect( subject.isComparison( fixtures.comparisons.items.valid.full ) ).to.equal( true );
    } );
  } );
  describe( '.isComparisonsList()', function(){
    it( "should validate minimal representation lists", function(){
      expect( subject.isComparisonsList( fixtures.comparisons.lists.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full representation lists", function(){
      expect( subject.isComparisonsList( fixtures.comparisons.lists.valid.full ) ).to.equal( true );
    } );
    it( "should invalidate representation lists with non-unique elements", function(){
      expect( subject.isComparisonsList( fixtures.comparisons.lists.invalid.nonUnique ) ).to.equal( false );
    } );
  } );
  describe( '.isRepresentation()', function(){
    it( "should validate minimal representations", function(){
      expect( subject.isRepresentation( fixtures.representations.items.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full representations", function(){
      expect( subject.isRepresentation( fixtures.representations.items.valid.full ) ).to.equal( true );
    } );
    it( "should invalidate representations with missing `id`s", function(){
      expect( subject.isRepresentation( fixtures.representations.items.invalid.missingId ) ).to.equal( false );
    } );
    it( "should invalidate representations with missing `compared`s", function(){
      expect( subject.isRepresentation( fixtures.representations.items.invalid.missingCompared ) ).to.equal( false );
    } );
  } );
  describe( '.isRepresentationsList()', function(){
    it( "should validate minimal representation lists", function(){
      expect( subject.isRepresentationsList( fixtures.representations.lists.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full representation lists", function(){
      expect( subject.isRepresentationsList( fixtures.representations.lists.valid.full ) ).to.equal( true );
    } );
    it( "should invalidate representation lists with too few elements", function(){
      expect( subject.isRepresentationsList( fixtures.representations.lists.invalid.tooFew ) ).to.equal( false );
    } );
    it( "should invalidate representation lists with non-unique elements", function(){
      expect( subject.isRepresentationsList( fixtures.representations.lists.invalid.nonUnique ) ).to.equal( false );
    } );
  } );
  describe( '.isSelectPayload()', function(){
    it( "should validate minimal payloads", function(){
      expect( subject.isSelectPayload( fixtures.selectPayloads.items.valid.minimal ) ).to.equal( true );
    } );
    it( "should validate full payloads", function(){
      expect( subject.isSelectPayload( fixtures.selectPayloads.items.valid.full ) ).to.equal( true );
    } );
  } );
  
} );
