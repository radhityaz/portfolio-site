// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({ config: './tailwind.config.cjs' }), // Explicit config path in array format
    require('autoprefixer'),
  ],
}
