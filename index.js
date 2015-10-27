'use strict';
var _ = require( 'lodash' );
var jsonSchemaValidator = require( 'is-my-json-valid' );
var deepmerge = require( 'deepmerge' );
var schemasByName = require( 'require-directory' )( module, './schemas' );
var semver = require( 'semver' );

var thisManifest = require( './package.json' );

module.exports = {
  VERSION: thisManifest.version,
  schemas: schemasByName,
  getPlugins: function( pluginmanifest,
                        opts ){
    opts = _.defaults( {}, opts, {
      allowIndependents: false
    } );
    var validation = module.exports.validatePluginmanifest( pluginmanifest );
    if( validation.isValid ){
      var dependencyVersion = _.get( pluginmanifest,
        [ 'dependencies', thisManifest.name ],
        opts.allowIndependents
          ? '*'
          : '0.0.0' );
      if( semver.satisfies( module.exports.VERSION, dependencyVersion ) ){
        return pluginmanifest[ 'd-pac' ];
      }
    }
    return [];
  },
  createValidator: function createValidator( schema,
                                             additionalSchemas ){
    if( _.isString( schema ) ){
      schema = module.exports.schemas[ schema ];
      if( !schema ){
        throw new Error( 'Schema not found: ' + schema );
      }
    }

    additionalSchemas = deepmerge( module.exports.schemas, additionalSchemas || {} );
    schema = deepmerge( schema, additionalSchemas[ schema.name ] || {} );
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
