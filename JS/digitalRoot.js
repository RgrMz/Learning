/* Description:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers.

*/

function digitSum(n) {
  return n.toString().split('').map(element => parseInt(element)).reduce((total, current) => total + current);
}

function digital_root(n) {

  while(n.toString().length > 1) 
    n = digitSum(n);
  return n;
  
}