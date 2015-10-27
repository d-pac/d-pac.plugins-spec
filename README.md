# d-pac.plugins-spec v0.4
[![Npm package][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

This module formally defines the plugins specification for d-pac. It uses [json-schema](http://json-schema.org/) to describe the mandatory plugin declaration and the data it accepts.

## Plugin manifest

A d-pac plugin **must** declare an object in its `package.json` which adheres to [schemas/pluginmanifest.json](schemas/pluginmanifest.json)
To verify your plugin fullfils all requirements:

```js
var spec = require('d-pac.plugins-spec');
var pkg = require('./package.json'); // retrieve your plugin's package manifest

var result = spec.validatePluginmanifest(pkg);
console.log(result.isValid);
```

## Plugin API

A d-pac plugin **must** expose a method conform to its `type` declaration in the manifest. ATM a single type is accepted: `select`.

Example:

```js
module.exports.select = function select(selectionpayload){
    //do your stuff
};
```

This method should accept exactly one parameter which adheres to  [schemas/selectionpayload.json](schemas/selectionpayload.json)
A plugin is allowed to override the payload schema in case it requires/ignores any of the fields.


References:

* [schemas/assessment.json](schemas/assessment.json)
* [schemas/comparison.json](schemas/comparison.json)
* [schemas/representation.json](schemas/representation.json)
* [schemas/selectionpayload.json](schemas/selectionpayload.json)
    
## Module API

### Schemas

This module exposes a mapping of schema declarations to schema names as `schemas`:

```js
var spec = require('d-pac.plugins-spec');
console.log(Object.keys(spec.schemas));
```
```
#output
[ 'pluginmanifest',
  'assessment',
  'comparison',
  'representation',
  'selectionpayload' ]
```

### Default Validators

It also exposes validators for each of the schemas:

```js
console.log(Object.keys(spec));
```
```
#output
[ 'validatePluginmanifest',
  'validateAssessment',
  'validateComparison',
  'validateRepresentation',
  'validateSelectionpayload',
  'schemas',
  'createValidator',
  'VERSION' ]
```

**Usage**:

`validate<SchemaType>(data) : Object`

```js
var result = spec.validateComparison(comparison);
```

The result is an object with `isValid: Boolean` and in case the data's not valid an `errors` array with all errors.

### Custom Validators

You can create validators of your own, either based on one of the d-pac schemas, or completely new.

```js
//new schema
var validator = subject.createValidator( {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Test createValidator",
	"type": "object",
	"properties": {
	  "foo": {
	    "type": "number",
	    "required": true
	  }
	}
} );
console.log(validator( { foo: "foo" } ).isValid); //outputs: false
console.log(validator( { foo: 9 } ).isValid); //outputs: true
```

```js
//based on existing
var validator = subject.createValidator( "selectionpayload", {
	"selectionpayload": {
	  "properties": {
	    "assessment": {
	      "required": true
	    }
	  }
	},
	"comparison": {
	  "properties": {
	    "updatedAt": {
	      "required": true
	    }
	  }
	}
} );
```
The above example creates a validator based on [schemas/selectionpayload.json](schemas/selectionpayload.json) by passing the `"selectionpayload"` as a first argument.
You can override the rules of the original schema, by passing extra rules as objects mapped to the schema names.
E.g. the `assessment` property of `selectionpayload` is made mandatory in the above example. 

Since the `selectionpayload` schema references several other schemas, you can override these too. E.g. all comparison objects passed to `selectionpayload.comparisons` are required to have a `updatedAt` property.

The structure of the overriding object must be **exactly** the same as that of the base schema, i.e. make sure you adhere to it strictly.

### Plugin declaration retrieval from package manifests

You can use `getPlugins` to retrieve plugin declarations from package manifests:

```js
var plugins = subject.getPlugins({
  "d-pac": [
    {
      "name": "test",
      "description": "test",
      "type": "select"
    }
  ],
  dependencies: {
    'd-pac.plugins-spec': '^0.4.0'
  }
});
```

To allow backwards compatibility to plugins that do not declare a dependency on this module, pass an options object with `allowIndependents:true`:

```js
var plugins = subject.getPlugins({
  "d-pac": [
    {
      "name": "test",
      "description": "test",
      "type": "select"
    }
  ]
}, {
  allowIndependents: true
);
```


[npm-url]: https://npmjs.org/package/d-pac.plugins-spec
[npm-image]: https://badge.fury.io/js/d-pac.plugins-spec.svg
[travis-url]: https://travis-ci.org/d-pac/d-pac.plugins-spec
[travis-image]: https://travis-ci.org/d-pac/d-pac.plugins-spec.svg?branch=master
[daviddm-url]: https://david-dm.org/d-pac/d-pac.plugins-spec.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/d-pac/d-pac.plugins-spec
