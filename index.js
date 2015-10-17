'use strict';
var validator = require( 'is-my-json-valid' );

var schemas = {
  manifest: require( './schemas/ManifestSchema.json' ),
  representation: require( './schemas/RepresentationSchema.json' ),
  representationsList: require( './schemas/RepresentationsListSchema.json' )
};

module.exports = {
  isManifest: validator( schemas.manifest ),
  isRepresentation: validator( schemas.representation ),
  isRepresentationsList: validator( schemas.representationsList, {
    schemas: {
      representation: schemas.representation
    }
  } ),

  schemas: schemas
};