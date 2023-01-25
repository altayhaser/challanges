 
function countTrue(params) {
    let counter = 0; 
 for(let i = 0; i < params.length; i++) {
    if(params[i]) {
      counter = counter + 1;

    }
 }  
 console.log(counter);
}

countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);
