'use strict';
var validator = require( 'is-my-json-valid' );

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
  isManifest: validator( schemas.manifest ),
  isAssessment: validator( schemas.assessment ),
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
  isSelectPayload: validator( schemas.selectPayload, {
    schemas: {
      representationsList: schemas.representationsList,
      comparisonsList: schemas.comparisonsList,
      assessment: schemas.assessment
    }
  } ),

  schemas: schemas,
  VERSION: require('./package.json' ).version
};