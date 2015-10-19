'use strict';
var validator = require( 'is-my-json-valid' );

function createValidator( schema ){
  var validate = validator( schema );
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
  representationsList: require( './schemas/RepresentationsListSchema.json' ),
  selectPayload: require( './schemas/SelectPayloadSchema.json' )
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
  validateSelectPayload: createValidator( schemas.selectPayload, {
    schemas: {
      representationsList: schemas.representationsList,
      comparisonsList: schemas.comparisonsList,
      assessment: schemas.assessment
    }
  } ),

  schemas: schemas,
  VERSION: require( './package.json' ).version
};