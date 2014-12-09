/**
 * @jsx React.DOM
 * App Component
 */

"use strict";

var React = require('react/addons');

/*==========  Mixins  ==========*/
var MixinUtil = require('scripts/mixins/UtilsRPN');


/*==========  LESS  ==========*/
require("styles/app.less");

/*==========  Constants  ==========*/
var KEY_CODE_ENTER = 13;
var KEY_CODE_SPACE = 32;


var App = React.createClass({
	
	displayName: "App",

	/*==========  Mixins  ==========*/
	mixins: [React.addons.LinkedStateMixin, MixinUtil],


	getDefaultProps: function() {
		return {
			placeholder: "Feed me with some magic numbers."
		};
	},

	getInitialState: function() {
		return {
			inputValue: ""
			, result : "* Valid inputs include numbers and operators like '+', '-', '*' and '/'. Also each input should be separated by white space. :)"
		};
	},

	render: function() {
		return (
			<div className="app">
				<div className="input clearfix">
					<input 
						className='input-field' 
						ref="input"
						type="text"
						onKeyUp={this._onKeyUp}
						valueLink = {this.linkState("inputValue")}
						placeholder={this.props.placeholder} />
					<div className='input-button' onClick={this._onClick}>ENTER</div>
				</div>
				<div className="result">{this.state.result}</div>
			</div>
		);
	},

	/*==========  Private Methods  ==========*/


	/*==========  Event Handler  ==========*/

	_onClick: function() {
		var rpn = {};
		var resultMsg = "";

		if (this.refs.input) {
			rpn = this.calculateRPN(this.refs.input.getDOMNode().value);
		}

		if (rpn) {
			resultMsg = "Result:  " + this.rpnResult;
		} else {
			resultMsg = "Please type in an invalid expression. Valid inputs include numbers and operators like '+', '-', '*' and '/'."
		}

		this.setState({
			result: resultMsg
		});
	},
	
	_onKeyUp: function (e) {
		e.preventDefault();
		if (e.keyCode === KEY_CODE_ENTER) {
			this._onClick();
		}
	}
	

});

module.exports = App;