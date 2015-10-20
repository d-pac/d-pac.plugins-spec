'use strict';

var _ = require( 'lodash' );

module.exports.items = {
  valid: {},
  invalid: {}
};
module.exports.items.valid.minimal = {
  _id: "1",
  compared: [
    "2"
  ],
  rankType: "to rank",
  "ability": {
    "se": null,
    "value": null
  }
};
module.exports.items.valid.full = {
  "_id": "56121e105f699bd58181ab16",
  "updatedAt": new Date( 1444812889801 ),
  "createdAt": new Date( 1444027924888 ),
  "document": "56121e105f699bd58181ab15",
  "assessment": "56121dc75f699bd58181ab13",
  "rankType": "to rank",
  "ability": {
    "se": null,
    "value": null
  },
  "compared": [],
  "name": "Test - 0410ebd8e853f8b3f21bf103193dabb2",
  "__v": 2
};

module.exports.items.invalid.missingId = _.chain( module.exports.items.valid.minimal )
  .cloneDeep()
  .omit( '_id' )
  .value();

module.exports.items.invalid.missingCompared = _.chain( module.exports.items.valid.minimal )
  .cloneDeep()
  .omit( 'compared' )
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

module.exports.lists.invalid.tooFew = [
  _.chain( module.exports.items.valid.minimal )
    .cloneDeep()
    .set( "_id", "f" )
    .value()
];