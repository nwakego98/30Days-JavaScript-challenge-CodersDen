// EXERCISE: LEVEL 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries


// Sort the webTechs array and mernStack array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  webTechs.sort()
  console.log(webTechs)
  

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  mernStack.sort()
  console.log(mernStack)

// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array


// Reverse the countries array and capitalize each country and stored it as an array
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

countries.reverse()
console.log(countries)


let reverseCapitalized = [newArr , countries]
console.log(reverseCapitalized)