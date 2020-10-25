#!/usr/bin/env node

const fs = require('fs');
const ora = require('ora');
const execa = require('execa');
const {yellow: y, green: g, dim: d} = require('chalk');
const download = require('download');
const clear = require('clear-any-console');
const checkNode = require('cli-check-node');
const handleError = require('./utils/handleError');
const printNextSteps = require('./utils/printNextSteps');
const unhandledError = require('cli-handle-unhandled');

const spinner = ora({text: ''});

(async () => {
	clear();
	unhandledError();
	checkNode('10');

	const CWD = process.cwd();
	const CWDArray = CWD.split('/');
	const installDir = CWDArray[CWDArray.length - 1];

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
	console.log();
	console.log(g(`Installing WPGulp in directory:`), d(installDir));
	console.log(d(`This might take a couple of minutes.\n`));

	spinner.start(`${y(`DOWNLOADING`)} WPGulp files…`);

	// Download.
	Promise.all(filesToDownload.map(x => download(x, `${CWD}`))).then(async () => {
		dotFiles.map(dotFile =>
			fs.rename(
				`${CWD}/${dotFile.slice(1)}`, // e.g. gitignore without a (.) prefix.
				`${CWD}/${dotFile}`, // Add the (.) preferred
				err => handleError(err)
			)
		);
		spinner.succeed(`${g(`DOWNLOADED`)} WPGulp files`);

		spinner.start(`${y(`INSTALLING`)} npm packages…`);
		await execa(`npm`, [`install`]);
		spinner.succeed(`${g(`INSTALLED`)} npm packages`);

		printNextSteps();
	});
})();
