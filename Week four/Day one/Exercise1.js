// Exercises: Level 1
// Declare a function fullName and it print out your full name.
function printName(){
    let surName = 'Tuke'
    let space = ' '
    let name = 'Glory'
    let fullName = surName + ' ' +  name
    console.log(fullName) 
}
printName()


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function printFullName(){
    let lastName = 'Tuke'
    let space = ' '
    let firstName = 'Glory'
    let allNames = firstName + ' ' + lastName
    return allNames 
}
console.log(printFullName())



// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(){
    let a = (6, 7)
    let b = (4, 3)
    let sum = (a + b)
    return sum
}

console.log(addNumbers())


// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle (){
    let length = 16
   let  width  = 16
   area = length * width
   return area
}
console.log(areaOfRectangle ())

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle (){
    let length = 14
   let width = 24
   perimeter = 2*(length + width)
   return perimeter
}
console.log(perimeterOfRectangle ())


// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(){
    let length = 24
    let width = 24
    let height = 4
    volume =length * width * height
    return volume
}
console.log(volumeOfRectPrism())

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(){
    let π = 3.142
    let r = 10
    area = π * r * r
    return area
}
console.log(areaOfCircle())

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumferenceOfCircle(){
    let π = 3.142
    let r = 10
    circumference = 2* π*r
    return circumference
}
console.log(circumferenceOfCircle())
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function substanceDensity(){
    let mass = 36
    let volume = 15
    let density = mass/volume
    return density
}
console.log(substanceDensity())


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedOfMovingObject(totalDistance,totalTimeTaken ){
    speed = totalDistance/totalTimeTaken
    return speed
}
console.log(speedOfMovingObject(40, 5))


// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubstance (mass, gravity){
    weight = mass * gravity
    return weight
}
console.log( weightOfSubstance(15, 15))



// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelciusToFahrenheit(oC){
    oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelciusToFahrenheit(12))


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more



function bodyMassIndex(weight, height1, height2){
    let bmi = 20
    bmi = weight / (height1 * height2)
    if (bmi < 20){
        return "This person has a normal weight of " + bmi
    }else if (bmi < 18.5 && bmi > 24.5){
        return "This person has a normal weight of " + bmi
    }else if (bmi < 25 && bmi > 29.9){
        return "This person has a under weight of " + bmi
        }else if ( bmi >= 30){
            return "This person is obese " + bmi
        }
}


    console.log(bodyMassIndex(10, 5, 5))


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(x){
let month = ["January, February, March, April, May, June, July, August, September, October, November,December "]

for ( let i = 0; i < month.length; i++ ){
    if (month[1] = x){
        if (i <= 2){
            return 'The season is Autumn'
        }if (i <= 2 && i >= 5){
            return 'The season is Winter'
        }if (i <= 5 && i >= 8){
            return 'The season is spring'
        }if (i <= 8 && i >= 11 ){
            return 'The season is summer'
        }
    }
}
}
console.log(checkSeason("may"))


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(num1, num2, num3){
    number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for ( let i = 0; i < number.length; i++ ){
        if ( i >= 0 && i <= number.length){
        return '10'
    }else if (i <= 10 && i < 0){
        return '0'
    }
}
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))