// Points to the "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Prompts user to select length and character types for their new password
function getUserPasswordCriteria() {
  var passLength = prompt("Please select the length of your new password, between 8 and 128 characters");
  var hasLowercase = confirm("Would you like your password to include LOWERCASE characters?");
  var hasUppercase = confirm("Would you like your password to include UPPERCASE characters?");
  var hasNumeric = confirm("Would you like your password to include numbers?");
  var hasSpecialChars = confirm("Would you like your password to include special characters? Example: !-./:;<=>?@[\]^_`{|}~");

  // Ensure user specifies a length within the given bounds

}

// Function to generate password based on user selections
function generatePassword() {
  var newPassword = getUserPasswordCriteria();

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// PLAN:

// 1. once the user clicks the 'generate password' button, a dialogue pops up
// 2. the dialogue asks for the following criteria:
//       - select a length between 8 and 128 characters
//       - (AT LEAST ONE) select whether or not to include: lowercase, uppercase, numeric, special characters
// 3. after the user answers everything, password is generated in the box