const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDisplay = document.getElementById('result');

checkButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(!textInput.value) {
        alert('Please input a value');
        return;
    } else if(isPalindrome(textInput.value)) {
        resultDisplay.textContent = `${textInput.value} is a palindrome!`;
    } else {
        resultDisplay.textContent = `${textInput.value} is not a palindrome!`;
    }
})

const isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
