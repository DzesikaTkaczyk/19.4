//exercise number 1
const hello = 'Hello';
const world = 'World';

{
	console.log(`exercise1: ${hello} ${world}`);
}

//exercise number 2
const a = 6;
const b = 5;

const multiply = (a = 1, b = 1) => console.log(`exercise2: ${a} * ${b} = ${a * b} `);
multiply(a);
multiply(a,b);

//exercise number 3
const average = (...args) => {
	const sum = args.reduce((a, b) => a + b); 
	return sum / args.length;
};

console.log(`exercise3: ${average(1)}`);
console.log(`exercise3: ${average(1, 3)}`);
console.log(`exercise3: ${average(1, 3, 6, 6)}`);

//exercise number 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`exercise4: ${average(...grades)}`);

//exercise number 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;

console.log(`First name: ${firstname} Last name: ${lastname}`);