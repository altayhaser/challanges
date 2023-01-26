let x = 10; 
if (x > 5) { 
    console.log("x is greater than 5");        
} else{
    console.log("x is not greater than 5");
}

let str = "altayhaser"
if (str.length > 5) {
    console.log("The name is longer than 5 characters ")
} else {
    console.log("The name is not longer than 5 characters ")
}

let age = 18
if (age >= 18 && age <= 65) { 
    console.log("You are an adult")
} else {
    console.log("You are not an adult")
}


function multp(a,b) {
return a*b;
}
console.log(multp(4,5));


function greet(name) {
    console.log("Hello " + name + "!");
}
greet("altay")


let arr = [1, 2, 3, 4, 5]
for(i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let counter = 0;
while (counter <= 10) {
  
    counter++;
}
console.log(counter);

let number = [2, 3, 5, 6, 7, 8];
function question(arr) {
let sum = 0;
for(i = 0; i < arr.length < i++) {
    sum += arr[i]
}
return sum;
}
console.log(question(arr));

let arr2 = [1, 2, 3, 90, 44];
function findLargest(params) {
    let largest = 0
    for(let i = 1; i < arr.length; i++) {
        if (largest < arr2[i]) {
            largest = arr2[i];
        }
    }
    return largest;
}
console.log(findLargest(arr2));



function reverseString(str) {
let splitStr = str.split("");
let reverseArr = splitStr.reverse();
let joinArr = reverseArr.join("");
return joinArr;
}
console.log(reverseString("altay"));