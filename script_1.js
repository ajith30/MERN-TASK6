//GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

/* 1. Find the culprit 

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I'm JavaScript!');
 </script>
 <p>
    Q:Whats the error in this ? 
    A: The string inside the alert warppped / starts with double quotes and endd with single Quotes.
 </p>
</body>
</html>  

*/


/*
2.Find the culprit and invoke the alert 

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>  

alert("Im invoked!");

*/

/* 3. Explain the below how it works 

alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert(`Wor
 ld`);
alert(3 +
1
+ 2); // this is multiple line code and its working

Explanation: The alert() method wil display the  alert box with the given string as a messages and ok button.
To show next alert messgges we have to click ok button.Explanation.Explanation
*/


/*
 //4. Fix the below to alert Guvi geek 

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+ " " + lname;
alert( admin ); // "Guvi geek"

*/

/*
//5. Fix the below to alert hello Guvi geek

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${fname} ${lname}` );

*/

/*
//6.Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
let sum = Number(a) + Number(b);
alert(sum);

*/

/*
//7. If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//Explanation: "2" will be greater than "12" Because alphabetically 1 is less than 2 since the condition is true "code is Blasted" printing.
//when we make a = "2" < "12" then "Diffused" will be  printed.

*/

/*
//8. How to get the success in console.

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log('OMG it works for any number inc 0');
}
else
{
 console.log("Success");
}

//Workaround: If we make the if condition as a >= 0, the Sucees will be printed.

*/

/*
//9.How to get the correct score in console.

let value = Number(prompt('How many runs you scored in this ball'));

if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// Explanation:the data type of entered value of prompt is string, So we have to convert the vale to number 
//then the code will be get execte correcttly.Number() method converts a value to a number.
*/


/*
//10. Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? login :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :'';
console.log(message);
*/


/*
// 11. Fix the code to welcome the boss
// You cant change the value of the msg

let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
 let message = "Go away";
}
console.log(message);

*/

/*
//12. Fix the code to welcome the boss

let message;
let lock = "";
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

*/

/*
//13. Fix the code to welcome the boss

let message;
let lock = null;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

*/

/*
// 14. Change the code to print 
// 3

// 2

// 1

//You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}
*/


/*
// 15.Change the code to print 1 to 10 in 4 lines.

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)


let num = 1;
while(num <= 10) {
   console.log(num++);
}

*/


/*
//16.Change the code to print even numbers

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
   console.log(num)
}
*/


/*
// 17.Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
*/


/*

//18.Fix the code to disarm the bomb.

let i =10;
while(i > 0) {
   console.log(i);
   i--;
}

let countdown = 100;
while (countdown > 0) {
  if(countdown == 0)
  {
   console.log("bomb triggered");
  } else if( countdown ==1) {
   console.log("bomb disarmed")
  }
  countdown--;
  
}

*/

/*
//19. Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

//Explanation: printed msg is: hi . Because lemeout = 0 is falsy value. Any values not defined as falsy value it's considered as truthy value.
//Ex: false,0 (zero), -0 (negative zero), 0n (BigInt zero) , null, undefined, NaN (not a number) are falsy value. if Block only execute if the condition is truthy value.

*/
