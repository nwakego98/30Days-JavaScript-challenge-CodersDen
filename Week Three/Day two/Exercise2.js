// EXERCISE: LEVEL 2
// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.

// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  

// Using the above countries array, create an array for countries length'.
countryLength =[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

const newCountryLength = []
for(let i = 0; i < countryLength; i++){
  newArr.push(countriesLength[i].toUpperCase())
}

console.log(newCountryLength)  

// Use the countries array to create the following array of arrays:  
let country1 =  ['Albania', 'ALB', 7]
let country2 = ['Bolivia', 'BOL', 7]
let country3 =  ['Canada', 'CAN', 6]
let country4 = ['Denmark', 'DEN', 7]
let country5 = ['Ethiopia', 'ETH', 8]
let country6 =  ['Finland', 'FIN', 7]
let country7 = ['Germany', 'GER', 7]
let country8 =  ['Hungary', 'HUN', 7]
let country9 = ['Ireland', 'IRE', 7]
let country10 = ['Iceland', 'ICE', 7]
let country11 =  ['Japan', 'JAP', 5]
let country12 =  ['Kenya', 'KEN', 5]

let allCountry = [ country1 , country2, country3, country4, country5 ,country6 , country7 ,country8 ,country9 , country10 , country11 , country12]
console.log(allCountry)

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countryWithLand = ['Finland', 'Ireland', 'Iceland']

if(countryWithLand === 'Finland', 'Ireland', 'Iceland') {
  console.log(['Finland', 'Ireland',  'Iceland'])  
} else {
   console.log('All these countries are without land')
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countryWithIa = ['Albania', 'Bolivia','Ethiopia']

if(countryWithIa ==='Albania', 'Bolivia','Ethiopia' ) {
  console.log(['Albania', 'Bolivia','Ethiopia'])  
} else {
   console.log('All these countries are without land')
}

// Using the above countries array, find the country containing the biggest number of characters.


// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]



// Use the webTechs array to create the following array of arrays:
let tech1 = ["HTML", 4]
let tech2 = ["CSS", 3]
let tech3 = ["JavaScript", 10]
let tech4 = ["React", 5]
let tech5 = ["Redux", 5]
let tech6 = ["Node", 4]
let tech7 = ["MongoDB", 7]

let allTech =[tech1, tech2, tech3, tech4, tech5, tech6, tech7]
console.log(allTech)



// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (const tech of mernStack) {
  console.log(tech[0]) 
}

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let web_techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for (const tech of web_techs ) {
  console.log(tech)
}




// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
for (var i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}


// Print all the elements of array as shown below.

const fullStack = [   ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]
let allElement = fullStack

console.log(allElement.toString())
