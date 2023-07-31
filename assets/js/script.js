// Assignment Code


function gen() {

	let characters = {
		upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
		lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		special: ['!', ')', '&', '^', '$', '*', '+', '-', '/', '?', '(', '%', '.']
	};
	
	var passLength = prompt('choose password length (must be between 8 and 128 characters).');
	var passwordLengthNum = Number(passLength);

	if (passwordLengthNum < 8 || passwordLengthNum > 128) {
		prompt('please choose a character length between 8 and 128.');
	} 


	var uppercase = confirm('Do you want your password to contain uppercase characters?');
	var lowercase = confirm('Do you want your password to contain lowercase characters?');
	var num = confirm('Do you want your password to contain numeric characters?');
	var symbol = confirm('Do you want your password to contain special characters?');

	var passwordGen = [];

	
	 if (uppercase) {
	 	passwordGen = passwordGen.concat(characters.upper);
	 }

	if (lowercase) {
		passwordGen = passwordGen.concat(characters.lower);
	}
	if (num) {
		passwordGen = passwordGen.concat(characters.number);
	}

	if (symbol) {
		passwordGen = passwordGen.concat(characters.special);
	}
	
	let password = [];

	for (let i = 0; i < passwordLengthNum; i++) {
		let randomNum = Math.floor(Math.random()*passwordGen.length);
		let randomChar = passwordGen[randomNum];
		password.push(randomChar);
	}

	
	
	return password.join('');
	
}


function writePassword() {
	var password = gen();
  
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
  }

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);
