// EXERCISE: LEVEL 2
// QUESTION 1 ; Using console.log() print out the following statement:The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote\'There is no exercise better for the heart \n than reaching down and lifting people up.\'\n by John Holmes teaches us to help one another.') 

// QUESTION 2 ; Using console.log() print out the following quote by Mother Teresa:"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\" Love is not patronizing and charity isn\'t about pity, it is about love. \n Charity and love are the same  -- with charity you give love,\n so don\'t just give money but reach out your hand instead.\" by Mother Teresa.')

//QUESTION 3; Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10')
console.log(typeof 10 )

let num = '10'
let numIt = parseInt(num)
console.log(numIt)

// QUESTION 4 ; Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let parseFloat = '9.8';
let numInt = 10
let parseFloat1 =numInt
console.log(parseFloat1)

// QUESTION 5 ;Check if 'on' is found in both python and jargon
let phyton = 'on';
let jargon = 'on'

console.log(`${phyton} is found in ${jargon}`)

//QUESTION 6; I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence ='I hope this course is not full of jargon';
let jargonWord = sentence

console.log(sentence == jargonWord)

//QUESTION 7 ; Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random()         
let numBtnZeroAndHundred = randomNum * 101

console.log(numBtnZeroAndHundred)  

let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred)
console.log(randomNumRoundToFloor)  

// QUESTION 7 ; Generate a random number between 50 and 100 inclusively.
let randomNum1 = Math.random()         
let numBtnFiftyAndHundred = randomNum * 101

console.log(numBtnFiftyAndHundred)  

let randomNumRoundToFloor1 = Math.floor(numBtnFiftyAndHundred)
console.log(randomNumRoundToFloor1)  

//QUESTION 8 ; Generate a random number between 0 and 255 inclusively.
let randomNum2 = Math.random()         
let numBtNZeroAndTwoHundredAndTwentyFive = randomNum * 256

console.log(numBtNZeroAndTwoHundredAndTwentyFive)  

let randomNumRoundToFloor2 = Math.floor(numBtNZeroAndTwoHundredAndTwentyFive)
console.log(randomNumRoundToFloor2)  

// QUESTION 9 ; Access the 'JavaScript' string characters using a random number.
let word = 'JavaScript'
console.log(word.length)



// QUESTION 10 ; Use console.log() and escape characters to print the following pattern.
 str = "1\t1\t1\t1";
console.log(str)

str = "2\t1\t2\t4\t8"
console.log(str)

str = "3\t1\t3\t9\t27"
console.log(str)

str ="4\t1\t4\t16\t64"
console.log(str)

str = "5\t1\t5\t25\t125"
console.log(str)

// QUESTION 11 ; Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(phrase.slice(30,-16))
