'use strict';

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
  ]
};

module.exports.invalid.missingDpac = {
  "incorrect": [
    {
      "name": "comparative-selection",
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "type": "select",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
  ]
};

module.exports.invalid.notAnArray = {
  "d-pac": 
    {
      "name": "comparative-selection",
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "type": "select",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
};

module.exports.invalid.missingName = {
  "d-pac": [
    {
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "type": "select",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
  ]
};

module.exports.invalid.missingDescription = {
  "d-pac": [
    {
      "name": "comparative-selection",
      "type": "select",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
  ]
};

module.exports.invalid.missingType = {
  "d-pac": [
    {
      "name": "comparative-selection",
      "description": "Simple comparative selection algorithm based on [NoMoreMarking's `cj` module](https://github.com/NoMoreMarking/cj)",
      "entry": "select",
      "compatibility": "^0.6.0"
    }
  ]
};
