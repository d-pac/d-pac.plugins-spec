'use strict';

var _ = require('lodash');

module.exports.items = {
  valid: {},
  invalid: {}
};

module.exports.items.valid.minimal = {
  "_id": "5624a5bc9e347103205bf80d",
  "assessment": "56121dc75f699bd58181ab13",
  "assessor": "56121c4d85bcf1308178d0c2",
  "data": {
    "selection": "56121e135f699bd58181abe4"
  },
  "representations": {
    "a": "56121e135f699bd58181abe4",
    "b": "56121e135f699bd58181abec"
  }
};

module.exports.items.valid.full = {
  "_id": "5624a5bc9e347103205bf80d",
  "_rid": 847,
  "updatedAt": new Date( 1445242305715 ),
  "createdAt": new Date( 1445242300457 ),
  "assessment": "56121dc75f699bd58181ab13",
  "assessor": "56121c4d85bcf1308178d0c2",
  "phase": "55e00bbc0e15fd910ddf5015",
  "data": {
    "comparative": "",
    "selection": "56121e135f699bd58181abe4",
    "pros-cons": {
      "aNegative": "",
      "aPositive": "",
      "bNegative": "",
      "bPositive": ""
    }
  },
  "representations": {
    "a": "56121e135f699bd58181abe4",
    "b": "56121e135f699bd58181abec"
  },
  "completed": true,
  "__v": 0
};

module.exports.items.invalid.missingAssessment = _.chain( module.exports.items.valid.minimal )
  .cloneDeep()
  .omit( 'assessment' )
  .value();

module.exports.lists = {
  valid: {},
  invalid: {}
};

module.exports.lists.valid.minimal = [
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "a" )
    .value(),
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "b" )
    .value()
];

module.exports.lists.valid.full = [
  _.chain( module.exports.items.valid.full )
    .cloneDeep()
    .set( "_id", "c" )
    .value(),
  _.chain( module.exports.items.valid.full )
    .cloneDeep()
    .set( "_id", "d" )
    .value()
];

module.exports.lists.invalid.nonUnique = [
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "e" )
    .value(),
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "e" )
    .value()
];

module.exports.lists.invalid.items = [
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "f" )
    .value(),
  _.chain( module.exports.items.invalid.missingAssessment )
    .cloneDeep()
    .set( "_id", "g" )
    .value()
];
