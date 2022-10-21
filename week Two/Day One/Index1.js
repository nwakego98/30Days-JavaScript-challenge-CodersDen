// Exercises: Level 1
//QUESTION 1; Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Glory'
console.log(typeof firstName)

let lastName =' Tuke'
console.log(typeof lastName)

const country = 'Nigeria'
console.log(typeof country)

let city = 'Lagos'
console.log(typeof city)

age = 24
console.log(typeof age)

isMarried = false
console.log(typeof ismarried)

const year = 2022
console.log(typeof year)

// QUESTION 2 ;Check if type of '10' is equal to 10.
let num = '10'
let num1 = 10
console.log(typeof num)
 console.log(typeof num1)

//QUESTION 3;Check if parseInt('9.8') is equal to 10
let numb = '9.81'
let numFloat = parseFloat(numb)

console.log(numFloat)

//QUESTION 4; Boolean value is either true or false.
   //i. Write three JavaScript statement which provide truthy value.
    console.log('name'.length === 'game'.length )
    console.log(4**2 === 16)
    console.log('image'.length != 'picture'.length)
   // ii.Write three JavaScript statement which provide falsy value.
    console.log('figure' === 4)
    console.log('milk'.length != 'meek'.length) 
    console.log(4 + 3 > 4*3)
// QUESTION 5;Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
 console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//QUESTION 6; Find the length of python and jargon and make a falsy comparison statement.
const pythonlength = 'python'
const jargonlength = 'jargon'

console.log('pythonlength'.Length >= 'jargonlenth'.Length)

//QUESTION 7;  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log().
4 > 3 && 10 < 12
true && true
console.log(4 > 3 && 10 < 12)

 4 > 3 && 10 > 12
true && false
console.log(4 > 3 && 10 > 12)

 4 > 3 || 10 < 12
 true || true
 console.log(4 > 3 || 10 < 12)

 4 > 3 || 10 > 12
  true || false
 console.log( 4 > 3 || 10 > 12)

 !(4 > 3)
 4 > 3 //true
console.log(!(4 > 3))

!(4 < 3)
 4 < 3 //false
console.log(!(4 < 3))

 !(false)
false  //false
console.log(!(false))

 !(4 > 3 && 10 < 12)
  4 > 3 && 10 < 12
 true && true
 console.log(!(4 > 3 && 10 < 12))

 // !(4 > 3 && 10 > 12) 
 let check = (4 > 3 && 10 > 12)
 console.log(check)
let check1 = (!(4 > 3 && 10 > 12))
console.log(check1)

//!(4 === '4')
let figure = (4 === '4')
console.log(figure)
let figure1 = !(4 === '4')
console.log(figure1)

// There is no 'on' in both dragon and python
let dragon = 'on'
let python = 'on'

console.log(!(dragon === 'on'))
console.log(!(python === 'on'))

//  QUESTION 8 ;Use the Date object to do the following activities
   // i.What is the year today?
const today = new Date() 
console.log(today.getFullYear())

   //ii. What is the month today as a number?
const now = new Date()
console.log(now.getMonth())

   //iii. What is the date today?
   const date = new Date()
   console.log(date.getDate())

// iv.What is the day today as a number?
const day = new Date()
console.log(day.getDay())

// v. What is the hours now?
const hours = new Date()
console.log(hours.getHours())

// vi; What is the minutes now?
const minutes = new Date()
console.log(minutes.getMinutes())

// vii; Find out the numbers of seconds elapsed from January 1, 1970 to now.
const allSeconds = Date.now() 
console.log(allSeconds) 

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)
