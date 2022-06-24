// Points to the "Generate Password" button
var generateBtn = document.querySelector("#generate");

function getCharacterTypes() {
   // Save user's character types preferences
   alert("Please select at least one character type!");
   var hasLowercase = confirm("Would you like your password to include LOWERCASE characters?");
   var hasUppercase = confirm("Would you like your password to include UPPERCASE characters?");
   var hasNumeric = confirm("Would you like your password to include numbers?");
   var hasSpecialChars = confirm("Would you like your password to include special characters? Example: !-./:;<=>?@[\]^_`{|}~");

   return [hasLowercase, hasUppercase, hasNumeric, hasSpecialChars];
  
}

// Prompts user to select length and character types for their new password
function getUserPasswordCriteria() {
  // Ensure user specifies a length within the given bounds
  var passLength = Number(prompt("Please select the length of your new password, between 8 and 128 characters"));
  while (passLength == null || passLength < 8 || passLength >= 129) {
    passLength = Number(prompt("Invalid length.\nPlease select the length of your new password, between 8 and 128 characters"));
  }

  // A list storing the users response to character types preferences
  var charTypes = getCharacterTypes();
  
  // Ensure at least one character type was selected
  while (!charTypes.includes(true)) {
    charTypes = getCharacterTypes()
  }
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