// EXERCISE: LEVEL 1
// QUESTION 1;Iterate 0 to 10 using for loop, do the same using while and do while loop
//FOR LOOP
for(let i = 0; i <= 10; i++){
    console.log(i)
}  

//WHILE LOOP
let i = 0;
while(i <= 10){
    console.log(i)
    i++
}

//do while loop
let j = 0
do{
    console.log(j)
    j++
}
while(j <= 10)


//QUESTION 2; Iterate 10 to 0 using for loop, do the same using while and do while loop
//FOR LOOP
for(let i = 10; i <= 0; i--){
    console.log(i)
}  

//WHILE LOOP
let k = 10;
while(k <= 0){
    console.log(k)
    k--
}

//do while loop
let N = 10
do{
    console.log(N)
    N--
}
while(N <= 0)

// QUESTION 3;Iterate 0 to n using for loop
let num = 10
for (let i=0; i<= num; i++){
  console.log(i)
}

// QUESTION 4; Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for(let pattern =1; pattern <=7; pattern++){
    console.log("# ".repeat(pattern));
 }


// QUESTION 5;Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }


// QUESTION 6;Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for(let p =1000; p <= 0; p++){
    console.log(`${p}  ${p^2}  ${p^3}`)
  }


// QUESTION 7;Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i++){
    if (i%2==0)  
    console.log(i + "")
}
 
// QUESTION 8;Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i <= 100; i++){
    if (i%2 != 0)  
    console.log(i + "")
}
// QUESTION 9;Use for loop to iterate from 0 to 100 and print only prime numbers
let isPrime = 11
for(let i = 0; i <= 100; i++){
    if (i % 1  === 1 ){
isPrime = true
    }  
}  if (isPrime) {
    console.log(`${i} is a prime number`);
} else {
    console.log(`${i} is a not prime number`);
}





//QUESTION 10; Use for loop to iterate from 0 to 100 and print the sum of all numbers.




// QUESTION 11;The sum of all numbers from 0 to 100 is 5050
let sum = 0;
let number = 5050

for (let q = 1; q <= number; q++) {
    sum += q;
}
console.log( number);



//QUESTION 12; Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even_sum=0;
let odd_sum=0;

for(let i=0;i<=100;i++) { 
    if (i%2==0)
        even_sum+=i;
    else
        odd_sum+=i;
}
console.log([even_sum,odd_sum])


// QUESTION 13;The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let n =2550;

for(let i=0;i<=100;i++) { 
  n = n;
}

console.log((n));


let l =2500;

for(let i=0;i<=100;1++) { 
  l = l;
}
console.log((l));
//QUESTION 14; Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let h=0;

for(let i=0;i<=100;i++) { 
  h = h ;
}

console.log(Array.from(String(h)));
//   [2550, 2500]
// QUESTION 15;Develop a small script which generate array of 5 random numbers

//QUESTION 16; Develop a small script which generate array of 5 random numbers and the numbers must be unique

//QUESTION 17; Develop a small script which generate a six characters random id:

// 5j2khz
