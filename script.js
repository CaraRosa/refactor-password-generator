// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

//Declare arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Declare variables
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericChar;
var confirmSpecialChar;

function generatePassword() {
  var confirmLength = (prompt("Please enter the number of characters your password will have: "));

// While Loop to check if password's set parameters are met
while (confirmLength <= 8 || confirmLength >= 128) {
  alert("The required length for the password is between 8-128 characters. Please start over.");
  var confirmLength = (prompt("Please enter the number of characters your password will have: ")); 
  
}
// Alerts the user to the character length of the password
alert("Your password contains " + confirmLength + " characters.");

//Confirm windows for the user to choose criteria for the password
var confirmLowerCase = confirm("Please click OK to confirm that your password will contain lowercase letters.");
var confirmUpperCase = confirm("Please click OK to confirm that your password will contain uppercase letters.")
var confirmNumericChar = confirm("Please click OK to confirm that your password will contain numbers.");
var confirmSpecialChar = confirm("Please click OK to confirm that your password will contain special characters.");

  // while loops that sets all password criteria to false if user does not choose any criteria
  //Tells the user you have to choose at least one criteria to generate a password
  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumericChar === false && confirmSpecialChar === false) {
    alert("Your password must have one of the set criteria.")
    var confirmLowerCase = confirm("Please click OK to confirm that your password will contain lowercase letters.");
    var confirmUpperCase = confirm("Please click OK to confirm that your password will contain uppercase letters.");
    var confirmNumericChar = confirm("Please click OK to confirm that your password will contain numbers.");
    var confirmSpecialChar = confirm("Please click OK to confirm that your password will contain special characters.");
}
  // Stores the password characters
  var passwordCharacters = [];

// if loops adding on characters to the end of the password
if(confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowercaseLetters)
}

if(confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(uppercaseLetters)
}

if(confirmNumericChar) {
  passwordCharacters = passwordCharacters.concat(numbers)
}

if(confirmSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

// Logs the password characters
  console.log(passwordCharacters);

var yourPassword = " ";

for (var i = 0; i < confirmLength; i++) {
  yourPassword = yourPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(yourPassword);
  
}
  return yourPassword;
}


function writePassword() {
  var password = yourPassword();
  var passwordTex = document.querySelector("#password");

  passwordTex.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
