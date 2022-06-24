// Points to the "Generate Password" button
var generateBtn = document.querySelector("#generate");

function getCharacterTypes() {
  // Save user's character types preferences
  alert("Please select at least one character type!");
  var hasLowercase = confirm("Would you like your password to include LOWERCASE characters?");
  var hasUppercase = confirm("Would you like your password to include UPPERCASE characters?");
  var hasNumeric = confirm("Would you like your password to include numbers?");
  var hasSpecialChars = confirm("Would you like your password to include special characters? Example: !-./:;<=>?@[\]^_`{|}~");

  return {
    lowercase: hasLowercase,
    uppercase: hasUppercase,
    numeric: hasNumeric,
    specialChars: hasSpecialChars
  }
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
  while (!Object.values(charTypes).includes(true)) {
    charTypes = getCharacterTypes()
  }

  // return desired password length and character type preferences
  return [passLength, charTypes];
}

// Function to generate password based on user selections
function generatePassword() {
  var passCriteriaList = getUserPasswordCriteria();
  var passLength = passCriteriaList[0]; // number
  var charTypes = passCriteriaList[1]; // object


  // count how many chars type the user selected
  var countTrue = 0;
  for (const property in charTypes) {
    if (charTypes[property] === true) countTrue++;
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = lowercaseChars.toUpperCase();
  var digits = "0123456789";
  var listSpecialChars = "!#%&^@()*$";

  // Generate a password which containes chars from every type selected by the user.
  // This quantity is the requested password length divided by the number of character types selected.
  var tempPassword = "";
  for (var i = 0; i < passLength / countTrue; i++) {
    if (charTypes.lowercase) {
      var randomIndex = Math.floor(Math.random() * lowercaseChars.length);
      tempPassword += lowercaseChars.substring(randomIndex, randomIndex + 1);
    }
    if (charTypes.uppercase) {
      var randomIndex = Math.floor(Math.random() * uppercaseChars.length);
      tempPassword += uppercaseChars.substring(randomIndex, randomIndex + 1);
    }
    if (charTypes.numeric) {
      var randomIndex = Math.floor(Math.random() * digits.length);
      tempPassword += digits.substring(randomIndex, randomIndex + 1);
    }
    if (charTypes.specialChars) {
      var randomIndex = Math.floor(Math.random() * listSpecialChars.length);
      tempPassword += listSpecialChars.substring(randomIndex, randomIndex + 1);
    }
  }

  // Permutate the order of the characters in the password
  var newPassword = "";
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * tempPassword.length);
    newPassword += tempPassword.substring(randomIndex, randomIndex + 1);
  }
  
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

// make sure non-numeric characters aren't inputted
// fix comments
// apply a Set for permutation