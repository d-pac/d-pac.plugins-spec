'use strict';
var validator = require( 'is-my-json-valid' );

function createValidator( schema, opts ){
  var validate = validator( schema, opts );
  return function( data ){
    var result = { isValid: validate( data ) };
    if( !result.isValid ){
      result.errors = validate.errors;
    }
    return result;
  }
}

var schemas = {
  manifest: require( './schemas/ManifestSchema.json' ),
  assessment: require( './schemas/AssessmentSchema.json' ),
  comparison: require( './schemas/ComparisonSchema.json' ),
  comparisonsList: require( './schemas/ComparisonsListSchema.json' ),
  representation: require( './schemas/RepresentationSchema.json' ),
  representationsList: require( './schemas/RepresentationsListSchema.json' )
};

module.exports = {
  validateManifest: createValidator( schemas.manifest ),
  validateAssessment: createValidator( schemas.assessment ),
  validateComparison: createValidator( schemas.comparison ),
  validateComparisonsList: createValidator( schemas.comparisonsList, {
    schemas: {
      comparison: schemas.comparison
    }
  } ),
  validateRepresentation: createValidator( schemas.representation ),
  validateRepresentationsList: createValidator( schemas.representationsList, {
    schemas: {
      representation: schemas.representation
    }
  } ),

  createValidator: createValidator,
  schemas: schemas,
  VERSION: require( './package.json' ).version
};