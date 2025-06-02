const number = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const numberToRoman = num => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";
  let i = 0;
  while (num > 0) {
    while (num >= val[i]) {
      result += sym[i];
      num -= val[i];
    }
    i++;
  }
  return result;
}

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
  const input = number.value.trim();
  const num = Number(input);
  if (input === "" || isNaN(num)) {
    output.textContent = "Please enter a valid number";
  } else if(num< 1) {
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const result = numberToRoman(num);
    output.textContent = `${result}`;
  }
});
