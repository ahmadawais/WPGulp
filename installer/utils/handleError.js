/**
 * Error handler
 */
'use strict';

module.exports = err => {
	if ( err ) {
		console.log( 'ERROR: ' + err ); // eslint-disable-line no-console
	}
};
