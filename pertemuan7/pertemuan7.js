let firstName = 'John';
let lastName = 'Doe';
let bornYear = 1998;

let currentYear = new Date().getFullYear();
let age = currentYear - bornYear;

console.log(`hello, ${firstName} ${lastName}! You are ${age} years old`);
