// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// In this variable I added all the letters, numbers ans characters together.

var PasswordOptions = specialCharacters.concat(
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters
);

// Function to prompt user for password options
function getPasswordOptions(YourChoice) {
  var awnser = window.prompt("Would you like to include" + YourChoice + "?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  getPasswordOptions();
}

// Function to generate password with user input
function generatePassword() {
  //we will add a prompt to know the size of the password the user wants
  var lenght = window.prompt("Choose between 10 and 64 characters...");
  // if user write nothing, user should have an alert that must write a number
  if (isNaN(lenght)) {
    alert("You must insert a number");
    // size of our password should be between 10 and 64
  } else if (lenght < 10 || lenght > 64) {
    window.prompt("Your password should have between 10 and 64 characters");
  }
  // if user doesn't write anything it will be voided
  if (lenght === null) {
    return;
  }
  // here we will take the first question on the first function  (getPasswordOptions),
  // how users would like their password
  var lowercase = getPasswordOptions(" lowercase letters");
  var uppercase = getPasswordOptions(" uppercase letters");
  var numbers = getPasswordOptions(" numbers");
  var special = getPasswordOptions(" special characers");
  //if they didn't press any it will return to the beginning
  if (!lowercase && !uppercase && !numbers && !special) {
    alert("You must choose an option");
    return;
  }

  var password = "";
  for (i = 0; i < length; i++) {
    password += PasswordOptions(
      Math.floor(Math.random() * PasswordOptions.length)
    );
  }
  console.log(password);
  return password;
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
