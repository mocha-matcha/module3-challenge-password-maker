// Assignment code here
var lowecaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters = lowecaseCharacters.toUpperCase();
var numberCharacters = '1234567890';
var specialCharacters = '!=@#$%^&*()?<>,.;:~-=';


function getRandomNumer(min,max)
{
return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword()
{
var pw = "";
//8 -> 128
var passwordLength = getRandomNumer(8,128);

var includeUppercase = confirm("Uppercase?");

var includeLowercase = confirm("Lowercase?");

var includeNumbers = confirm("Numbers?");

var includeSpecial = confirm("Special?");

var charactersToInclude='';

if(includeUppercase)
	{
charactersToInclude += uppercaseCharacters;
	}
if(includeLowercase)
	{
charactersToInclude += lowecaseCharacters;
	}
if(includeNumbers)
	{
charactersToInclude += numberCharacters;
	}
if(includeSpecial)
	{

charactersToInclude += specialCharacters;
	}


var characterLength = charactersToInclude.length;

for(var i = 0; i<passwordLength; i++)
{
pw += charactersToInclude.charAt(getRandomNumer(0,characterLength-1));
	}

return pw;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
console.log("write");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
