// concatenates all tests and uses webpack to transpile into ES5, (cannot merge into karma.conf.js)
var context = require.context('./app', true, /.test\.js$/);
context.keys().forEach(context);

// // concatenates all tests and uses webpack to transpile into ES5, (cannot merge into karma.conf.js)
// var context = require.context('./app', true, /\*.js$/);
// context.keys().forEach(context);