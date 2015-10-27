'use strict';

var _ = require( 'lodash' );

module.exports = {
  valid: {},
  invalid: {}
};

module.exports.valid.minimal = {
  "d-pac": [
    {
      "name": "comparative-selection",
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "type": "select"
    }
  ]
};

module.exports.valid.full = {
  "d-pac": [
    {
      "name": "comparative-selection",
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "type": "select",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
  ],
  "dependencies": {
    'd-pac.plugins-spec': '*'
  }
};

module.exports.invalid.missingDpac = {
  "incorrect": [
    _.cloneDeep( module.exports.valid.minimal[ "d-pac" ][ 0 ] )
  ]
};

module.exports.invalid.notAnArray = {
  "d-pac": _.cloneDeep( module.exports.valid.minimal[ "d-pac" ][ 0 ] )
};

module.exports.invalid.missingName = {
  "d-pac": [
    _.chain( module.exports.valid.minimal[ "d-pac" ][ 0 ] )
      .cloneDeep()
      .omit( 'name' )
      .value()
  ]
};

module.exports.invalid.missingDescription = {
  "d-pac": [
    _.chain( module.exports.valid.minimal[ "d-pac" ][ 0 ] )
      .cloneDeep()
      .omit( 'description' )
      .value()
  ]
};

module.exports.invalid.missingType = {
  "d-pac": [
    _.chain( module.exports.valid.minimal[ "d-pac" ][ 0 ] )
      .cloneDeep()
      .omit( 'type' )
      .value()
  ]
};

module.exports.invalid.incompatibleVersion = _.chain( module.exports.valid.full )
  .cloneDeep()
  .set( 'dependencies', {
    'd-pac.plugins-spec': '^999.0.0'
  } )
  .value();