#WPGulp
Use Gulp with WordPress.
Read: [Introducing WPGulp: An Easy to Use WordPress Gulp Boilerplate](https://ahmadawais.com/introducing-wpgulp-an-easy-to-use-wordpress-gulp-boilerplate/)

![](https://i.imgur.com/zzoByRC.png)

## What Can WPGulp Do?
 1. Sass to CSS conversion
 2. JS concatenation
 3. Watch files
 4. Live reloads browser with BrowserSync
 

##Implementations
- Checkout a basic WordPress theme implementation with WPGulp called [WPGulpTheme](https://github.com/ahmadawais/WPGulpTheme).
- More coming soon.

## How?
###METHOD #1
- Clone this repo and build your WordPress project with it
- Configure the project paths in gulpfile.js (Line #23 t0 #38)
- Open the project folder in the terminal and type `sudo npm install`  wait for the files to get downloaded. It will take about 2 minutes to add a node_modules folder inside your project.
- Once the download is complete type `gulp` and boom!

###METHOD #2
- Download `gulpfile.js` and `pacakage.json` file in the root of your WP project
- Configure the project paths in gulpfile.js (Line #23 t0 #38)
- Open the project folder in the terminal and type `sudo npm install`  wait for the files to get downloaded. It will take about 2 minutes to add a node_modules folder inside your project.
- Once the download is complete type `gulp` and boom!

##Prerequisite & Gotchas
- Tested and built on Mac OS Yosemite.
- You must have Git and Node, NPM, Gulp installed globally. 
- You should never commit `node_modules` folder, you should exclude it in `.gitignore` file.

## Feature Branches
- Live browser reload with [BrowserSync](https://github.com/ahmadawais/WPGulp/tree/BrowserSync)
- Images minification with [Imagemin](https://github.com/ahmadawais/WPGulp/tree/Images)

##To do 
- [x] Add base files.
- [x] Write a blog post about this.
- [x] Add more branches with different implementation of plugins.
- [ ] Improve documentation with more links.

The MIT License (MIT)
Copyright (c) 2016 ahmadawais <ahmadawais.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

