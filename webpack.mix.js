const mix = require('laravel-mix');

mix.js('src/app.js', 'public/js')
    .postCss('src/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
  ])
  mix.browserSync({
  	proxy: 'plate.test',
    files: ["public/css/app.css", "public/js/app.js", "public/*.php", "public/*.html","src/**/*.php", "src/**/*.html"]
  });