/**
 * Gulpfile.
 *
 * Gulp with WordPress.
 *
 * Implements:
 *      1. Live reloads browser with BrowserSync.
 *      2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps,
 *         CSS minification, and Merge Media Queries.
 *      3. JS: Concatenates & uglifies Vendor and Custom JS files.
 *      4. Images: Minifies PNG, JPEG, GIF and SVG images.
 *      5. Watches files for changes in CSS or JS.
 *      6. Watches files for changes in PHP.
 *      7. Corrects the line endings.
 *      8. InjectCSS instead of browser page reload.
 *      9. Generates .pot file for i18n and l10n.
 *
 * @author Ahmad Awais (@ahmadawais)
 * @version 1.0.4
 */

/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

// START Editing Project Variables.
// Project related.
const project = 'WPGulpTheme'; // Project Name.
const projectURL = 'wpgulp.dev'; // Local project URL of your already running WordPress site. Could be something like local.dev or localhost:8888.
const productURL = './'; // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.

// Translation related.
const textDomain = 'WPGULP'; // Your textdomain here.
const translationFile = 'WPGULP.pot'; // Name of the transalation file.
const translationDestination = './languages'; // Where to save the translation files.
const packageName = 'WPGULP'; // Package name.
const bugReportLink = 'https://AhmadAwais.com/contact/'; // Where can users report bugs.
const lastTranslatorInfo = 'Ahmad Awais <your_email@email.com>'; // Last translator Email ID.
const teamId = 'WPTie <your_email@email.com>'; // Team's Email ID.

// All the paths in one place
const paths = {

  // Style related.
  styleSRC: './assets/css/style.scss', // Path to main .scss file.
  styleDestination: './', // Path to place the compiled CSS file.
  // Default set to root folder.

  // JS Vendor related.
  jsVendorSRC: './assets/js/vendor/*.js', // Path to JS vendor folder.
  jsVendorDestination: './assets/js/', // Path to place the compiled JS vendors file.
  jsVendorFile: 'vendors', // Compiled JS vendors file name.
  // Default set to vendors i.e. vendors.js.

  // JS Custom related.
  jsCustomSRC: './assets/js/custom/*.js', // Path to JS custom scripts folder.
  jsCustomDestination: './assets/js/', // Path to place the compiled JS custom scripts file.
  jsCustomFile: 'custom', // Compiled JS custom file name.
  // Default set to custom i.e. custom.js.

  // Images related.
  imagesSRC: './assets/img/raw/**/*.{png,jpg,gif,svg}', // Source folder of images which should be optimized.
  imagesDestination: './assets/img/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

  // Watch files paths.
  styleWatchFiles: './assets/css/**/*.scss', // Path to all *.scss files inside css folder and inside them.
  vendorJSWatchFiles: './assets/js/vendor/*.js', // Path to all vendor JS files.
  customJSWatchFiles: './assets/js/custom/*.js', // Path to all custom JS files.
  projectPHPWatchFiles: './**/*.php' // Path to all PHP files.
};

// Browsers you care about for autoprefixing.
// Browserlist https        ://github.com/ai/browserslist
const AUTOPREFIXER_BROWSERS = [
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
];

// STOP Editing Project Variables.

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
const gulp = require('gulp'); // Gulp of-course

// CSS related plugins.
const sass = require('gulp-sass'); // Gulp pluign for Sass compilation.
const minifycss = require('gulp-uglifycss'); // Minifies CSS files.
const autoprefixer = require('gulp-autoprefixer'); // Autoprefixing magic.
const mmq = require('gulp-merge-media-queries'); // Combine matching media queries into one media query definition.

// JS related plugins.
const babel = require('gulp-babel'); // Enable usage of ES6 in your JS files.
const concat = require('gulp-concat'); // Concatenates JS files
const uglify = require('gulp-uglify'); // Minifies JS files

// Image realted plugins.
const imagemin = require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
const rename = require('gulp-rename'); // Renames files E.g. style.css -> style.min.css
const lineec = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)
const filter = require('gulp-filter'); // Enables you to work on a subset of the original files by filtering them using globbing.
const sourcemaps = require('gulp-sourcemaps'); // Maps code in a compressed file (E.g. style.css) back to it’s original position in a source file (E.g. structure.scss, which was later combined with other css files to generate style.css)
const notify = require('gulp-notify'); // Sends message notification to you
const browserSync = require('browser-sync').create(); // Reloads browser and injects CSS. Time-saving synchronised browser testing.
const reload = browserSync.reload; // For manual browser reload.
const wpPot = require('gulp-wp-pot'); // For generating the .pot file.
const sort = require('gulp-sort'); // Recommended to prevent unnecessary changes in pot-file.

/**
 * Task: `browser-sync`.
 *
 * Live Reloads, CSS injections, Localhost tunneling.
 *
 * This task does the following:
 *    1. Sets the project URL
 *    2. Sets inject CSS
 *    3. You may define a custom port
 *    4. You may want to stop the browser from openning automatically
 */
