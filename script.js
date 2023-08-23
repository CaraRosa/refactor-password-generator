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
  var confirmLength = (prompt("Please enter the number of characters your password will have: ")); 
  alert("The required length for the password is between 8-128 characters. Please start over.");
  
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
// debugger;
console.log("Confirm Numberic Character", confirmNumericChar);
console.log(numbers);
if(confirmNumericChar) {
  passwordCharacters = passwordCharacters.concat(numbers)
}

if(confirmSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

// Logs the password characters
  console.log("Password Character", passwordCharacters);

var yourPassword = "";
// password = ''


  // Generate random number for each req iteration.
  // 9
   // Random generate a number for each passord req.
   
  // 

  // Array for upper case
  //[...]

  // Array for lowercase case
  //[...]

  // Array for special charctger case
  //[...]

  // Array for number case
  //[...]
  // Password length is 8
  // Requirement is 4 or all of them
  // Take password length and divide it by requirements (8/4)
  // Loop through each requirement array x times 
  // Take all values and put them together into an array
  // *Randomize order in the array
  
  // If password length is 9:
  //Requirement is 4 or all of them
  //Take password length and divide it by requirements (9/4)

  function getRequirementCount(length, requirementCount) {
    // length is 9
    // only one requirement: lowercase characters
    // return 9

    // if length is 9 and requirement is all 4
    // Take length and subtract it by the requirement plus 1
  }

  var myPassword = "";
  // Loop through lowercase characters
  // var confirmLowerCase = confirm("Please click OK to confirm that your password will contain lowercase letters.");
  // new password genrator

  for (var i = 0; i < confirmLength; i++) {
    myPassword = myPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    // all characters
    // passwordCharacters
    // random number
    // Math.floor(Math.random() * passwordCharacters.length)
    
    if (confirmLowerCase) {
      myPassword = myPassword + lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    console.log(yourPassword);

    if (confirmUpperCase) {
      myPassword = myPassword + uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }

    if (confirmNumericChar) {
      myPassword = myPassword + numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (confirmSpecialChar) {
      yourPassword = yourPassword + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  
  }
  console.log("My password version 2", yourPassword);

  // my initial password generation
// for (var i = 0; i < confirmLength; i++) {
//   yourPassword = yourPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
//   // all characters
//   // passwordCharacters
//   // random number
//   // Math.floor(Math.random() * passwordCharacters.length)

//   console.log(yourPassword);
  
// }
  return myPassword;
}


function writePassword() {
  var password = yourPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
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
