const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function isValidUSPhoneNumber(str) {
  str = str.trim();

  // Only allow digits, spaces, hyphens, and parentheses
  if (/[^0-9\s\-()]/.test(str)) return false;

  // Parentheses must be used correctly
  if ((str.match(/\(/g) || []).length !== (str.match(/\)/g) || []).length) return false;
  if (str.includes('(') && !/\(\d{3}\)/.test(str)) return false;

  // Main regex for valid US numbers
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
  if (!regex.test(str)) return false;

  // If country code is present, must be '1'
  if (/^1/.test(str.replace(/\s/g, ''))) {
    if (!/^1[\s-]?/.test(str)) return false;
  }

  return true;
}

checkBtn.addEventListener('click', () => {
  const value = userInput.value;
  if (value.trim() === '') {
    alert('Please provide a phone number');
    return;
  }
  if (isValidUSPhoneNumber(value)) {
    resultsDiv.textContent = `Valid US number: ${value}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`;
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});