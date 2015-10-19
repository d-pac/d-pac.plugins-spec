'use strict';


module.exports.items = {
  valid:{},
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
  "updatedAt": new Date(1445242305715),
  "createdAt": new Date(1445242300457),
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
  
module.exports.lists = {
  valid:{},
  invalid: {}
};

module.exports.lists.valid.minimal = [
  {
    "_id": "1",
    "assessment": "56121dc75f699bd58181ab13",
    "assessor": "56121c4d85bcf1308178d0c2",
    "data": {
      "selection": "56121e135f699bd58181abe4"
    },
    "representations": {
      "a": "56121e135f699bd58181abe4",
      "b": "56121e135f699bd58181abec"
    }
  },
  {
    "_id": "2",
    "assessment": "56121dc75f699bd58181ab13",
    "assessor": "56121c4d85bcf1308178d0c2",
    "data": {
      "selection": "56121e135f699bd58181abe4"
    },
    "representations": {
      "a": "56121e135f699bd58181abe4",
      "b": "56121e135f699bd58181abec"
    }
  }
];

module.exports.lists.invalid.nonUnique = [
  {
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
  },
  {
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
  }
];
