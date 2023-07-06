// Assignment Code
var passLength = 15;
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var symbol = '!@#$%^&*(){}[]-=<>';


var randomPassword = upper + lower + number + symbol;



var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
// Write password to the #password input
function writePassword() {
	var password = '';
	
	password += upper[Math.floor(Math.random() * upper.length)];
	password += lower[Math.floor(Math.random() * lower.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];


	while(passLength > password.length) {
		password += randomPassword[Math.floor(Math.random() * randomPassword.length)]
	}

	passwordText.value = password;
	writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
