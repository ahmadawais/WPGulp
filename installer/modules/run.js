const fs = require('fs');
const ora = require('ora');
const execa = require('execa');
const chalk = require('chalk');
const download = require('download');
const clear = require('clear-any-console');
const handleError = require('./handleError');
const printNextSteps = require('./printNextSteps');

module.exports = () => {
	// Init.
	clear();

	const theCWD = process.cwd();
	const theCWDArray = theCWD.split('/');
	const theDir = theCWDArray[theCWDArray.length - 1];

	// Files.
	const filesToDownload = [
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/.editorconfig`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/.eslintignore`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/.eslintrc.js`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/.gitignore`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/gulpfile.babel.js`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/package.json`,
		`https://raw.githubusercontent.com/ahmadawais/WPGulp/master/WPGulp/wpgulp.config.js`
	];

	// Dotfiles (if any).
	const dotFiles = [`.editorconfig`, `.eslintignore`, `.eslintrc.js`, `.gitignore`];

	// Start.
	console.log('\n'); // eslint-disable-line no-console
	console.log(
		'📦 ',
		chalk.black.bgYellow(` Downloading WPGulp files in: → ${chalk.bgGreen(` ${theDir} `)}\n`),
		chalk.dim(`\n In the directory: ${theCWD}\n`),
		chalk.dim('This might take a couple of minutes.\n')
	);

	const spinner = ora({ text: '' });
	spinner.start(`1. Creating WPGulp files inside → ${chalk.black.bgWhite(` ${theDir} `)}`);

	// Download.
	Promise.all(filesToDownload.map(x => download(x, `${theCWD}`))).then(async () => {
		dotFiles.map(x => fs.rename(`${theCWD}/${x.slice(1)}`, `${theCWD}/${x}`, err => handleError(err)));
		spinner.succeed();

		// The npm install.
		spinner.start(`2. Installing npm packages...`);
		await execa(`npm`, [`install`]);
		spinner.succeed();

		// Done.
		printNextSteps();
	});
};
