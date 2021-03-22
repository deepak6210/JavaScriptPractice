/* 1. Write a JavaScript Program to check two
  number and return true if one of the number is 
 100 and sum of the two number is 100 */

let isCheck = (num1, num2) => {
    sum = num1 + num2;
    if (num1 === 100 || num2 === 100 || sum === 100) {
        return true;
    }
}

console.log(isCheck(50, 50));


//2 write a javaScript program to get the extention of the  file name 
let getFileName = (str) => {
    return str.slice(str.lastIndexOf('.'));
}
console.log(getFileName('index.html'));

//3.Write a JavaScript Program to Return the date in format dd/mm/yy

const getDate = (date = new Date()) => {
    let day = date.getDay() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`
}

console.log(getDate());

// String Handling and Manupilation 

/*4. Write the JavaScript program to create a new string
 from a given string the first 3 
charcter and last three charcter of the string and
 adding them together. The string length is 3 or 
more if not orignal string is returned */

let newString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);


console.log(newString('Deepak'));
console.log(newString('hdfgwdifbwvbwev'));

/*5.Write a JavaScript program to extract the 
first half of a string of even length.*/

let halfString = (str) => str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;
console.log(halfString('Deepak'));

/*6.write a JavaScript Program to concatenate 
two strings except their first character */

const twoStr = (str1, str2) => {
    let first = str1.slice(1, str1.length);
    let secound = str2.slice(1, str2.length);
    return first.concat(secound);
}

console.log(twoStr('Deepak', 'amit'));

/*7. Given two values, write a JavaScript Program to find out which one is nearest 
to 100 */

const nearHundread = (num1, num2) => (100 - num1) < (100 - num2) ? num1 : num2;

console.log(nearHundread(1, 110));

const ocurrence = (str) => {
    let givenStr = 'Deepak';
    let num = 0;
    for (let i = 0; i < givenStr.length; i++) {
        if (givenStr[i] === str) {
            num++;
        }
    }
    if (num === 2) {
        return `The number of Ocurrence is ${num}`;
    } else if (num === 4) {
        return `The number of Ocurrence is ${num}`;
    } else {
        return `The total number of occurence is ${num}`;
    }
}

console.log(ocurrence('p'));

/*8. write a program to find the number of even digits in a an array of integer */
const numEven = (array) => {
    let noOfAppearence = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 === 0) {
            noOfAppearence++;
        }
    }
    return noOfAppearence;
}
console.log(numEven([1, 2, 3, 4, 5, 6]));

/*9. Write a JavaScript program to find the number
 of even values up to a given number */

const evenVal = (num1) => {
    const arr = [];
    let noOfAppearence = 0;
    for (let i = 0; i < num1; i++) {
        arr.push(i);
    }
    for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        if (element % 2 === 0) {
            noOfAppearence++;
        }

    }
    return noOfAppearence;
}

console.log(evenVal(6));

/*10. Write a JavaScript program to check whether a given array of integer is sorted in 
ascending order */

const checkAcc = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i+1] < array[i]) return ;
    }
    return true;
}

console.log(checkAcc([1,2,3,4,5]));

/*11. write JavaScript program to get the largest even number
from an array of integers. */

let largestEven = (arr) => {
    evenArr = [];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 === 0) {
           evenArr.push(arr[i])
       }      
    }
   return Math.max(...evenArr);
}

console.log(largestEven([1,14,3,12]));

/*
12. Write a JavaScript program to replace the first digit in a string (should 
    contain at least digit) with $ character */

    let firstDigit = (str) => {
       let newstr =  str.slice(1);
        return `$${newstr}`;
    } 

    console.log(firstDigit('Deepak'));

//13. Give a year report if it is a leap year

const leapYear = (year) => year % 4 === 0 ? true : false;

console.log(leapYear(2000))

/* 14. Write a JavaScript program to compare two objects to Determine the first 
one conatains the same properties as secound one 
(which may have additional information) */
const objA = {a: 1, b: 2, c :3}
const objB = {a: 1, b: 2, c :3}
const objC = {a: 1, b: 2, d :3}

const objectEqual = (a,b) => {
    Object.keys(a).every(key => b[key]);
}

console.log(objectEqual(objA, objB))