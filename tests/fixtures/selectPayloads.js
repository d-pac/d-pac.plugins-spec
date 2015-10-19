'use strict';
var representations= require('./representations');
var comparisons = require('./comparisons');
var assessments = require('./assessments');

module.exports.items = {
  valid: {},
  invalid: {}
};

module.exports.items.valid.minimal = {
  representations: representations.lists.valid.minimal,
  comparisons: comparisons.lists.valid.minimal,
  assessment: assessments.items.valid.minimal,
  assessor: "1"
};

module.exports.items.valid.full = {
  representations: representations.lists.valid.full,
  comparisons: comparisons.lists.valid.full,
  assessment: assessments.items.valid.full,
  assessor: "1"
};
