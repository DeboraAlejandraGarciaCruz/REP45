const form = document.getElementById('password-generator-form');
const resultElement = document.getElementById('result');
const copyButton = document.getElementById('copy-btn');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}<>?';

function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let availableChars = '';
    let password = '';

    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(availableChars);
    }

    return password;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    resultElement.textContent = password;
});

copyButton.addEventListener('click', function () {
    const password = resultElement.textContent;
    navigator.clipboard.writeText(password)
        .then(() => alert('Contraseña copiada al portapapeles'))
        .catch(err => alert('Error al copiar la contraseña: ' + err));
});
