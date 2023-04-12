/*global QUnit*/

sap.ui.define([
	"bulletinboard/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Number unit");

	function numberUnitValueTestCase(assert, sValue, fExpectedNumber) {
		// Act
		var fNumber = formatter.numberUnit(sValue);

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "The rounding was correct");
	}

	QUnit.test("Should round down a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
	});

	QUnit.test("Should round up a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
	});

	QUnit.test("Should round a negative number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
	});

	QUnit.test("Should round an empty string", function (assert) {
		numberUnitValueTestCase.call(this, assert, "", "");
	});

	QUnit.test("Should round a zero", function (assert) {
		numberUnitValueTestCase.call(this, assert, "0", "0.00");
	});

	QUnit.module("Price State");

	// We could write a test checking the result of the formatter for each of numberUnitValue test cases but we do not want to repeat ourselves
	// (DRY) – neither in the tests nor in the application coding – so we create a reuse function called priceStateTestCase.
	// In this function, we call the formatter with the arguments provided as oOptions and make a strictEqual assertion for the expected parameter.

	function priceStateTestCase(oOptions) {
		// Act
		var sState = formatter.priceState(oOptions.price);

		//Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "The price state was correct")
	}

	// The assert object – a special object injected by QUnit – is passed on as a reference to the function.
	// QUnit is loaded once for the whole unit testing part of the app.
	QUnit.test("Should format the products with a price lower than 50 to Success", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 42,
			expected: "Success"
		});
	});

	QUnit.test("Should format the products with a price of 50 to Normal", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 50,
			expected: "None"
		});
	});

	QUnit.test("Should format the products with a price between 50 and 250 to Normal", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 112,
			expected: "None"
		});
	});

	QUnit.test("Should format the products with a price between 250 and 2000 to Warning", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 798,
			expected: "Warning"
		});
	});

	QUnit.test("Should format the products with a price higher than 2000 to Error", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 2001,
			expected: "Error"
		});
	});
});
