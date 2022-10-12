// EXERCISE: LEVEL 1
//QUESTION 1; Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

//  QUESTION 2; Print the string on the browser console using console.log().
console.log(challenge)

//QUESTION 3; Print the length of the string on the browser console using console.log().
console.log(challenge.length)

//QUESTION 4; Change all the string characters to capital letters using toUpperCase() method.
console.log(challenge.toUpperCase())

// QUESTION 5 ; Change all the string characters to lowercase letters using toLowerCase() method.
console.log(challenge.toLocaleLowerCase())

// QUESTION 6 ; Cut (slice) out the first word of the string using substr() or substring() method.
console.log(challenge.slice(0,2))

//QUESTION 7 ; Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(2,20))

//QUESTION 8; Check if the string contains a word Script using includes() method.
console.log(challenge.includes('Script'))

//QUESTION 9; Split the string into an array using split() method.
console.log(challenge.split())

//QUESTION 10; Split the string 30 Days Of JavaScript at the space using split() method.
console.log(challenge.split(' '))

// QUESTION 11; 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(','))

// QUESTION 12;Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

// QUESTION 13 ;What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

// QUESTION 14 ;What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log(challenge.charCodeAt(9))

// QUESTION 15; Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
console.log(challenge.indexOf(3))

// QUESTION 16 ; Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('t'))

// QUESTION 17 ; Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let conjunction = 'You cannot end a sentence with because because because is a conjunction';
console.log(conjunction.indexOf('because'))

// QUESTION 18 ; Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(conjunction.lastIndexOf('because'))

// QUESTION 19 ; Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(conjunction.search(/because/gi))

// QUESTION 20 ; Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim(' '))

// QUESTION 21 ; Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.startsWith('30'))

// QUESTION 22 ; Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.endsWith('JavaScript'))

// QUESTION 23 ; Use match() method to find all the a’s in 30 Days Of JavaScript.
console.log(challenge.match('a'))

// QUESTION 24 ; Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let days = '30 Days of';
let space = ' ';
let course = 'JavaScript';
let fullChallenge = days + space + course;
console.log(fullChallenge)

// QUESTION 25 ; Use repeat() method to print 30 Days Of JavaScript 2 times.
console.log(fullChallenge.repeat(2))

