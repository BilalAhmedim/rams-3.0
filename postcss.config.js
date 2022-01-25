module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    // require("sourcemap"),
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-preset-env"),
    require("autoprefixer"),
    require("cssnano"),
  ],
});
