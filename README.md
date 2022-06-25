# Password Generator

![GIF](./assets/images/demo.gif)

## Description
This application generates a password for a user given the following preferences selected by the user:
1. Length
2. Inclusion of lowercase characters (yes/no)
3. Inclusion of uppercase characters (yes/no)
4. Inclusion of special characters, such as "/!@#$%^&*()" (yes/no)
5. Inclusion of numeric characters (yes/no)

When the user first opens the application, a "Generate Password" button is rendered. Upon being clicked, the user is prompted to state their desired length between 8 and 128 characters. Subsequently, they are asked to select at least ONE character type to select from (lowercase characters, uppercase characters, special characters, and digits). Upon completion, their newly generated password appears on the screen, available to be copied.

## Future Implementations
Some implementations I would like to add are:
1. Allowing instant copy of the generated password once the user clicks it.
2. Remove the usage of prompts, alerts, and confirms to ask for user input and give feedback.

## Code Snippets

```
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
        // Prompts user to try again if they submit an invalid character/length
        while (passLength == null || passLength < 8 || passLength >= 129 || isNaN(passLength)) {
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
```

In the above code snippet, I'm prompting for the user's responses and validating their input.
The second function starts by prompting the user to enter their desire length of their new password, as well as ensuring the user did so in the right format and following the given criteria. If the user doesn't, they are advised to repeat the step with a valid input. Subsequently, I'm calling a function (top-most) that prompts the user to select which character types they'd like their password to include. Back in the second function, I am verifying that the user selected at least one character type; if not, the process repeats.

## Technologies Used

HTML, CSS, JavaScript, and Git

## Deployment link

https://laurasierra17.github.io/password-generator/