



// q1

let fullName = prompt("Please enter your full name:");
let names = fullName.split(" ");
let initials = (names[0].slice(0, 1) + "." + names[1].slice(0, 1)).toUpperCase();
console.log(`Your initials are: ${fullName} → ${initials}`);

// q2

let sentence = prompt("Please enter a sentence:");
let letter = prompt("Please enter a letter:");
let position = sentence.indexOf(letter);
console.log(sentence)
console.log(`The position of the letter "${letter}" in the sentence is: ${position}`);

// q3

let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let namesLength = firstName.length + lastName.length;
let username = `${firstName.toLowerCase()}${lastName.toLowerCase()}_${namesLength}`;

console.log(`Your username is: ${username}`);
console.log(`(${namesLength} = total number of characters in first name and last name)`);