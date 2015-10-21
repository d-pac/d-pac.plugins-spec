'use strict';

var expect = require( 'must' );
var fixtures = require( './fixtures' );

var subject = require( '../index' );

describe( 'D-PAC plugin specification', function(){
  describe( '.validatePluginmanifest()', function(){
    it( "should validate minimal manifests", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.valid.minimal );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate full manifests", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.valid.full );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate incorrectly named declarations", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.invalid.missingDpac );
      expect( actual.isValid ).to.equal( false );
    } );
    it( "should invalidate non-array dpac declarations", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.invalid.notAnArray );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: 'data["d-pac"]',
          message: 'is the wrong type'
        }
      ] );
    } );
    it( "should invalidate dpac declarations without `name`", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.invalid.missingName );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: 'data["d-pac"].0.name',
          message: 'is required'
        }
      ] );
    } );
    it( "should invalidate dpac declarations without `description`", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.invalid.missingDescription );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: 'data["d-pac"].0.description',
          message: 'is required'
        }
      ] );
    } );
    it( "should invalidate dpac declarations without `type`", function(){
      var actual = subject.validatePluginmanifest( fixtures.manifests.invalid.missingType );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: 'data["d-pac"].0.type',
          message: 'is required'
        }
      ] );
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
      expect( actual.errors ).to.eql( [
        {
          field: "data._id",
          message: "is required"
        }
      ] );
    } );
    it( "should invalidate representations with missing `compared`s", function(){
      var actual = subject.validateRepresentation( fixtures.representations.items.invalid.missingCompared );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.compared",
          message: "is required"
        }
      ] );
    } );
  } );
  describe( '.validateSelectionpayload()', function(){
    it( 'should invalidate if undefined', function(){
      var actual = subject.validateSelectionpayload();
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data",
          message: "is required"
        }
      ] );

    } );
    it( "should validate with minimal representation lists", function(){
      var actual = subject.validateSelectionpayload( { representations: fixtures.representations.lists.valid.minimal } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate with full representation lists", function(){
      var actual = subject.validateSelectionpayload( { representations: fixtures.representations.lists.valid.full } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate with representation lists with too few elements", function(){
      var actual = subject.validateSelectionpayload( { representations: fixtures.representations.lists.invalid.tooFew } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.representations",
          message: "has less items than allowed"
        }
      ] );
    } );
    it( "should invalidate with representation lists with non-unique elements", function(){
      var actual = subject.validateSelectionpayload( { representations: fixtures.representations.lists.invalid.nonUnique } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.representations",
          message: "must be unique"
        }
      ] );
    } );
    it( "should invalidate with representation lists with non-valid elements", function(){
      var actual = subject.validateSelectionpayload( { representations: fixtures.representations.lists.invalid.items } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.representations.1",
          message: "referenced schema does not match"
        }
      ] );
    } );
    it( "should validate with minimal comparisons lists", function(){
      var actual = subject.validateSelectionpayload( { comparisons: fixtures.comparisons.lists.valid.minimal } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate with full comparisons lists", function(){
      var actual = subject.validateSelectionpayload( { comparisons: fixtures.comparisons.lists.valid.full } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate with comparisons lists with non-unique elements", function(){
      var actual = subject.validateSelectionpayload( { comparisons: fixtures.comparisons.lists.invalid.nonUnique } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.comparisons",
          message: "must be unique"
        }
      ] );
    } );
    it( "should invalidate with comparisons lists with invalid elements", function(){
      var actual = subject.validateSelectionpayload( { comparisons: fixtures.comparisons.lists.invalid.items } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.comparisons.1",
          message: "referenced schema does not match"
        }
      ] );
    } );
    it( "should validate with minimal assessments", function(){
      var actual = subject.validateSelectionpayload( { assessment: fixtures.assessments.items.valid.minimal } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should validate with full assessments", function(){
      var actual = subject.validateSelectionpayload( { assessment: fixtures.assessments.items.valid.full } );
      expect( actual.isValid ).to.equal( true );
    } );
    it( "should invalidate with invalid assessments", function(){
      var actual = subject.validateSelectionpayload( { assessment: fixtures.assessments.items.invalid.missingStage } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: "data.assessment",
          message: "referenced schema does not match"
        }
      ] );
    } );
  } );
  describe.skip( '.createValidator()', function(){
    it( "should validate correctly", function(){
      var validator = subject.createValidator( {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Test createValidator",
        "type": "object",
        "properties": {
          "foo": {
            "type": "number",
            "required": true
          }
        }
      } );
      var actual = validator( { baz: "foo" } );
      expect( actual.isValid ).to.equal( false );
      expect( actual.errors ).to.eql( [
        {
          field: 'data.foo',
          message: 'is required'
        }
      ] );

    } );
  } );
  describe.skip( '.overrideVaLidator()', function(){
    it( 'should override the base schema', function(){
      var validator = subject.overrideValidator( subject.validateRepresentationsList, {
        minItems: 1
      } );
      var actual = validator( fixtures.representations.lists.invalid.tooFew );
      expect( actual.isValid ).to.equal( true );
    } )
  } )
} );
