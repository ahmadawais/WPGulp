
<h1 align="center">
  <img src="https://on.ahmda.ws/cf1298feadee/c" alt="WPGulp WordPress Gulp" />

  WPGulp — WordPress Gulp Workflow
</h1>

[![GitHub](https://img.shields.io/wordpress/v/akismet.svg?maxAge=2592000&style=flat-square&label=WordPress)](https://github.com/ahmadawais/WPGulp/)
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat.svg)](https://github.com/ahmadawais/Emoji-Log/) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/WPGulp.svg?style=social&label=Stars)](https://github.com/ahmadawais/WPGulp/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)

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

- [ⓦ WPGulp Can Do `THAT™`](#%E2%93%A6-wpgulp-can-do-that%E2%84%A2)
- [🎗 Getting Started](#%F0%9F%8E%97-getting-started)
	- [→ Step #1. Download the Required Files](#%E2%86%92-step-1-download-the-required-files)
	- [→ STEP #2: Editing the Project Variables](#%E2%86%92-step-2-editing-the-project-variables)
	- [→ STEP #3: Installing Node Dependencies](#%E2%86%92-step-3-installing-node-dependencies)
	- [→ STEP #5: Start your project](#%E2%86%92-step-5-start-your-project)
	- [→ Optional Step #6: More Scripts/Tasks](#%E2%86%92-optional-step-6-more-scriptstasks)
- [How to Update?](#how-to-update)
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

<br><br>

## 🎗 Getting Started

<details>
 <summary><strong> STEP #0</strong> — Don't have <code>Node.js</code> + <code>npm</code> installed? Read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of `Node.js`, JavaScript, and `npm` packages — all you need to do is go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into v9.1.0 — make sure you have Node >= 8 installed.

npm -v
# Results into 5.6.0 — make sure you have npm >= 5.3 installed.
```

</details>

### → Step #1. Download the Required Files

Download all the files in the [WPGulp/src](/src) folder inside the root folder of your WordPress plugin/theme

> ⚠️  I'm assuming that there are no previously present similar files in the root of your folder. Otherwise, you need to merge these very carefully. E.g. You can include the `scripts`, `devDependencies` in your current `pacakge.json` file and so on for other files.

🤖 _**AUTOMATION:** You can also download these files via terminal and `curl`._

```sh
curl -L https://git.io/wpggiv2 -o ".gitignore" && curl -L https://git.io/wpgfiv2 -o "gulpfile.babel.js" && curl -L https://git.io/wpgpkgv2 -o "package.json" && curl -L https://git.io/wpgcfgv2 -o "wpgulp.config.js" && curl -L https://git.io/wpgrecv2 -o ".editorconfig" && curl -L https://git.io/wpgresv2 -o ".eslintrc.js" && curl -L https://git.io/wpgresiv2 -o ".eslintignore"
```

### → STEP #2: Editing the Project Variables

Configure the project paths and other variables inside the `wpgulp.config.js` file.

### → STEP #3: Installing Node Dependencies

Open terminal and Install WPGulp's node dependencies by running the following commands in the root folder of your WordPress plugin/theme.

```sh
# Install npm dependencies.
npm install

# Or use sudo if you get any errors.
sudo npm install
```

### → STEP #5: Start your project

Once the installation is done, you can open your project (WordPress plugin/theme) folder and run the start script.

```sh
npm start

# To stop press CTRL (⌃) + C
```

### → Optional Step #6: More Scripts/Tasks

To optimize images and generate WP POT translation file, or generate a RTL stylesheet you can run the following commands

```sh
# To optimize images
gulp images

# To generate WP POT translation file.
gulp translate

# To generate RTL stylesheets and Sourcemap.
gulp stylesRTL
```

## How to Update?

1. Download all the latest files in the [WPGulp/src](/src) folder inside the root folder of your WordPress plugin/theme
2. Open terminal and Install WPGulp's node dependencies by running the following commands in the root folder of your WordPress plugin/theme.

```sh
# Install npm dependencies.
npm install

# Or use sudo if you get any errors.
sudo npm install
```

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
