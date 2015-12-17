# Webpack config

Frontend:

- JS files are handled with babel
- CSS files are handled with css-modules (react-css-modules) and postcss
- PostCSS plugins: autoprefixer, cssnext

Backend:

- Express for serving compiled files

Commands:

- ```npm run build-dev``` - development build with watch
- ```npm run build-debug``` - development build with debug options
- ```npm run webpack-server``` - starts webpack server
- ```npm run express-server``` - starts express server
