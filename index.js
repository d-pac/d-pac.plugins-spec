'use strict';
var jsonSchemaValidator = require( 'is-my-json-valid' );
var deepmerge = require( 'deepmerge' );

function createValidator( schema,
                          opts ){
  var validate = jsonSchemaValidator( schema, opts );
  var validator = function( data ){
    var result = { isValid: validate( data ) };
    if( !result.isValid ){
      result.errors = validate.errors;
    }
    return result;
  };
  validator.schema = schema;
  validator.opts = opts;
  return validator;
}

function overrideValidator( validator,
                            override,
                            opts ){
  var schema = deepmerge( validator.schema, override );
  opts = deepmerge( validator.opts, opts || {} );
  return createValidator( schema, opts );
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
      representation: schemas.representation,
      representationsList: schemas.representationsList,
      comparison: schemas.comparison,
      comparisonsList: schemas.comparisonsList,
      assessment: schemas.assessment
    }
  } ),

  createValidator: createValidator,
  overrideValidator: overrideValidator,
  schemas: schemas,
  VERSION: require( './package.json' ).version
};