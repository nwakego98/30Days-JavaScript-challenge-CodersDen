// Exercise: Level 3
// The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(ages.sort())
minAge = 19
maxAge = 26
// Find the median age(one middle item or two middle items divided by two)
let medianAge = (24 + 24 / 2)
console.log(medianAge)
// Find the average age(all items divided by number of items)
averageAge = (19 + 22 + 19 + 24 + 20 + 25 + 26 + 24 + 25 + 24 / 2)
console.log(averageAge)
// Find the range of the ages(max minus min)
let range = (26 - 19)
console.log(range)
// Compare the value of (min - average) and (max - average),use abs() method
 let minValue = (19 - 7)
 console.log(Math.abs((minValue)))
 Math.abs(12)
let maxValue =(26 - 7)
console.log(Math.abs((maxValue)))

 //Slice the first ten countries from the countries array
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

     console.log(countries.slice(10))
// Find the middle country(ies) in the countries array
console.log(countries[5])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

