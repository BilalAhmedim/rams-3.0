# install postcss and Plugins 
echo "installing postcss and Plugins..."
npm i -D postcss postcss-cli postcss-discard-comments postcss-import postcss-mixins postcss-simple-vars postcss-nested postcss-preset-env cssnano

# installing normalize
echo "installing normalize.css..."
npm install normalize.css --save

# installing auto prefixer
echo "installing autoprefixer"
npm i -D autoprefixer

# installing browser-sync
echo "installing browser-sync"
npm i -g browser-sync
