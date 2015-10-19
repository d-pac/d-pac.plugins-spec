'use strict';
var validator = require( 'is-my-json-valid' );

var schemas = {
  manifest: require( './schemas/ManifestSchema.json' ),
  comparison: require( './schemas/ComparisonSchema.json' ),
  comparisonsList: require( './schemas/ComparisonsListSchema.json' ),
  representation: require( './schemas/RepresentationSchema.json' ),
  representationsList: require( './schemas/RepresentationsListSchema.json' )
};

module.exports = {
  isManifest: validator( schemas.manifest ),
  isComparison: validator( schemas.comparison ),
  isComparisonsList: validator( schemas.comparisonsList, {
    schemas: {
      comparison: schemas.comparison
    }
  } ),
  isRepresentation: validator( schemas.representation ),
  isRepresentationsList: validator( schemas.representationsList, {
    schemas: {
      representation: schemas.representation
    }
  } ),

  schemas: schemas
};