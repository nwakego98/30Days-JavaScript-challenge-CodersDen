// EXERCISE: LEVEL 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
//QUESTION 1; Declare an empty array;
const empty = []
console.log(empty)



// QUESTION 2 ;Declare an array with more than 5 number of elements
const numberOfElements =[12, 13, 14, 15, 16, 17, 18]

// QUESTION 2; Find the length of your array
let total = numberOfElements.length
console.log(total)

// QUESTION 3; Get the first item, the middle item and the last item of the array
const firstItem = numberOfElements[0]
console.log(firstItem)

const middleItem = numberOfElements[3]
console.log(middleItem)

const lastItem = numberOfElements[total - 1]
console.log(lastItem)

// QUESTION 4 ;Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
let mixDataTypes = [99, 101.5, "Glory joe", true, { age: 44 }, 'spain', 'travel', {name : 'Ego'}]

let length = mixDataTypes.length
console.log(length)

let size = length > 5 
console.log(size)

//QUESTION 5; Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
let itCompanies = [
    "Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle", 
    "Amazon"
]

//QUESTION 6; Print the array using console.log().
console.log(itCompanies)

// QUESTION 7;Print the number of companies in the array.
let totalNumberOfCompanies = itCompanies.length
console.log(totalNumberOfCompanies)

//QUESTION 8; Print the first company, middle and last company
let firstCompany = itCompanies[0]
console.log(firstCompany)

let middleCompany = itCompanies[3]
console.log(middleCompany)

let lastCompany = itCompanies[totalNumberOfCompanies - 1]
console.log(lastCompany)

//QUESTION 9; Print out each company
let companyOne = itCompanies[0]
console.log(companyOne)

let companyTwo = itCompanies[1]
console.log(companyTwo)

let companyThree = itCompanies[2]
console.log(companyThree)

let companyFour = itCompanies[3]
console.log(companyFour)

let companyFive = itCompanies[4]
console.log(companyFive)

let companySix = itCompanies[5]
console.log(companySix)

let companySeven = itCompanies[6]
console.log(companySeven)

// QUESTION 10;Change each company name to uppercase one by one and print them out

itCompanies =[
    "Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle", 
    "Amazon"
]

const upper = [];

itCompanies.forEach(element => {
  upper.push(element.toUpperCase());
});

console.log(upper);

//  QUESTION 11;Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let newItCompanies = [
    "Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle", 
    "Amazon"
]
newItCompanies.push('are big IT companies')
console.log(newItCompanies)
console.log(newItCompanies.join())

//QUESTION 11; Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexOfOracle = itCompanies.indexOf('Oracle')  
if(indexOfOracle === 5){
   console.log('This company is found in the array')  
} else {
    console.log('This company is not found in the array')
}
//QUESTION 14; Filter out companies which have more than one 'o' without the filter method
// QUESTION 13;Sort the array using sort() method
console.log(itCompanies.sort())
//QUESTION 15; Reverse the array using reverse() method
console.log(itCompanies.reverse())
// QUESTION 16;Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))
//QUESTION 17; Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,-3 ))
//QUESTION 18; Slice out the middle IT company or companies from the array

console.log(itCompanies.slice( ) )
// QUESTION 19;Remove the first IT company from the array
  itCompanies.shift()
console.log(itCompanies)
//QUESTION 20; Remove the middle IT company or companies from the array
itCompanies.splice( 'Micrsoft', 'IBM', 'facebook', 'Apple', 'Amazon' )
console.log('Micrsoft', 'IBM',  'facebook', 'Apple', 'Amazon' )
// QUESTION 21;Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)
// QUESTION 22; Remove all IT companies
console.log(itCompanies.slice(7))