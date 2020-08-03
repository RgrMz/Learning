/* Description: 

Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must multiply 
the digits in num until you reach a single digit.

*/

function persistence(num) {
  
  /* Anonymous function used to calculate the multiplication of number's digits */
  let multiplyDigits = num => {
    let digits = num.toString().split("");
    return digits.reduce( (total, value) => parseInt(total)*parseInt(value));
  }
  
  if(num.toString().length == 1) return 0;
  let keep = true, times = 0;
  while(keep) {
    if(multiplyDigits(num).toString().length == 1) 
      keep = false;
    else num = multiplyDigits(num);
    times++;
  }
  
  return times;
  
}