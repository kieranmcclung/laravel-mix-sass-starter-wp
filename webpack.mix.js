let mix = require('laravel-mix');

mix.js('src/js/script.js', 'js');

mix.sass('src/scss/style.scss', './', {
	sassOptions: {
		outputStyle: 'expanded'
	}
}).options({
	processCssUrls: false,
	postCss: [
		require('postcss-custom-properties')
	]
});