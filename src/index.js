module.exports = function toReadable (number) {
  let ones = ["", "one","two","three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
  let answer;
  let str = String(number).split("");
  if (number == 0) {return 'zero';}
  if (number < 20) {return ones[number];}
  if (number < 100) {
	  answer = tens[str[0]] + ones[str[1]];
	  return answer.trim();
	  }
  if (number < 1000) {
	  if (str[1]==1) {return answer = ones[str[0]]+' hundred ' + ones[str[1]+str[2]] }
	  answer = ones[str[0]]+' hundred '+ tens[str[1]] + ones[str[2]];
	  return answer.trim();
	  }
}
  
