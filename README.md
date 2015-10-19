# d-pac.plugins-spec v0.4[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

This module formally defines the plugins specification for d-pac. It uses [json-schema](http://json-schema.org/) to describe the mandatory plugin declaration and the data it accepts.

## Plugin manifest

A d-pac plugin **must** declare an object in its `package.json` which adheres to [ManifestSchema.json](schemas/ManifestSchema.json)
To verify your plugin fullfils all requirements:

```js
var spec = require('d-pac.plugins-spec');
var pkg = require('./package.json');

var result = spec.validateManifest(pkg);
console.log(result.isValid);
```

## Plugin API

A d-pac plugin **must** expose a method conform to its `type` declaration in the manifest. ATM a single type is accepted: `select`.

Example:

```js
module.exports.select = function select(selectPayload){
    //do your stuff
};
```

This method should accept exactly one parameter which adheres to `<Type>PayloadSchema.json`, e.g. [SelectPayloadSchema.json](schemas/SelectPayloadSchema.json)

References:

* [AssessmentSchema.json](schemas/AssessmentSchema.json)
* [ComparisonSchema.json](schemas/ComparisonSchema.json)
* [ComparisonsListSchema.json](schemas/ComparisonsListSchema.json)
* [RepresentationSchema.json](schemas/RepresentationSchema.json)
* [RepresentationsListSchema.json](schemas/RepresentationsListSchema.json)
    
## Module API

This module exposes all schemas as a `schema` object:

```js
var spec = require('d-pac.plugins-spec');
console.log(Object.keys(spec.schemas))
```
```
#output
[ 'manifest',
  'assessment',
  'comparison',
  'comparisonsList',
  'representation',
  'representationsList',
  'selectPayload' ]
```

It also exposes validators for each of the schemas, wrapping [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid):

```js
console.log(Object.keys(spec));
```
```
#output
[ 'validateManifest',
  'validateAssessment',
  'validateComparison',
  'validateComparisonsList',
  'validateRepresentation',
  'validateRepresentationsList',
  'validateSelectPayload',
  'schemas',
  'VERSION' ]
```

**Usage**:

`validate<SchemaType>(data) : Object`

```js
var result = spec.validateComparison(comparison);
```

The result is an object with `isValid: Boolean` and in case it's not valid data an `errors` array with all errors.


[npm-url]: https://npmjs.org/package/d-pac.plugins-spec
[npm-image]: https://badge.fury.io/js/d-pac.plugins-spec.svg
[travis-url]: https://travis-ci.org/d-pac/d-pac.plugins-spec
[travis-image]: https://travis-ci.org/d-pac/d-pac.plugins-spec.svg?branch=master
[daviddm-url]: https://david-dm.org/d-pac/d-pac.plugins-spec.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/d-pac/d-pac.plugins-spec
