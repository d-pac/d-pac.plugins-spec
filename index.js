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
  assessment: require( './schemas/assessment.json' ),
  comparison: require( './schemas/comparison.json' ),
  pluginmanifest: require( './schemas/pluginmanifest.json' ),
  representation: require( './schemas/representation.json' ),
  selectionpayload: require( './schemas/selectionpayload.json' )
};

module.exports = {
  validatePluginmanifest: createValidator( schemas.pluginmanifest ),
  validateAssessment: createValidator( schemas.assessment ),
  validateComparison: createValidator( schemas.comparison ),
  validateRepresentation: createValidator( schemas.representation ),
  validateSelectionpayload: createValidator( schemas.selectionpayload, {
    //unfortunately needs to use fragments instead of ID's since is-my-json-valid ignores URI references
    //rewrite once https://github.com/mafintosh/is-my-json-valid/pull/95 lands
    schemas: {
      representation: schemas.representation,
      comparison: schemas.comparison,
      assessment: schemas.assessment
    }
  } ),

  createValidator: createValidator,
  overrideValidator: overrideValidator,
  schemas: schemas,
  VERSION: require( './package.json' ).version
};