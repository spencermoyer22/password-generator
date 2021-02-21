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

  var newPassword = "";
   // prompt for length
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

   // prompt for special characters
   var characters = "";

   // add characters desired to characters variable based on user response
   var charLower = confirm("Would you like lowercase letters added to the random generator?");

   if (charLower) {
     characters += "abcdefghijklmnopqrstuvwxyz";
   }

   var charUpper = confirm("Would you like uppercase letters added to the random generator?");
  
   if (charUpper) {
     characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }

   var charNumber = confirm("Would you like numbers added to the random generator?");

   if (charNumber) {
     characters += "1234567890";
   }

   var charSpecial = confirm("Would you like special characters added to the random generator?")

   if (charSpecial) {
     characters += "!@#$%&*_"
   }

   if (!charLower && !charUpper && !charNumber && !charSpecial) {
     alert("You must include at least one character type.");
     generatePassword();
   }

   for (var i = 0; i < passwordLength; i++) {
     newPassword += characters.charAt(Math.floor(Math.random() * characters.length + 1));
   } 
   return newPassword;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);