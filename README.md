# Zurb Foundation Sass Template

![Zurb Foundation Sass Template](website/images/zurbsass.png)

## Installation
1. Download and install [NodeJS](https://nodejs.org/).
2. Download and install [Ruby](https://www.ruby-lang.org/en/).
3. Open command line and type `gem install sass`.
4. Clone or Download project straight from GitHub.
5. Extract the zip file and start working.

## Updates
* 2.0.0, 6/24/2015 - Added uncss, autoprefix, minify and auto-update to HTML files.
* 1.0.0, 6/8/2015 - Initial release.

## Directions
* cd into the directory.
* Run `npm install`.
* Run `bower install` to install Zurb Foundation.
* Run `compass watch` to compile the SASS files.
* Run `compass watch --output-style=compressed` to compile to minified CSS (or edit config.rb).

When finished development
* Run `grunt clean` to uncss, autoprefix, minify and auto-update your HTML files.

## Updating
* Run `bower update` to update Zurb Foundation.
* Run `bower install package --save` to add things to your development stack.

## Updating configuration
* At [Gruntfile.js](https://github.com/GBratsos/Zurb-Foundation-SASS/blob/master/Gruntfile.js) on lines 22 and 52 you can insert your project files in order to automatically get updated with the minified CSS file.
* At [config.rb](https://github.com/GBratsos/Zurb-Foundation-SASS/blob/master/config.rb) you can edit the SASS configuration.
* On new HTML files add these lines of code in order to auto-update with gulp command.

`<!-- build:css stylesheets/app.min.css -->
    <link rel="stylesheet" href="stylesheets/app.css">
    <!-- /build -->`

## File Tree Explaination
* /resoures - contains the SCSS files.
* /website - contains the website files (images, fonts, js, css, html).

## License
[GPLv3](LICENSE)

## Sass Resources
* Learn about [SASS](http://sass-lang.com/guide).
* Tutorial about [SASS](http://leveluptuts.com/tutorials/sass-tutorials).
* Learn about [Zurb Foundation](http://foundation.zurb.com/).

## CSS Guidelines
* [CSS Guidelines](http://cssguidelin.es/)

## Recommended SASS compiler
You can use [Koala app](http://koala-app.com/).

## Recommended Text Editor
You can use [Brackets](http://brackets.io/).

Check out some awesome [Plugins](https://github.com/GBratsos/brackets-zurb-foundation) for Brackets text editor.
