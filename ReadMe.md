#WPGulp
Use Gulp with WordPress. 

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


##To do 
- [x] Add base files.
- [ ] Write a blog post about this.
- [ ] Add more branches with different implementation of plugins.