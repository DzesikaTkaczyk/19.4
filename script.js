//Zadanie pierwsze
const hello = 'Hello'
const world = 'World'

{
	console.log(`Zadanie pierwsze: ${hello} ${world}`)
}

//Zadanie drugie
const a = 6;
const b = 5;

const multiply = (a = 1, b = 1) => console.log(`zadanie drugie: ${a} * ${b} = ${a * b} `);
multiply(a)
multiply(a,b)

//zadanie trzecie
let average = (...args) => {
	let sum = 0;
	let tableAverage
	args.forEach(arg => tableAverage = ((sum=(arg + sum)) / args.length))
	console.log(`Zadanie trzecie średnia z ${args}: ${tableAverage}`)
}

average(1)
average(1, 3)
average(1, 3, 6, 6)

//zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

average(...grades)

//zadanie piąte

const dane = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstname, , lastname] = dane

console.log(`First name: ${firstname} Last name: ${lastname}`)