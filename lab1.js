function counter() {
    let numbers = [];
    for (let i = 0 ; i <= 100 ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz");      
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
counter();




function secondQuestion() {
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
           sum = sum + i; 
        }
    }
    return sum;
}
console.log(secondQuestion())


function thirdquestion(arr) {
    let largest = arr[0];

for(let i = 1; i < arr.lenght; i++); {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
return largest;
}




