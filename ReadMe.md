🙌 — If 500 people [signup here](http://eepurl.com/cLwjeH), I will build a video series for WPGulp.

---

# WPGulp
[![Project Supported by](https://img.shields.io/badge/Project_Supported_By-ES6.io%20Tutorials-brightgreen.svg?style=flat-square)](https://ahmda.ws/Learn_ES6) [![WPGulp](https://img.shields.io/badge/Built%20For%20WordPress-%E2%93%A6-lightgrey.svg?style=flat-square)](https://github.com/ahmadawais/WPGulp/) [![](https://img.shields.io/wordpress/v/akismet.svg?maxAge=2592000&style=flat-square&label=WordPress)](https://github.com/ahmadawais/WPGulp/) [![GitHub release](https://img.shields.io/github/release/ahmadawais/WPGulp.svg?maxAge=2592000&style=flat-square&label=Version)](https://github.com/ahmadawais/WPGulp/releases) [![](https://img.shields.io/github/stars/ahmadawais/WPGulp.svg?style=social&label=Star&maxAge=200&cache=buster)](https://github.com/ahmadawais/WPGulp/stargazers)

Use Gulp with WordPress. An advanced but portable Gulp workflow for WordPress. Start using Gulp with your WordPress plugins and themes.

![](https://i.imgur.com/zzoByRC.png)

Read: [Introducing WPGulp: An Easy to Use WordPress Gulp Boilerplate](https://ahmadawais.com/introducing-wpgulp-an-easy-to-use-wordpress-gulp-boilerplate/)

## ⓦ What Can WPGulp Do?
1. Live reloads browser with BrowserSync
2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps, CSS minification, and Merging Media Queries
3. JS: Concatenates & uglifies Vendor and Custom JS files
4. Images: Minifies PNG, JPEG, GIF and SVG images
5. Watches files for changes in CSS or JS
6. Watches files for changes in PHP
7. Corrects the line endings
8. InjectCSS instead of browser page reload
9. Generates .pot file for i18n and l10n
 
## 🎗 Getting Started?
### → Step #1. Download the Required Files
- Download [`gulpfile.js`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/package.json), and [`.gitignore`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/.gitignore) files inside the root folder of your WordPress plugin or WordPress theme
- If you have cURL installed then you can run the following command to download all three files in one go (just make sure you open the root folder of your WordPress plugin or WordPress theme and download these files in the root):
```bash
curl -O https://raw.githubusercontent.com/ahmadawais/WPGulp/master/package.json && curl -O https://raw.githubusercontent.com/ahmadawais/WPGulp/master/gulpfile.js && curl -O https://raw.githubusercontent.com/ahmadawais/WPGulp/master/.gitignore
```

### → STEP #2: Editing the Project Variables
Configure the project variables E.g. paths, translation data, etc. in `gulpfile.js`. Project variables can be found in the following two comments
```JS
// START Editing Project Variables.
{PROJECT VARIABLES}
// STOP Editing Project Variables.
```

### → STEP #3: Installing NodeJS, NPM and Gulp
You need to have NodeJS & NPM installed. If it is installed, skip to installing Gulp. Otherwise, download [NodeJS](https://nodejs.org/en/download/) and install it. After installing NodeJS, you can verify the install of both NodeJS and Node Package Manager by typing the following commands. This step needs to be followed only once if you don't have NodeJS installed. No need to repeat it ever again.
```bash
node -v
# Results into v4.2.6

npm -v
# Results into 3.9.0
```

NodeJS and NPM are installed, now we need to install `Gulp` globally. To do that, run the following command
```bash
# For MAC OS X; run the following command with super user
sudo npm install --global gulp

# For Linux; run the following command
npm install --global gulp
```

### → STEP #4: Installing Node Dependencies
We are in the root folder of our WordPress plugin or WordPress theme at the moment, let's install the Node Dependencies. In the terminal run this command and wait for it to download all the NodeJS dependencies. It's a one time process and can take about 5 mins depending on the internet speed of your connection.

```bash
# For MAC OS X run the following command with super user
sudo npm install

# For Linux run the following command
npm install
```

### → STEP #5: Just run `Gulp`
Once the NodeJS dependencies are downloaded just run the following command to get up and running with WPGulp
```bash
# To start gulp
gulp

# To stop gulp press CTRL (⌃) + C
```

### → Optional Step #6: Images and Translation
To optimize images and generate WP POT translation file, you can run the following commands
```bash
# To optimize images
gulp images

# To generate WP POT translation file.
gulp translate
```

## How to Update?
1. Delete old files and download the latest [`gulpfile.js`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/package.json), and [`.gitignore`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/.gitignore) files in the root of your WP project.
2. Open your WordPress project (plugin/theme) root folder in the terminal and run
```bash
# For MAC OS X run the following command with super user
sudo npm install
# For Linux run the following command
npm install
```
 
Wait for the new dependencies to be downloaded.
Once the download is complete type `gulp` and boom!

### Project Dependencies
- Built with `Mac OS X` but tested and works well with `Linux` as well as `Windows`.
- You must have [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/download/), and [Gulp](http://gulpjs.com/) installed globally. 

### WPGulpTheme
Check out a basic WordPress theme implementation with WPGulp called [WPGulpTheme](https://github.com/ahmadawais/WPGulpTheme). This theme demonstrates the architecture followed by default within WPGulp, which is most definitely optional.

## To do 
It's hard to maintain a FOSS free and open source software project on my own. Which is why there is a backlog and an incomplete to-do list.
- [x] Build WPGulp ✔︎
- [x] Write an introductory blog post about WPGulp ✔︎
- [x] Improve documentation with more easy to follow details ✔︎
- [ ] Find sponsorship to produce free of cost video tutorials for WPGulp ⓦ
- [ ] Write about the new WPGulp tasks, `gulp images` to optimize images and `gulp translate` to generate WP POT translation file.

## Contribute
I am looking for WordPress ⓦ developers to contribute. I am open to all kinds of new NodeJS packages and workflows. I can always host custom, opinionated workflows in the form of a separate branch and WPGulp. Just make sure you follow the WordPress Coding Standards. 

## Changelog

### Version 1.0.3
- FIX: Required `gulp-wp-pot`
- FIX: Required `gulp-sort`
- IMPROVEMENT: Better docs for Translation variables

### Version 1.0.2 
- NEW: Documentation update `README.md` 
- TASK: Image optimization `gulp images`
- TASK: WP POT Translation file generation `gulp translate`

### Version 1.0.1 
- BrowserSync
- LineEndings

### Version 1.0.0 
- First version
- CSS, JS, PHP and Watch Routines

## License
Released under GNU GPLv2.0 or later license.
Copyright [Ahmad Awais](https://AhmadAwais.com/)

---

🙌 — If 500 people [signup here](http://eepurl.com/cLwjeH), I will build a video series for WPGulp.
