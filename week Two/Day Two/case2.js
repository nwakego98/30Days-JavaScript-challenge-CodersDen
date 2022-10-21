// EXERCISE: LEVEL  2
// QUESION 1 ;Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let A = 80 - 100
// let B = 70 - 89
// let C = 60 - 69
// let D = 50 - 59
// let F= 0 - 49
// const number = prompt('Enter a mark')
// if(number >= 80){
// 	console.log (" You got A grade")
// 		}
// 	else if ( number >= 60){ 
// 		console.log(" You got B grade");
// 		}
// 	else if ( num >= 40){
// 		console.log(" You got C grade");
// 		}
// 	else if ( num < 40){
// 		console.log(" You Failed this exam");
// 		}

//QUESTION 2; Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let season = prompt("Enter the season")
//  let autumn = "september, october, November"
//  let winter = "December, January, February"
//  let spring = "March, April, May"
//  let summer = "June, July, August"

//  if (autumn = "september, october, November"){
//     console.log(autumn )
//  } else if (winter ="December, January, February" ){
//     console.log( winter )
//  } else if (spring = "March, April, May"){
//     console.log(spring )
//  } else if (summer = "June, July, August"){
//     console.log(summer )
//  }

// QUESTION 3; Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
nameOfDayInAWeek = "unknown"; 
 dayOfName = "Unknown";

System = prompt("Input a day : ");
 intday = input.nextInt();

switch (day) {
    case 1:
        dayOfName = "sunday";
        nameOfDayInAWeek = "weekend"; 
        break;
    case 2:
        dayOfName = "Nonday";
        nameOfDayInAWeek = "Working Day"; 
        break;
    case 3:
        dayOfName = "Tuesday";
        nameOfDayInAWeek = "working Day"; 
        break;
    case 4:
        dayOfName = "Wednesday";
        nameOfDayInAWeek = "working Day"; 
        break;
    case 5:
        dayOfName = "Thursday";
        nameOfDayInAWeek = "working Day"; 
        break;
    case 6:
        dayOfName = "Friday";
        nameOfDayInAWeek = "working Day"; 
        break;
    case 7:
        dayOfName = "Saturday";
        nameOfDayInAWeek = "working Day"; 
        break;
    
}
intSystem = prompt(dayOfName + is  + day + a + nameOfDayInAWeek  );




// EXERCISE: LEVEL 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 day
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.

intnumber_Of_DaysInMonth = 0; 
StringMonthOfName = "Unknown";

System.out.print("Input a month number: ");
intmonth = input.nextInt();


switch (month) {
    case 1:
        MonthOfName = "January";
        number_Of_DaysInMonth = 31;
        break;
    case 2:
        MonthOfName = "february";
        number_Of_DaysInMonth = 28;
        break;
    case 3:
        MonthOfName = "March";
        number_Of_DaysInMonth = 31;
        break;
    case 4:
        MonthOfName = "April";
        number_Of_DaysInMonth = 30;
        break;
    case 5:
        MonthOfName = "May";
        number_Of_DaysInMonth = 31;
        break;
    case 6:
        MonthOfName = "June";
        number_Of_DaysInMonth = 30;
        break;
    case 7:
        MonthOfName = "July";
        number_Of_DaysInMonth = 31;
        break;
    case 8:
        MonthOfName = "August";
        number_Of_DaysInMonth = 31;
        break;
    case 9:
        MonthOfName = "September";
        number_Of_DaysInMonth = 30;
        break;
    case 10:
        MonthOfName = "October";
        number_Of_DaysInMonth = 31;
        break;
    case 11:
        MonthOfName = "November";
        number_Of_DaysInMonth = 30;
        break;
    case 12:
        MonthOfName = "December";
        number_Of_DaysInMonth = 31;
}
System.out.print(MonthOfName + " " + year + " has " + number_Of_DaysInMonth + " days\n");


// Write a program which tells the number of days in a month, now consider leap year

intnumber_Of_DaysInMonth = 0; 
StringMonthOfName = "Unknown";

System.out.print("Input a month number: ");
intmonth = input.nextInt();

System.out.print("Input a year: ");
intyear = input.nextInt();

switch (month) {
    case 1:
        MonthOfName = "January";
        number_Of_DaysInMonth = 31;
        break;
    case 2:
        MonthOfName = "February";
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            number_Of_DaysInMonth = 29;
        } else {
            number_Of_DaysInMonth = 28;
        }
        break;
    case 3:
        MonthOfName = "March";
        number_Of_DaysInMonth = 31;
        break;
    case 4:
        MonthOfName = "April";
        number_Of_DaysInMonth = 30;
        break;
    case 5:
        MonthOfName = "May";
        number_Of_DaysInMonth = 31;
        break;
    case 6:
        MonthOfName = "June";
        number_Of_DaysInMonth = 30;
        break;
    case 7:
        MonthOfName = "July";
        number_Of_DaysInMonth = 31;
        break;
    case 8:
        MonthOfName = "August";
        number_Of_DaysInMonth = 31;
        break;
    case 9:
        MonthOfName = "September";
        number_Of_DaysInMonth = 30;
        break;
    case 10:
        MonthOfName = "October";
        number_Of_DaysInMonth = 31;
        break;
    case 11:
        MonthOfName = "November";
        number_Of_DaysInMonth = 30;
        break;
    case 12:
        MonthOfName = "December";
        number_Of_DaysInMonth = 31;
}
System.out.print(MonthOfName + " " + year + " has " + number_Of_DaysInMonth + " days\n");

// i checked online to solve this last two questions but i really understand a bit from the source .