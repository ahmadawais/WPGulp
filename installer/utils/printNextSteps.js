const sym = require('log-symbols');
const {green: g, yellow: y, cyan: c, dim: d} = require('chalk');

module.exports = () => {
	console.log(sym.success, g(`ALL DONE! Use your code for good.`));
	console.log(d(`WPGulp files are downloaded to the current directory.`));
	console.log(d(`Inside this directory, you can run the following command`));

	// Scripts.
	console.log();
	console.log(sym.info, g(`npm start`));
	console.log(d(`Use during development`));
	console.log(d(`It watches for any changes in your files`));

	console.log();
	console.log(sym.info, `For more commands, read the docs at:`);
	console.log(g(`https://github.com/ahmadawais/WPGulp`));
	// Support.
	console.log();
	console.log(sym.warning, y(`SUPPORT`), `WPGulp:`);
	console.log();
	console.log(`Learn to build Automation CLI Command Line Tools:`);
	console.log(y(`https://NodeCLI.com`));
	console.log();
	console.log(`Become a VSCode Power Use to save hours every week:`);
	console.log(y(`https://VSCode.pro`));
	console.log();
	console.log(`Follow the author of WPGulp:`);
	console.log(y(`https://twitter.com/MrAhmadAwais`));

	// Get started.
	console.log();
	console.log(sym.info, g(`Get Started`));
	console.log(d(`I suggest that you begin by:`));
	console.log(`1. Editing the ${c(`wpgulp.config.js`)} file`);
	console.log(`2. And then running ${g(`npm start`)}`);
	console.log();
};
