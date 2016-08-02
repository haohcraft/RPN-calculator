/*========================================
=            Mixins for Utils            =
========================================*/
"use strict";

/*==========  Static  ==========*/
var INFINITE = 1000000000000;
var OPERATORS = {
	"+": "addition"
	, "-": "subtraction"
	, "*": "multiplication"
	, "/": "division"
	, "(" : "doNothing"
	, ")" : "doNothing"
};


var UtilsRPN = {

	/**
	 * The calculated result
	 * @type {number}
	 */
	rpnResult: 0,

	rpnLeftover: {},
	
	rpnInstack: {},

	/**
	 * Calculate the input in a RPN fashion
	 * @param  {string} input [a string of expression]
	 * @return {boolean}       [whether the process is confucted correctly or not]
	 */
	calculateRPN : function (input) {

		var isSucceed = true;
		var args = input.trim().split(/\s+/); // Extract numbers and operators
		var arg
			, stack = [];

		while(args.length > 0) {
			
			arg = args.shift();

			if (this._isNumeric(arg)) {
			
				stack.push(arg);
			
			} else if (OPERATORS[arg]){
			
				var num1 = parseFloat(stack.pop(), 10)
					, num2 = parseFloat(stack.pop(), 10);

				var calculatedResult = this[OPERATORS[arg]].call(this, num2, num1) || 0;

				stack.push(calculatedResult);
			} else {
				this.rpnLeftover = args;
				isSucceed = false;
				break;
			}
		}
		
		if (stack.length !== 1) {
			this.rpnInstack = stack;
			isSucceed = false;
		}

		this.rpnResult = stack.pop();
		return isSucceed;
	},

	/**
	 * Add up two numbers
	 * @param  {number} num1 [a number]
	 * @param  {number} num2 [a number]
	 * @return {number}      [an added result]
	 */
	addition: function (num1, num2) {

		var result = 0;

		if (this._isNumber(num1) && this._isNumber(num2)) {
			result = num1 + num2;
		}

		return result;
	},

	/**
	 * Subscract two numbers
	 * @param  {number} num1 
	 * @param  {number} num2 
	 * @return {number}      
	 */
	subtraction: function(num1, num2) {

		var result = 0;
		if (this._isNumber(num1) && this._isNumber(num2)) {
			result = num1 - num2;
		}
		return result;
	},

	/**
	 * Multiple the two number
	 * @param  {number} num1 [a number]
	 * @param  {number} num2 [a number]
	 * @return {number}      
	 */
	multiplication: function(num1, num2) {
		var result = 0;

		if (this._isNumber(num1) && this._isNumber(num2)) {
			result = num1 * num2;
		}

		return result;
	},

	/**
	 * Implement a/b
	 * @param  {[type]} num1 [description]
	 * @param  {[type]} num2 [description]
	 * @return {[type]}      [description]
	 */
	division: function(num1, num2) {

		var result = 0;

		if (this._isNumber(num1) && this._isNumber(num2)) {

			result = num2 === 0 ? INFINITE : (num1 / num2);
		}

		return result;

	},	

	/**
	 * A silly function, just do nothing
	 * @return {[type]} [description]
	 */
	doNothing: function() {
		return;
	},

	/*==========  Private Method  ==========*/

	/**
	 * Check if the input is an array
	 * @param  {array}  array 
	 * @return {Boolean}       
	 */
	_isArray: function (array) {
		return toString.call(array) === '[object Array]';
	},

	/**
	 * Check if the input is a numeric string/character
	 * @param  {string}  input 
	 * @return {Boolean}       
	 *         only if it is a numeric string/character, true
	 */
	_isNumeric: function(input) {

		return input == +input;

	},

	/**
	 * Check if the input is a number
	 * @param  {Object}  input 
	 * @return {Boolean}       Only if it is a number, true
	 */
	_isNumber: function(input) {
		return input === +input;
	}


};

//Expose this to window
window.rpn = UtilsRPN || {};


module.exports = UtilsRPN;
/*-----  End of Mixins for Utils  ------*/

