/*=====================================================
=            Jest test for mixins/UtilsRPN`            =
=====================================================*/

var __path__ = "scripts/mixins/UtilsRPN.js";

jest.dontMock(__path__);

describe("Test for mixins/UtilsRPN.js", function() {


	var UtilsRPN;

	beforeEach(function() {
		UtilsRPN = require(__path__);
	});

	describe("_isNumber", function() {

		it('Pass in a number 3, it should return true', function() {
			var testInput = 3;
			var expectedOutput = true;	
			expect(Utils._isNmber(testInput)).toEqual(expectedOutput);
		});	

		it('Pass in a number '3', it should return false', function() {
			var testInput = '3';
			var expectedOutput = false;	
			expect(Utils._isNumber(testInput)).toEqual(expectedOutput);
		});	
	});

	describe("_isNumeric", function() {

		it('Pass in a number '3', it should return true', function() {
			var testInput = '3';
			var expectedOutput = true;	
			expect(Utils._isNumeric(testInput)).toEqual(expectedOutput);
		});	

		it('Pass in a number 3, it should return false', function() {
			var testInput = 3;
			var expectedOutput = false;	
			expect(Utils._isNumeric(testInput)).toEqual(expectedOutput);
		});	
	});




});

/*-----  End of Jest test for mixins/UtilsRPN`  ------*/

