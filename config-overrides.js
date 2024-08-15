// const webpack = require('webpack');

// module.exports = function override(config, env) {
//   // Add the necessary polyfills for Node.js core modules
//   config.resolve.fallback = {
//     crypto: require.resolve('crypto-browserify'),
//     stream: require.resolve('stream-browserify'),
//     https: require.resolve('https-browserify')
//   };

//   // Ignore the 'bufferutil' and 'utf-8-validate' modules
//   config.plugins.push(
//     new webpack.IgnorePlugin({
//       resourceRegExp: /^\.\/wordlists\/(?!english)/,
//       contextRegExp: /bcrypt$/
//     })
//   );

//   // Exclude problematic modules from source map processing
//   config.module.rules.push({
//     test: /\.(js|mjs|jsx|ts|tsx)$/,
//     use: ['source-map-loader'],
//     include: [
//       /node_modules\/@vonage\/(?!verify2|vetch|voice)/, // Exclude specific modules
//       /node_modules/,
//     ],
//     enforce: 'pre',
//   });

//   return config;
// };