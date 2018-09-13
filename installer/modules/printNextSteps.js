/**
 * Prints next steps.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */

const chalk = require( 'chalk' );

/* eslint-disable no-console */
module.exports = () => {
	console.log( '\n\n✅ ', chalk.black.bgGreen( ' All done! Use your code for good. \n' ) );
	console.log(
		'Installer has added WPGulp files to the current directory.  ',
		'\nInside this directory, you can run this command:'
	);

	// Scripts.
	console.log(
		'\n👉 ',
		' Type',
		chalk.black.bgWhite( ' npm start ' ),
		'\n\n',
		'	Use to compile and run your files.',
		'\n',
		'	Watches for any changes and reports back any errors in your code.'
	);

	// Support.
	console.log( '\n✊ ', chalk.black.bgYellow( ' Support WPGulp \n' ) );
	console.log(
		'Like WPGulp? You can now support this free and open source project i.e. more updates and better maintenance: \n'
	);
	console.log(
		`	${chalk.yellow( 'Support for one hour or more →' )} https://AhmdA.ws/WPG99`,
		'\n',
		`	${chalk.yellow( 'More ways to support →' )} https://AhmdA.ws/WPGSupport`
	);

	// Get started.
	console.log( '\n\n🎯 ', chalk.black.bgGreen( ' Get Started → \n' ) );
	console.log( ' I suggest that you begin by: \n' );
	console.log( ` ${chalk.dim( '1.' )} Editing the ${chalk.green( 'wpgulp.config.js' )} file` );
	console.log( ` ${chalk.dim( '2.' )} Running ${chalk.green( 'npm' )} start`, '\n\n' );
};
