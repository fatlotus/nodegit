var git2 = require( '../' ).raw;

var error = new git2.Error();
// Valid
console.log( error.strError(0) );
// Invalid
console.log( error.strError(-2) );
