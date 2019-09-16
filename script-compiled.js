'use strict';

//Zadanie pierwsze
var hello = 'Hello';
var world = 'World';

{
	console.log('Zadanie pierwsze: ' + hello + ' ' + world);
}

//Zadanie drugie
var a = 6;
var b = 5;

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log('zadanie drugie: ' + a + ' * ' + b + ' = ' + a * b + ' ');
};
multiply(a);
multiply(a, b);

//zadanie trzecie
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	var tableAverage = void 0;
	args.forEach(function (arg) {
		return tableAverage = (sum = arg + sum) / args.length;
	});
	console.log('Zadanie trzecie \u015Brednia z ' + args + ': ' + tableAverage);
};

average(1);
average(1, 3);
average(1, 3, 6, 6);

//zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

//zadanie piąte

var dane = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = dane[2],
    lastname = dane[4];


console.log('First name: ' + firstname + ' Last name: ' + lastname);
