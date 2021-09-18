// Assignment Code
// Variable storage 
var generateBtn = document.querySelector("#generate");
document.getElementById("password").value = password;
var upperCase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialsChar =  ["!", "%", "&","*", "+", "-","<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var confirmLength = ""
var passwordText = ""

console.log(numbers);
console.log(upperCase);
console.log(lowerCase);
console.log(specialsChar);
console.log(generatePassword);
console.log(password);
console.log(document.querySelector);
console.log(document.getElementById.value)


//This is where generation function start
function generatePassword() {
   confirmLength =  (window.prompt("How  many characters would you like your password? Choose between 8 and 128"));
 if (!confirmLength) {
   alert("try again")
  
    
   
    
   // set my password lengths               
 }
 else if (confirmLength < 8 || confirmLength > 128) {
  confirmLength = (prompt("Has to be between 8-128"));
   
 }
 
 // My prompt Questions
  numbers = confirm("Do you want numbers?");
  specialsChar = confirm("Do you want special characters?");
  upperCase = confirm("Do you want numbers?");
  lowerCase = confirm("Do you want lowercase?");

if (!numbers && !specialsChar && !upperCase && !lowerCase) {
   alert("You need to select at least one criteria");
   
}
//Confirmation tags for character choices 
var passwordText = []

if (numbers) {
  passwordText = passwordText.concat(numbers)
  
}

if (specialsChar) {
  passwordText = passwordText.concat(specialsChar)
}

if (upperCase) {
  passwordText = passwordText.concat(upperCase)
}

if (lowerCase) {
  passwordText = passwordText.concat(lowerCase)
}

var passwordText = ""
// My for loop equation
for (var i = 0; i < confirmLength; i++) {
  passwordText = password + passwordText[Math.floor(Math.random() * confirmLength)];
  
  
}
 return password}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(generatePassword);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); { alert("hello world"); }