gulp.task('browser-sync', () => {
  browserSync.init({

    // For more options
    // @link http://www.browsersync.io/docs/options/

    // Project URL.
    proxy: projectURL,

    // `true` Automatically open the browser with BrowserSync live server.
    // `false` Stop the browser from automatically opening.
    open: true,

    // Inject CSS changes.
    // Commnet it to reload browser for every CSS change.
    injectChanges: true

    // Use a specific port (instead of the one auto-detected by Browsersync).
    // port: 7000,

  });
});

/**
 * Task: `styles`.
 *
 * Compiles Sass, Autoprefixes it and Minifies CSS.
 *
 * This task does the following:
 *    1. Gets the source scss file
 *    2. Compiles Sass to CSS
 *    3. Writes Sourcemaps for it
 *    4. Autoprefixes it and generates style.css
 *    5. Renames the CSS file with suffix .min.css
 *    6. Minifies the CSS file and generates style.min.css
 *    7. Injects CSS or reloads the browser via browserSync
 */
gulp.task('styles', () => {
  gulp.src(paths.styleSRC)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compact',

      // outputStyle: 'compressed',
      // outputStyle: 'nested',
      // outputStyle: 'expanded',
      precision: 10
    }))
    .on('error', console.error.bind(console)) // eslint-disable-line no-console
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))

    .pipe(sourcemaps.write('./'))
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.styleDestination))

    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(mmq({log: true})) // Merge Media Queries only for .min.css version.

    .pipe(browserSync.stream()) // Reloads style.css if that is enqueued.

    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss({
      maxLineLen: 10
    }))
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.styleDestination))

    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(browserSync.stream())// Reloads style.min.css if that is enqueued.
    .pipe(notify({message: 'TASK: "styles" Completed! 💯', onLast: true}));
});

/**
 * Task: `vendorJS`.
 *
 * Concatenate and uglify vendor JS scripts.
 *
 * This task does the following:
 *     1. Gets the source folder for JS vendor files
 *     2. Concatenates all the files and generates vendors.js
 *     3. Renames the JS file with suffix .min.js
 *     4. Uglifes/Minifies the JS file and generates vendors.min.js
 */
gulp.task('vendorsJs', () => {
  gulp.src(paths.jsVendorSRC)
    .pipe(babel())
    .pipe(concat(`${paths.jsVendorFile}.js`))
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.jsVendorDestination))
    .pipe(rename({
      basename: paths.jsVendorFile,
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.jsVendorDestination))
    .pipe(notify({message: 'TASK: "vendorsJs" Completed! 💯', onLast: true}));
});

/**
 * Task: `customJS`.
 *
 * Concatenate and uglify custom JS scripts.
 *
 * This task does the following:
 *     1. Gets the source folder for JS custom files
 *     2. Concatenates all the files and generates custom.js
 *     3. Renames the JS file with suffix .min.js
 *     4. Uglifes/Minifies the JS file and generates custom.min.js
 */
gulp.task('customJS', () => {
  gulp.src(paths.jsCustomSRC)
    .pipe(concat(`${paths.jsCustomFile}.js`))
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.jsCustomDestination))
    .pipe(rename({
      basename: paths.jsCustomFile,
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(lineec()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest(paths.jsCustomDestination))
    .pipe(notify({message: 'TASK: "customJs" Completed! 💯', onLast: true}));
});

/**
 * Task: `images`.
 *
 * Minifies PNG, JPEG, GIF and SVG images.
 *
 * This task does the following:
 *     1. Gets the source of images raw folder
 *     2. Minifies PNG, JPEG, GIF and SVG images
 *     3. Generates and saves the optimized images
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp images`.
 */
gulp.task('images', () => {
  gulp.src(paths.imagesSRC)
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 3, // 0-7 low-high
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest(paths.imagesDestination))
    .pipe(notify({message: 'TASK: "images" Completed! 💯', onLast: true}));
});

/**
 * WP POT Translation File Generator.
 *
 * * This task does the following:
 *     1. Gets the source of all the PHP files
 *     2. Sort files in stream by path or any custom sort comparator
 *     3. Applies wpPot with the variable set at the top of this file
 *     4. Generate a .pot file of i18n that can be used for l10n to build .mo file
 */
gulp.task('translate', () => {
  gulp.src(paths.projectPHPWatchFiles)
    .pipe(sort())
    .pipe(wpPot({
      domain: textDomain,
      destFile: translationFile,
      package: packageName,
      bugReport: bugReportLink,
      lastTranslator: lastTranslatorInfo,
      team: teamId
    }))
    .pipe(gulp.dest(translationDestination))
    .pipe(notify({message: 'TASK: "translate" Completed! 💯', onLast: true}));
});

/**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */
gulp.task('default', ['styles', 'vendorsJs', 'customJS', 'images', 'browser-sync'], () => {
  gulp.watch(paths.projectPHPWatchFiles, reload); // Reload on PHP file changes.
  gulp.watch(paths.styleWatchFiles, ['styles']); // Reload on SCSS file changes.
  gulp.watch(paths.vendorJSWatchFiles, ['vendorsJs', reload]); // Reload on vendorsJs file changes.
  gulp.watch(paths.customJSWatchFiles, ['customJS', reload]); // Reload on customJS file changes.
});
