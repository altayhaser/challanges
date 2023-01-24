
function capFirstLetters(sentences) {
    
    //console.log(sentences);
    let stringArray = sentences.split(" ");

    for(let = 0; i < stringArray.lenght; i++){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase()
        + stringArray[i].slice(1);
        //hort
        //entence
    }
    return stringArray.join(" ");
}

console.log(capFirstLetters("a short sentence"));
console.log(capFirstLetters("a lazy fox"));
console.log(capFirstLetters("look, it is working!"));