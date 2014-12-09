/**
 * @jsx React.DOM
 * Main Component
 */
"use strict";

var React = require('react');

/*==========  Components  ==========*/
var App = require('scripts/components/App.jsx');

// Attached React to the window 
window.React = React;

React.render(
	<App />
  , document.getElementById('app')
);