/* eslint-disable */
let plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/proposal-class-properties"
];
if(process.env.NODE_ENV === 'development') plugins.push("react-refresh/babel");

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.9.0",
        "modules": false
      }
    ],
    "@babel/react"
  ],
  plugins
};