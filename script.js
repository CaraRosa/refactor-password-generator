// Assignment code here

// Declare arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Declare variables
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericChar;
var confirmSpecialChar;


// Function that contains the code to generate a random password
function generatePassword() {
  var confirmLength = (prompt("Please enter the number of characters your password will have: "));
  
  // While Loop to check if password's set parameters are met 
  while (confirmLength <= 8 || confirmLength >= 128) {

    var confirmLength = (prompt("Please enter the number of characters your password will have: ")); 
    alert("The required length for the password is between 8-128 characters. Please start over.");
  
  }
  // Alerts the user to the character length of the password
  alert("Your password contains " + confirmLength + " characters.");
  
  // Confirm windows for the user to choose criteria for the password
  var confirmLowerCase = confirm("Please click OK to confirm that your password will contain lowercase letters.");
  var confirmUpperCase = confirm("Please click OK to confirm that your password will contain uppercase letters.")
  var confirmNumericChar = confirm("Please click OK to confirm that your password will contain numbers.");
  var confirmSpecialChar = confirm("Please click OK to confirm that your password will contain special characters.");

  // while loops that sets all password criteria to false if user does not choose any criteria
  // Tells the user you have to choose at least one criteria to generate a password
  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumericChar === false && confirmSpecialChar === false) {
    
    alert("Your password must have one of the set criteria.")
    var confirmLowerCase = confirm("Please click OK to confirm that your password will contain lowercase letters.");
    var confirmUpperCase = confirm("Please click OK to confirm that your password will contain uppercase letters.");
    var confirmNumericChar = confirm("Please click OK to confirm that your password will contain numbers.");
    var confirmSpecialChar = confirm("Please click OK to confirm that your password will contain special characters.");
  
  }

  // Stores the password characters
  var passwordCharacters = [];

  // If loops adding on characters to the end of the password if the user chooses the criteria
  if(confirmUpperCase) {

    passwordCharacters = passwordCharacters.concat(uppercaseLetters)

  }


  if(confirmNumericChar) {
    
    passwordCharacters = passwordCharacters.concat(numbers)

  }

  if(confirmSpecialChar) {
    
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  
  }

  // Stores your randomly generated password
  var yourPassword = "";

  // For loop that adds on characters randomly as long as the length does not exceed the user's chosen length for the password
  for (var i = 0; i < confirmLength; i++) {
    
    yourPassword = yourPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  
  }
  return yourPassword;
}

// Shuffles the generated password to make it more random
function shuffleArray (yourPassword) {
  for (var i = yourPassword.length - 1; i > 0; i--) {

    var j = Math.floor(Math.random() * (i + 1));

    var temp = yourPassword[i];
    yourPassword[i] = yourPassword[j];
    yourPassword[j] = temp;
  }
  return yourPassword;
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