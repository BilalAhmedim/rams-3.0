# init npm
echo "Npm Init"
npm init

# install gulp global 
echo "install Gulp Globaly..."
npm install gulp-cli --g

# install gulp locally
echo "install gulp locally"
npm install gulp --save-dev

# install postcss and it's modules
echo "install postcss and modules..."
npm install gulp-postcss postcss-import postcss-mixins postcss-simple-vars postcss-hexrgba postcss-nested --save-dev

# install normalize
echo "install normalize.css..."
npm install normalize.css --save

#install bootstrap
echo "installing bootstrap..."
npm install bootstrap --save

# install auto prefixer
echo "installing autoprefixer"
npm install autoprefixer --save-dev

# install browsersync
echo "install browsed-sync..."
npm install browser-sync --save-dev

# install gulp watcher
echo "installing gulp-watch"
npm install gulp-watch

# install plumber error reporting tool
echo "install gulp-plumber..."
npm install gulp-plumber --save-dev

# install nano, rename sourcemaps
echo "install gulp-nano gulp-sourcemaps"
npm install gulp-nano gulp-sourcemaps --save-dev

# create directory
echo "creating directory"
touch App/css/style.css
touch App/js/coustom.js
touch App/index.html