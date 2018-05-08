module.exports = {
    plugins: [
        require('precss'), 
        require('autoprefixer')({
	        browsers: ['last 2 versions']
        }),
        require('postcss-font-magician')({
            hosted: ['./src/fonts']
        })
    ]
}