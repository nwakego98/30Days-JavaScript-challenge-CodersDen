//EXERCISE: LEVEL 2
// QUESTION 1;Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// const baseValue = prompt('Enter the base of a triangle:');
// const heightValue = prompt('Enter the height of a triangle:');
// // calculate the area
// const areaValue = (0.5 * baseValue * heightValue);

// console.log( `The area of the triangle is ${areaValue}`);

// QUESTION 2 ; Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// let sideA = parseInt(prompt('Enter side A:'));
// let sideB = parseInt(prompt('Enter side B:'));
// let sideC = parseInt(prompt('Enter side C:'));

// const perimeter = (sideA + sideB + sideC)

// console.log( `The perimeter of the triangle is ${perimeter}`);

// QUESTION 3;Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// width: 5
// length:10
//The area of the rectangle is 50
// let length = prompt('Enter length');
// let width = prompt('Enter width');
// const areaRectangle = (length * width)
// console.log(`The area of the rectangle is ${areaRectangle}`);

// The perimeter of the rectangle is 30
// let length = parseInt(prompt('Enter length:'));
//  let width = parseInt(prompt('Enter width:'));
// const pRectangle = (2 * (length + width))
//console.log(`The perimeter of the rectangle is ${pRectangle}`)

//QUESTION 4; Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where 
//pi:3.14
//r:10
//The area of a circle is 314
//let pi = prompt('Enter pi');
 //let r = prompt('Enter r')

// const areaCircle = (pi * r * r);
// console.log(`The area of a circle is ${areaCircle}`)

//The circumference of a circle is 63
//const circumference =Math.round(2 * pi * r)
//console.log(`The circumference of a circle is ${circumference}`)

// QUESTION 5;Calculate the slope, x-intercept and y-intercept of y = 2x -2
//x: x = 2 + y / 2
//y: y = 2x - 2
//m :0
// let x = prompt('Enter x-intercept')
// let y = prompt('Enter y-intercept')
// const slope = (x / y) 
// console.log(`The slope is ${slope}`)
// i tried using the math slope formula y = mx - b ,but i don't know how to go about it.

//QUESTION 6; Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//x: (2, 6)
//y: (2,10)
//   let x1 = prompt('Enter x1')
//   let x2 = prompt('Enter x2')
//  let y1 = prompt('Enter y1')
//   let y2 = prompt('Enter y2')
//    const m = (y2-y1)/(x2-x1) 
//    console.log(`The slope is ${m}`)

//QUESTION 7; Compare the slope of above two questions.
// let slope2 = 2
// let slope1 = NaN

// let comparedSlope = slope1 === slope2
// console.log(comparedSlope)
// sincerely i know that slope1 answer is wrong but i need to compare the two solutions though my intinct tells me it would be false i hope i'm right.

// QUESTION 8;Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//X = 3
//let x = prompt('Enter x')
// using expansion
//let y = ((x-3) * (x-3))
//console.log(`The value y is ${y} when x = 3 `)

//QESTION 9; Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
//  let hours = prompt('Enter hours')
 let rate = prompt('Enter rate')
let earned = hours * rate
 console.log(`Your weekly earning is ${earned}`)

// QUESTION 10; If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = 'nwakaego'
console.log(`if the length of ${yourName} is greater than 7 say, ${yourName} is long else say ${yourName} is short`)

//QUESTION 11; Compare your first name length and your family name length and you should get this output.
 let firstName = 'Glory'
let familyName = 'Tuke'
console.log(firstName.length)
console.log(familyName.length)
console.log(`Your first name , ${firstName} is longer than my family name , ${familyName}`)

// QUESTION 12; Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
 let myAge = 250
 let yourAge = 25
 let yearOlder = myAge - yourAge
console.log(`I am ${yearOlder} years older than you .`)

//QUESTION 13; Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
//Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
  let birthYear = prompt('Enter birth year')
let now = new Date()
let age = now.getYear() - birthYear + 1900
 if (age > 18) {
    console.log(`You are ${age}.You are old enough to drive`)
    }else if(age < 18) {
    console.log(`You are ${age}.You will be allowed to drive after 3 years.`)
  }

//QUESTION 14; Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let yearsLive = prompt('Enter number of years')
let secondslive = 
//i can't even figure how to go about it
// QUESTION 15; Create a human readable time format using the Date time object
//Date time object
  now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${year}/${month}/${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)