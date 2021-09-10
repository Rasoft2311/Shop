const { merge } = require('webpack-merge');
const commonConfig = require('./webpack-config/common.js');
const developmentConfig = require('./webpack-config/dev.js');
const productionConfig = require('./webpack-config/prod.js');
const analyzeConfig = require('./webpack-config/analyze.js');

module.exports = env => {
  switch(env.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    case 'analyze':
      return merge(commonConfig, productionConfig, analyzeConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};