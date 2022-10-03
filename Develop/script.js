// Assignment Code
var generateBtn = document.querySelector("#generate");
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upper = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"]
var lower = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ""]

function generatePassword() {
  var finalPassword = []
  var passwordlength = prompt("how long do you want your password to be")
  console.log(passwordlength)
  if (passwordlength<8||passwordlength>128){
    alert("Pleace choose another passwrod length")
    return null
  }
  var passwordOptions = []
  var hasSpecial = confirm("do you want special characters")
  var hasNumber = confirm("do you want numbers")
  var hasUpper = confirm("do you want Upper case")
  var hasLower = confirm("do you want lower case")
  if (hasSpecial === true) {
    passwordOptions = passwordOptions.concat(special)

  }
  if (hasNumber === true) {
    passwordOptions = passwordOptions.concat(nums)

  }
  if (hasUpper === true) {
    passwordOptions = passwordOptions.concat(upper)

  }
  if (hasLower === true) {
    passwordOptions = passwordOptions.concat(lower)

  }
  //validate user choice
  //look up &&
  console.log(passwordOptions)
  for (var i = 0; i < passwordlength; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)])
    
  }
  console.log( finalPassword)
  return finalPassword.join("")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
