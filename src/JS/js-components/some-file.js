const debounce = require('lodash.debounce');
const throttle = require('lodash.throttle');
import validator from 'validator';

const template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');
console.log(template({ doesWhat: 'rocks!' }));