/**
 * Starting point for all of our client side code.
 */

// My personal polyfill functions.
require('jsPolyfills');

// Our main stylesheet defining how to design our objects
require('./stylesheets/main.css');

// The react component.
const React = require('react');
const ReactDOM = require('react-dom');

const GameApp = require('./ui/GameApp.jsx');

ReactDOM.render(<GameApp/>, document.getElementById('app'));