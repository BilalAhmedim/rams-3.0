# npm update
echo "npm update"
npm install npm@latest

# init npm
echo "npm Init"
npm init

# install postcss and Plugins 
echo "installing postcss and Plugins..."
npm i -D postcss-cli@latest postcss@latest gulp-postcss postcss-import postcss-mixins postcss-simple-vars postcss-hexrgba postcss-nested
# install gulp locally

# install normalize
echo "installing normalize.css..."
npm install normalize.css --save

# install auto prefixer
echo "installing autoprefixer"
npm i -D autoprefixer@latest
