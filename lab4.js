
/*
Write an if…else statement that:
- Prints “even” if the number is an even number
- Prints “odd” if the number is an odd number
Hint: Use the %(modulo) operator to determine is a number is even or odd.
*/

const number = 3; // Change your number to test your if statement
if (number % 2 === 0) {
    console.log("even");
} else  {
    console.log("odd");
}



/*
Rewrite the following while loop as a for loop:
let x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
*/

for(let x = 9; x >= 1; x = x - 1) {
  console.log("hello " + x);
}



/*
Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
for (x < 10; x++) {
  console.log(x);
}
*/

for (let x = 5; x < 10; x++ ) {
  console.log(x);
}



/*
The for loop below has an error. Fix it!
for (let k = 0 k < 200 k++) {
  console.log(k);
}
*/

for(let k = 0; k < 200; k++) {
  console.log(k);
}



/*
Write a series of conditional statements that:
- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4
*/


  let musicians = 5;
  if (musicians <= 0) {
    console.log ("not a group");
  }  else if (musicians == 1) {
    console.log ("solo");
  }  else if (musicians == 2) {
    console.log ("duet");
  } else if (musicians == 3) {
    console.log ("trio");
  } else if (musicians == 4) {
    console.log ("quartet");
  } else {
    console.log ("this is a large group");
  }



  /*
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. 
Here's what we know! In this murder mystery there are:
four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...
- the poison belongs to the ballroom,
- the trophy belongs to the gallery,
- the pool stick belongs to the billiards room,
- and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder:
- Mr. Parkes was located in the dining room.
- Ms. Van Cleve was located in the gallery.
- Mrs. Sparr was located in the billiards room.
- Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:
- sets the value of weapon based on the room and
- sets the value of solved to true if the value of room matches the suspect's room 
Afterwards, use this template to print a message to the console if the mystery was solved:
__________ did it in the __________ with the __________!
What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:
Mr. Parkes did it in the dining room with the knife!
*/

var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved=true;

} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved=true;


} else if (room === "gallery" &&  suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved=true;

}  else if (room === "ballroom" &&  suspect === "Mr. Kalehoff") {
    weapon= "poison";
    solved=true;
}

if(solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}



/*
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:
I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,
I'd like two scoops of vanilla ice cream in a cone with peanuts. 
*/


let x =  1 + 5 + " bottles of milk"?;
    console.log(x);


