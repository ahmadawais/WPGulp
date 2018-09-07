<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong>WPGulp (WordPress Gulp)</strong><br />
            🎯 An advanced & extensively documented Gulp WordPress workflow. Kick start a build-workflow for your WordPress plugins and themes with Gulp.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/ahmadawais'>@AhmadAwais</a>.
        </td>
        <td align='center'>
            <a href='https://twitter.com/MrAhmadAwais/'>
                <img src='https://img.shields.io/badge/AHMAD-AWAIS-gray.svg?colorB=5734F5&style=flat' width='100' />
            </a>
        </td>
    </tr>
</table>

# WPGulp — WordPress Gulp Workflow

[![WPGulp](https://img.shields.io/badge/%F0%9F%94%A5%20Support%20WPGULP-%E2%93%A6-brightgreen.svg?style=flat-square)](https://pay.paddle.com/checkout/515568)
[![GitHub](https://img.shields.io/wordpress/v/akismet.svg?maxAge=2592000&style=flat-square&label=WordPress)](https://github.com/ahmadawais/WPGulp/)
[![GitHub release](https://img.shields.io/github/release/ahmadawais/WPGulp.svg?maxAge=2592000&style=flat-square&label=Version)](https://github.com/ahmadawais/WPGulp/releases)
[![Stars](https://img.shields.io/github/stars/ahmadawais/WPGulp.svg?style=social&label=Star&maxAge=200&cache=buster)](https://github.com/ahmadawais/WPGulp/stargazers)

🎯 An advanced & extensively documented Gulp WordPress workflow. Kick start a build-workflow for your WordPress plugins and themes with Gulp.

![wpgulp](https://i.imgur.com/zzoByRC.png)

- [WPGulp — WordPress Gulp Workflow](#wpgulp--wordpress-gulp-workflow)
	- [ⓦ WPGulp Can Do `THAT™`](#%E2%93%A6-wpgulp-can-do-that%E2%84%A2)
	- [🎗 Getting Started](#%F0%9F%8E%97-getting-started)
		- [→ Step #1. Download the Required Files](#%E2%86%92-step-1-download-the-required-files)
		- [→ STEP #2: Editing the Project Variables](#%E2%86%92-step-2-editing-the-project-variables)
		- [→ STEP #3: Installing NodeJS, NPM and Gulp](#%E2%86%92-step-3-installing-nodejs-npm-and-gulp)
		- [→ STEP #4: Installing Node Dependencies](#%E2%86%92-step-4-installing-node-dependencies)
		- [→ STEP #5: Just run `Gulp`](#%E2%86%92-step-5-just-run-gulp)
		- [→ Optional Step #6: Images and Translation](#%E2%86%92-optional-step-6-images-and-translation)
	- [How to Update?](#how-to-update)
		- [Project Dependencies](#project-dependencies)
		- [WPGulpTheme](#wpgulptheme)
	- [License](#license)
		- [🙌 WPCOUPLE PARTNERS](#%F0%9F%99%8C-wpcouple-partners)

## ⓦ WPGulp Can Do `THAT™`

💻 **DEV ENVIRONMENT**

>- Live reload browser with BrowserSync
>- Hotloading styles with CSS Injection

🎨 **STYLES**

>- Sass to CSS conversion
>- Merging media queries
>- Error handling
>- Auto-prefixing
>- Minification
>- Sourcemaps

🌋 **JavaScript**


>- Concatenation,
>- Minification/uglification,
>- Separate vendor and custom JS files handling

🌁 **IMAGES**

>- Minification/optimization of images
>- File types: _`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`_

💯 **TRANSLATION**

>- Generates `.pot` translation file for i18n and l10n

👀 **WATCHING**

>- For changes in files to recompile
>- File types: _`.css`, `.html`, `.php`, `.js`_

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
# For MAC OS X; run the following command with super user.
sudo npm install --global gulp

# For Linux; run the following command.
npm install --global gulp
```

### → STEP #4: Installing Node Dependencies
We are in the root folder of our WordPress plugin or WordPress theme at the moment, let's install the Node Dependencies. In the terminal run this command and wait for it to download all the NodeJS dependencies. It's a one-time process and can take about 5 minutes depending on the internet speed of your connection.

```bash
# For MAC OS X run the following command with super user.
sudo npm install

# For Linux run the following command.
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

# To generate RTL stylesheets and Sourcemap.
gulp stylesRTL
```

## How to Update?
1. Delete old files and download the latest [`gulpfile.js`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/package.json), and [`.gitignore`](https://raw.githubusercontent.com/ahmadawais/WPGulp/master/.gitignore) files in the root of your WP project.
2. Open your WordPress project (plugin/theme) root folder in the terminal and run
```bash
# For MAC OS X run the following command with super user.
sudo npm install
# For Linux run the following command.
npm install
```

Wait for the new dependencies to be downloaded.
Once the download is complete type `gulp` and boom!

### Project Dependencies
- Built with `Mac OS X` but tested and works well with `Linux` as well as `Windows`.
- You must have [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/download/), and [Gulp](http://gulpjs.com/) installed globally.

### WPGulpTheme
Check out a basic WordPress theme implementation with WPGulp called [WPGulpTheme](https://github.com/ahmadawais/WPGulpTheme). This theme demonstrates the architecture followed by default within WPGulp, which is most definitely optional.

## License

Licensed under `MIT` — Copyright [Ahmad Awais](https://AhmadAwais.com/)

---

### 🙌 [WPCOUPLE PARTNERS](https://WPCouple.com/partners)

This open source project is maintained by the help of awesome businesses listed below. What? [Read more about it →](https://WPCouple.com/partners)

<table width='100%'>
    <tr>
        <td width='333.33'><a target='_blank' href='https://www.gravityforms.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrE/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://kinsta.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu5O/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://wpengine.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mto3/c' /></a></td>
    </tr>
    <tr>
        <td width='333.33'><a target='_blank' href='https://www.sitelock.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtyZ/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://wp-rocket.me/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrv/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://blogvault.net/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtph/c' /></a></td>
    </tr>
    <tr>
        <td width='333.33'><a target='_blank' href='https://cridio.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtmy/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://wecobble.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrW/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://www.cloudways.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu0C/c' /></a></td>
    </tr>
    <tr>
        <td width='333.33'><a target='_blank' href='https://www.cozmoslabs.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu9W/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://wpgeodirectory.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtwv/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://www.wpsecurityauditlog.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtkh/c' /></a></td>
    </tr>
    <tr>
        <td width='333.33'><a target='_blank' href='https://mythemeshop.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/n3ug/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://www.liquidweb.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtnt/c' /></a></td>
        <td width='333.33'><a target='_blank' href='https://WPCouple.com/contact?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu3F/c' /></a></td>
    </tr>
</table>
