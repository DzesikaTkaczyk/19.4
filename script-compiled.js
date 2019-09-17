'use strict';

//exercise number 1
var hello = 'Hello';
var world = 'World';

{
	console.log('exercise1: ' + hello + ' ' + world);
}

//exercise number 2
var a = 6;
var b = 5;

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log('exercise2: ' + a + ' * ' + b + ' = ' + a * b + ' ');
};
multiply(a);
multiply(a, b);

//exercise number 3
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = args.reduce(function (a, b) {
		return a + b;
	});
	return sum / args.length;
};

console.log('exercise3: ' + average(1));
console.log('exercise3: ' + average(1, 3));
console.log('exercise3: ' + average(1, 3, 6, 6));

//exercise number 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('exercise4: ' + average.apply(undefined, grades));

//exercise number 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];


console.log('First name: ' + firstname + ' Last name: ' + lastname);
