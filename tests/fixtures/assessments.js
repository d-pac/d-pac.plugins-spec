'use strict';
var _ = require( 'lodash' );

module.exports.items = {
  valid: {},
  invalid: {}
};

module.exports.items.valid.minimal = {
  "_id": "56121dc75f699bd58181ab13",
  "stage": 0,
  "limits": {
    "comparisonsNum": {
      "perRepresentation": 0,
      "perAssessor": 200
    }
  }
};

module.exports.items.valid.full = {
  "_id": "56121dc75f699bd58181ab13",
  "updatedBy": "56121c4d85bcf1308178d0c2",
  "updatedAt": new Date( 1444042238225 ),
  "createdBy": "56121c4d85bcf1308178d0c2",
  "createdAt": new Date( 1444027847375 ),
  "algorithm": "comparative-selection",
  "title": "Test",
  "name": "Test",
  "uiCopy": "{\r\n    \"phase_selection\": {\r\n        \"title\": \"Beoordeel\",\r\n        \"description\": \"Geef aan welke tekst beter geschreven is in functie van  de competentie 'argumentatief schrijven'\",\r\n        \"a_button\": {\r\n            \"label\" : \"Tekst A is beter\",\r\n            \"tooltip\": \"Klik om aan te duiden dat tekst A beter is dan B.\"\r\n        },\r\n        \"b_button\": {\r\n            \"label\": \"Tekst B is beter\",\r\n            \"tooltip\": \"Klik om aan te duiden dat tekst B beter is dan A.\"\r\n        }\r\n    },\r\n    \"phase_comparative\": {\r\n        \"title\": \"Vergelijk\",\r\n        \"description\": \"Licht kort je keuze toe\"\r\n    },\r\n    \"phase_pros-cons\": {\r\n        \"title\": \"Vergelijk\",\r\n        \"description\": \"Beschrijf hier wat je positief en negatief vond aan de teksten:\",\r\n        \"a_title\": \"Tekst A\",\r\n        \"b_title\": \"Tekst B\",\r\n        \"positive\": \"Positief\",\r\n        \"negative\": \"Negatief\"\r\n    },\r\n    \"phase_passfail\":{\r\n        \"title\":\"Geslaagd of niet?\",\r\n        \"description\" : \"Duid aan of deze teksten volgens jou geslaagd zijn voor de opdracht.\",\r\n        \"options\": {\r\n          \"passed\" : {\r\n              \"label\" : \"Geslaagd\",\r\n              \"icon\" : \"ok\"\r\n          },\r\n          \"failed\" : { \r\n              \"label\":\"Niet geslaagd\", \r\n              \"icon\":\"remove\"\r\n          },\r\n          \"undecided\" : { \r\n              \"label\" : \"Weet het niet\", \r\n              \"icon\": \"question-sign\"\r\n          }\r\n        }\r\n    },\r\n    \"phase_seq-selection\": {\r\n\t    \"title\": \"Hoe moeilijk vond je het om de keuze te maken?\"\r\n\t},\r\n  \t\"phase_seq-comparative\": {\r\n    \t\"title\": \"Hoe moeilijk vond je het om je keuze te beargumenteren?\"\r\n\t},\r\n    \"phase_seq-passfail\": {\r\n    \t\"title\": \"Hoe moeilijk vond je het om geslaagd/niet geslaagd te kiezen?\"\r\n\t},\r\n    \"representation_viewer\": {\r\n        \"pdf\":{\r\n            \"tooltip\": \"Gebruik de knoppen rechts bovenaan om de paper fullscreen te bekijken of te downloaden.\"\r\n        },\r\n        \"image\": {\r\n            \"tooltip\": \"Klik om deze tekst te selecteren\"\r\n        }\r\n    },\r\n    \"notes\" : {\r\n        \"label\" : \"Notities\",\r\n        \"tooltip\" : \"Noteer hier je opmerkingen bij deze tekst.\"\r\n    }\r\n}\r\n",
  "enableTimeLogging": false,
  "stage": 0,
  "limits": {
    "comparisonsNum": {
      "perRepresentation": 0,
      "perAssessor": 200
    }
  },
  "phases": [
    "556444845cbc476e7934c2ba",
    "55e00bbc0e15fd910ddf5015"
  ],
  "schedule": {
    "active": false
  },
  "state": "published",
  "__v": 1,
  "assignments": {
    "assessee": "",
    "assessor": ""
  }
};

module.exports.items.invalid.missingStage = _.chain( module.exports.items.valid.minimal )
  .cloneDeep()
  .omit( 'stage' )
  .value();