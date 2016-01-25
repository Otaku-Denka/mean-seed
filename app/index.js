const angular = require('angular');
const ngModule = angular.module('app', []);
console.log('hello')
require('./directives')(ngModule);