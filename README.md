<div align="center">

  <small><p><em><g-emoji class="g-emoji" alias="dart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f3af.png" title=":dart:">🎯</g-emoji> — If 1,000 developers <a href="http://eepurl.com/cLwjeH" rel="nofollow">signup here</a>, I will make a video course for WPGulp.</em></p></small>

  <img src="https://on.ahmda.ws/cf1298feadee/c" alt="WPGulp WordPress Gulp" />

  <h1><code>WordPress Gulp Workflow</code></h1>

[![GitHub](https://img.shields.io/wordpress/v/akismet.svg?colorA=D14543&colorB=21759B&maxAge=2592000&style=flat&label=WordPress)](https://github.com/ahmadawais/WPGulp/)
[![emoji-log](https://img.shields.io/badge/🚀%20Emoji-Log-gray.svg?colorA=D14543&colorB=21759B&style=flat)](https://github.com/ahmadawais/Emoji-Log/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/WPGulp.svg?style=social&label=Stars)](https://github.com/ahmadawais/WPGulp/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)  [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![VSCode.pro](https://img.shields.io/badge/Supported%20by-VSCode%20Power%20User%20Course%20%E2%86%92-gray.svg?colorA=D14543&colorB=21759B)](https://VSCode.pro "This open source project is supported by VSCode.pro") 

</div>

<table width='100%' align="center">
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong>WPGulp (WordPress Gulp)</strong><br />
            🎯 An advanced & extensively documented Gulp WordPress workflow. Kick-start a build-workflow for your WordPress plugins and themes with Gulp.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/ahmadawais'>@AhmadAwais</a>.
        </td>
        <td align='center'>
            <a href='https://twitter.com/MrAhmadAwais/'>
                <img src='https://img.shields.io/badge/→-AHMAD%20AWAIS-gray.svg?colorA=D14543&colorB=21759B&style=flat' width='100' />
            </a>
        </td>
    </tr>
</table>

<br>

## 📦 WPGulp Can Do `THAT™`

`WPGulp` is an advanced & extensively documented `Gulp.js` + `WordPress` workflow. It can help you kick-start a build-workflow for your WordPress plugins and themes with `Gulp.js`, save you a lot of grunt work time, follow the DRY (Don't Repeat Yourself) principle, and `#0CJS` Zero-config JavaScript startup but still configurable via `wpgulp.config.js` file. It is:

- 🥞 Versioned ✓
- 🤠 Updatable ✓
- 🗃 Set of sane-defaults ✓

<br>

💻 **DEV ENVIRONMENT**

>- _Live reload browser with BrowserSync_
>- _Hotloading styles with CSS Injection_

🎨 **STYLES**

>- _Sass to CSS conversion_
>- _Merging media queries_
>- _Error handling_
>- _Auto-prefixing_
>- _Minification_
>- _Sourcemaps_

🌋 **JavaScript**

>- _Concatenation_
>- _Minification/uglification_
>- _Separate vendor and custom JS files handling_

🌁 **IMAGES**

>- _Minification/optimization of images_
>- _File types: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`_

💯 **TRANSLATION**

>- _Generates `.pot` translation file for i18n and l10n_

👀 **WATCHING**

>- _For changes in files to recompile_
>- _File types: `.css`, `.html`, `.php`, `.js`_

<br>

![Start](https://on.ahmda.ws/83f7dd38eb83/c)

## Getting Started

#### ⚡️ Quick Overview

Run step `#1`, `#2`, and `#3` quickly in one go — Run inside local WP install's theme/plugin folder E.g. `/wp.local/wp-content/plugins/your-plugin` or `/wp.local/wp-content/themes/your-theme` directory.

```sh
# 1— Install WPGulp in your WordPress theme/plugin.
npx wpgulp
# 2— Now configure variables inside the `wpgulp.config.js` file.
# 3— Start your npm build workflow.
npm start
```

([npx](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) is a package runner tool that comes with npm 5.2+ and higher).

> 🎛   _If you want to study the detailed installation of step `#1` , `#2`,  and `#3` — then take a look at the steps below_.

<br>
<details>
 <summary><strong><code>STEP #0</code></strong> — Don't have <code>Node.js</code> + <code>npm</code> installed? Read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of `Node.js`, JavaScript, and `npm` packages — all you need to do is go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into v9.11.2 — make sure you have Node >= 8 installed.

npm -v
# Results into 6.2.0 — make sure you have npm >= 5.3 installed.
```

</details>

### → `STEP #1` — Download the Required Files

1. In the terminal go to the root folder of your WordPress plugin/theme
2. Run the following command to download all the files in the [WPGulp/src](/src) folder

_It'll take a couple of minutes to install._

```sh
npx wpgulp
```

([npx](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) is a package runner tool that comes with npm 5.2+ and higher).

![wpgulp install gif](https://on.ahmda.ws/c846c265e03a/c)

> ⚠️  I'm assuming that there are no previously present similar files in the root of your folder. Otherwise, you need to merge these very carefully. E.g. You can include the `scripts`, `devDependencies` in your current `package.json` file and so on for other files. If you run the above command all similar files will be overwritten.

### → `STEP #2` — Editing the Project Variables

Configure the project paths and other variables inside the `wpgulp.config.js` file. This is a compulsory step.

![wpgulp config](https://on.ahmda.ws/f2ca9bb4a740/c)


### → `STEP #3` — Start your project

Once the installation is done, you can open your project (WordPress plugin/theme) folder and run the start script.

```sh
npm start

# To stop press CTRL (⌃) + C
```

![wpgulp start](https://on.ahmda.ws/d64abd87de1f/c)

### → `OPTIONAL STEP #4` — More Scripts/Tasks

To optimize images and generate WP POT translation file, or generate a RTL stylesheet you can run the following commands

```sh
# To optimize images.
gulp images

# To generate WP POT translation file.
gulp translate

# To generate RTL stylesheets and Sourcemap.
gulp stylesRTL
```

<br>

![Update](https://on.ahmda.ws/d0b586da13cc/c)

## How to Update?

1. Download all the latest files in the [WPGulp/src](/src) folder inside the root folder of your WordPress plugin/theme by running `npx install-wpgulp` it will overwrite all the wpgulp files.
2. Open terminal and Install WPGulp's node dependencies by running the `npm install` commands in the root folder of your WordPress plugin/theme.

<br>

![Log](https://on.ahmda.ws/61b20ca44b08/c)

## Changelog

Read what's 📦 new, 👌 improved, 🐛 fixed, and if 📖 docs got updated.

👉 Go read the entire changelog at this link — [WPGulp Changelog →](/CHANGELOG.md)

Nothing's ever complete, so bear with us while we keep iterating towards a better future.

> ```html
> 'Coz every night I lie in bed
> The brightest colors fill my head
> A million dreams are keeping me awake
> I think of what the world could be
> A vision of the one I see
> A million dreams is all it's gonna take
> A million dreams for the world we're gonna make ...
> ```
> ... _listen to → [A million dreams!](https://www.youtube.com/watch?v=pSQk-4fddDI)_

<br>

![Hello](https://on.ahmda.ws/5cb79028dc04/c)

#### **Hello, we're the [Dev Couple](https://TheDevCouple.com)**!

I ([Ahmad Awais](https://twitter.com/mrahmadawais/)) am a OSS developer advocate, Full Stack Web Developer and a regular core contributor at WordPress. My significant other ([Maedah Batool](https://twitter.com/MaedahBatool/)) is a Technical Project Manager, and she's also a WordPress Core Contributor. Together with our [team](https://TheDevCouple.com/team), we run the [TheDevCouple.com](https://TheDevCouple.com/).

If you'd like to get insights into our love for open source software, professional full stack development, WordPress community, the growth of JavaScript or growing a family, building, and bootstrapping a business, then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!

#### [**Support our Open Source Projects!**](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

- 🚀  $99.99 — [Support for one hour or more →](https://pay.paddle.com/checkout/515568)
- 🔰  $49.99 — [Support half an hour maintenance →](https://pay.paddle.com/checkout/527253)
- ☕️  $9.99 — [Buy us lunch or coffee to keep us trucking #OpenSource →](https://pay.paddle.com/checkout/527254)

<br>

![Hello](https://on.ahmda.ws/3dea3a3b1de3/c)

### 🙌 [THEDEVCOUPLE PARTNERS](https://TheDevCouple.com/partners)

This open source project is maintained by the help of awesome businesses listed below. What? [Read more about it →](https://TheDevCouple.com/partners)

<table width='100%'>
	<tr>
		<td width='500'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/73cedc/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/ff40fe/c' /></a></td>
	</tr>
	<tr>
		<td width='500'><a target='_blank' href='https://mythemeshop.com/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/3166d9/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ipapi.com/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://d2ddoduugvun08.cloudfront.net/items/1R190r2U0p3N3L0U0b2u/ip-api.png'/></a></td>
	</tr>
</table>
<br>

![Update](https://on.ahmda.ws/63be41c10343/c)

## License & Attribution

MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/).

This project is inspired by the work of many awesome developers especially those who contribute to this project, Gulp.js, Babel, and many other dependencies as listed in the `package.json` file. FOSS (Free & Open Source Software) for the win.

[<img alt="ahmadawais" src="https://avatars1.githubusercontent.com/u/960133?v=4&s=117" width="117">](https://github.com/ahmadawais) |[<img alt="MaedahBatool" src="https://avatars2.githubusercontent.com/u/12712988?v=4&s=117" width="117">](https://github.com/MaedahBatool) |[<img alt="akmur" src="https://avatars2.githubusercontent.com/u/957841?v=4&s=117" width="117">](https://github.com/akmur) |[<img alt="marianrick" src="https://avatars0.githubusercontent.com/u/20360130?v=4&s=117" width="117">](https://github.com/marianrick) |[<img alt="asharirfan" src="https://avatars2.githubusercontent.com/u/8023941?v=4&s=117" width="117">](https://github.com/asharirfan) |[<img alt="JeremyEnglert" src="https://avatars2.githubusercontent.com/u/6110968?v=4&s=117" width="117">](https://github.com/JeremyEnglert) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ahmadawais](https://github.com/ahmadawais) |[MaedahBatool](https://github.com/MaedahBatool) |[akmur](https://github.com/akmur) |[marianrick](https://github.com/marianrick) |[asharirfan](https://github.com/asharirfan) |[JeremyEnglert](https://github.com/JeremyEnglert) |

[<img alt="ajitbohra" src="https://avatars2.githubusercontent.com/u/1039236?v=4&s=117" width="117">](https://github.com/ajitbohra) |[<img alt="noplanman" src="https://avatars3.githubusercontent.com/u/9423417?v=4&s=117" width="117">](https://github.com/noplanman) |[<img alt="cdils" src="https://avatars0.githubusercontent.com/u/3099408?v=4&s=117" width="117">](https://github.com/cdils) |[<img alt="selrond" src="https://avatars1.githubusercontent.com/u/6603389?v=4&s=117" width="117">](https://github.com/selrond) |[<img alt="EugenioPetulla" src="https://avatars3.githubusercontent.com/u/3589467?v=4&s=117" width="117">](https://github.com/EugenioPetulla) |[<img alt="FrankM1" src="https://avatars0.githubusercontent.com/u/1177638?v=4&s=117" width="117">](https://github.com/FrankM1) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ajitbohra](https://github.com/ajitbohra) |[noplanman](https://github.com/noplanman) |[cdils](https://github.com/cdils) |[selrond](https://github.com/selrond) |[EugenioPetulla](https://github.com/EugenioPetulla) |[FrankM1](https://github.com/FrankM1) |

[<img alt="isaacdanielanderson" src="https://avatars3.githubusercontent.com/u/22652927?v=4&s=117" width="117">](https://github.com/isaacdanielanderson) |[<img alt="JeffMatson" src="https://avatars2.githubusercontent.com/u/6805601?v=4&s=117" width="117">](https://github.com/JeffMatson) |[<img alt="AdnanMuhib" src="https://avatars0.githubusercontent.com/u/18069154?v=4&s=117" width="117">](https://github.com/AdnanMuhib) |[<img alt="mauryaratan" src="https://avatars3.githubusercontent.com/u/1505631?v=4&s=117" width="117">](https://github.com/mauryaratan) |[<img alt="richtabor" src="https://avatars2.githubusercontent.com/u/1813435?v=4&s=117" width="117">](https://github.com/richtabor) |[<img alt="saqibameen" src="https://avatars1.githubusercontent.com/u/31374163?v=4&s=117" width="117">](https://github.com/saqibameen) |
:---: |:---: |:---: |:---: |:---: |:---: |
[isaacdanielanderson](https://github.com/isaacdanielanderson) |[JeffMatson](https://github.com/JeffMatson) |[AdnanMuhib](https://github.com/AdnanMuhib) |[mauryaratan](https://github.com/mauryaratan) |[richtabor](https://github.com/richtabor) |[saqibameen](https://github.com/saqibameen) |

[<img alt="slushman" src="https://avatars0.githubusercontent.com/u/2255645?v=4&s=117" width="117">](https://github.com/slushman) |
:---: |
[slushman](https://github.com/slushman) |

_Follow me 👋 on Twitter for more updates and questions_ →  [![Tweet to say Hi](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

<br />
<br />
<p align="center">
<strong>For anything else, tweet at <a href="https://twitter.com/MrAhmadAwais/" target="_blank" rel="noopener noreferrer">@MrAhmadAwais</a></strong>
</p>

<div align="center">
	<p>I have released a video course to help you become a better developer — <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">Become a VSCode Power User →</a></p>
    <br />
  <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">
  <img src="https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/vscodeproPlay.jpg" /><br>VSCode</a>

  _<small><a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">VSCode Power User Course →</a></small>_
</div>

