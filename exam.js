// let input1 = [3, 11, 7, 2, 9, 10];
// let input2 = [ -1, 110, 1, 1, 0];

// function sumArray(params) {
//     let counter = 0; 
//     for(let i = 0; i < params.length; i++) {
//          counter += params[i];
   
       
//     }  
//     console.log(counter);


// }

// sumArray(input1);
// sumArray(input2);



// function isPalindrome(str) {
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    console.log(isPalindrome("awesome"));
//    console.log(isPalindrome("foobar"));
//    console.log(isPalindrome("tacocat"));
//    console.log(isPalindrome("amanaplanacanalpanama"));
//    console.log(isPalindrome("amanaplanacanalpandemonium"));


//    function findGh(str) {

//     return /gh/.test(str)
//    }

//     console.log(findGh("Hey good night!"));
//     console.log(findGh("Hey good morning!"));



// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// function reverseString(str) {
//     let splitStr = str.split("");
//     let reverseArr = splitStr.reverse();
//     let joinArr = reverseArr.join("");
//     return joinArr;
//     }
//     console.log(reverseString("awesome"));
//     console.log(reverseString("rithmschool"));


// function countPrimes(n) {
//     let counter = 0;
//     for (let i = 2; i < n; i++ ) {
//         if (prime(i)) {
//             counter++;
//         }
      
//     }
//     return counter;
// }

//     function prime(n) {

//         for (let i = 2; i < n; i++ ) {
//         if (n % i === 0) {
//         return false;
//     }
// }
// return true;
//     }

//     console.log(countPrimes(100));




     function productOfarray(num) {
        if ( num.length === 0 ) return 1;
        return num.shift() * productOfarray(num);
    }
    
    console.log(productOfarray([1, 2, 3]));
    console.log(productOfarray([1, 2, 3, 10]));









function removeDupes(str) {
   let str = "";

   
}



