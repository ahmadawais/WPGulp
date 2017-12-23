/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */
 
 module.exports = {

	// START Editing Project Variables.
	// Project related.
	project                 : 'WPGulpTheme', // Project Name.
	projectURL              : 'wpgulp.dev', // Local project URL of your already running WordPress site. Could be something like local.dev or localhost:8888.
	productURL              : './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	
	// Translation related.
	text_domain             : 'WPGULP', // Your textdomain here.
	translationFile         : 'WPGULP.pot', // Name of the transalation file.
	translationDestination  : './languages', // Where to save the translation files.
	packageName             : 'WPGULP', // Package name.
	bugReport               : 'https://AhmadAwais.com/contact/', // Where can users report bugs.
	lastTranslator          : 'Ahmad Awais <your_email@email.com>', // Last translator Email ID.
	team                    : 'WPTie <your_email@email.com>', // Team's Email ID.
	
	// Style related.
	styleSRC                : './assets/css/style.scss', // Path to main .scss file.
	styleDestination        : './', // Path to place the compiled CSS file.
	// Default set to root folder.
	
	// JS Vendor related.
	jsVendorSRC             : './assets/js/vendor/*.js', // Path to JS vendor folder.
	jsVendorDestination     : './assets/js/', // Path to place the compiled JS vendors file.
	jsVendorFile            : 'vendors', // Compiled JS vendors file name.
	// Default set to vendors i.e. vendors.js.
	
	// JS Custom related.
	jsCustomSRC             : './assets/js/custom/*.js', // Path to JS custom scripts folder.
	jsCustomDestination     : './assets/js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile            : 'custom', // Compiled JS custom file name.
	// Default set to custom i.e. custom.js.
	
	// Images related.
	imagesSRC               : './assets/img/raw/**/*.{png,jpg,gif,svg}', // Source folder of images which should be optimized.
	imagesDestination       : './assets/img/', // Destination folder of optimized images. Must be different from the imagesSRC folder.
	
	// Watch files paths.
	styleWatchFiles         : './assets/css/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	vendorJSWatchFiles      : './assets/js/vendor/*.js', // Path to all vendor JS files.
	customJSWatchFiles      : './assets/js/custom/*.js', // Path to all custom JS files.
	projectPHPWatchFiles    : './**/*.php', // Path to all PHP files.
	
	
	// Browsers you care about for autoprefixing.
	// Browserlist https        ://github.com/ai/browserslist
	AUTOPREFIXER_BROWSERS : [
	    'last 2 version',
	    '> 1%',
	    'ie >= 9',
	    'ie_mob >= 10',
	    'ff >= 30',
	    'chrome >= 34',
	    'safari >= 7',
	    'opera >= 23',
	    'ios >= 7',
	    'android >= 4',
	    'bb >= 10'
	  ],
	
	// STOP Editing Project Variables.
};