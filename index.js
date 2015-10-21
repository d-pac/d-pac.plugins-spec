'use strict';
var _ = require( 'lodash' );
var jsonSchemaValidator = require( 'is-my-json-valid' );
var deepmerge = require( 'deepmerge' );
var schemasByName = require( 'require-directory' )( module, './schemas' );


module.exports = {
  VERSION: require( './package.json' ).version,
  //schemas: _.reduce( schemasByName, function( memo,
  //                                            schema,
  //                                            name ){
  //  memo[ schema.id ] = schema;
  //  return memo;
  //}, {} ),
  schemas: schemasByName,
  createValidator: function createValidator( schema,
                                             additionalSchemas ){
    if( _.isString( schema ) ){
      schema = module.exports.schemas[ schema ];
      if( !schema ){
        throw new Error( 'Schema not found: ' + schema );
      }
    }
    
    additionalSchemas = deepmerge( module.exports.schemas, additionalSchemas || {} );
    schema = deepmerge( schema, additionalSchemas[schema.name] || {} );
    var validate = jsonSchemaValidator( schema, { schemas: additionalSchemas } );
    var validator = function( data ){
      var result = { isValid: validate( data ) };
      if( !result.isValid ){
        result.errors = validate.errors;
      }
      return result;
    };
    validator.schema = schema;
    return validator;
  }
};

_.each( schemasByName, function( schema,
                                 name ){
  module.exports[ 'validate' + _.capitalize( _.camelCase( name ) ) ] = module.exports.createValidator( schema );
} );
