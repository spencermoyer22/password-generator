// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write function to get criteria and generate password
 var generatePassword = function() {
   promptLength();
 }

 // prompt for length
 var promptLength = function() {
  var passwordLength = prompt("Enter the desired length of your password. (Must be between 8 and 128 characters)");

   // make sure entered value is a number between 8 and 128
   if (isNaN(passwordLength)) {
    alert("Enter a number between 8 and 128.");
    generatePassword();
   }
   else if(passwordLength < 8 || passwordLength > 128) {
     alert("The length must be between 8 and 128.");
     generatePassword();
   }
   else {
     parseInt(passwordLength);
   }
 }

 // prompt for special characters
 var promptCharacters = function() {
   var characters = "";

   var charLower = confirm("Would you like to use lowercase letters?");

   if (charLower) {
     characters += "abcdefghijklmnopqrstuvwxyz";
   }

   var charUpper = confirm("Would you like to use uppercase letters?");
  
   if (charUpper) {
     characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }

   var charNumber = confirm("Would you like to use numbers?");

   if (charNumber) {
     characters += "1234567890";
   }

   var charSpecial = confirm("Would you like to use secial characters?")

   if (charSpecial) {
     characters += "!@#$%&*_"
   }
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);