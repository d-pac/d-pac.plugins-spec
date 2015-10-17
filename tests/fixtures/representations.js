'use strict';
module.exports.items = {
  valid: {},
  invalid: {}
};
module.exports.items.valid.minimal = {
  _id: "1",
  compared: [
    "2"
  ]
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

module.exports.items.invalid.missingId = {
  compared: [
    "2"
  ]
};
module.exports.items.invalid.missingCompared = {
  _id: "1"
};

module.exports.lists = {
  valid: {},
  invalid: {}
};

module.exports.lists.valid.minimal = [
  {
    _id: "1",
    compared: [
      "2"
    ]
  },
  {
    _id: "2",
    compared: [
      "1"
    ]
  }
];

module.exports.lists.invalid.nonUnique = [
  {
    _id: "1",
    compared: []
  },
  {
    _id: "1",
    compared: []
  }
];

module.exports.lists.invalid.tooFew = [
  {
    _id: "1",
    compared: []
  }
];