/* Description:

Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
  
Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  
  let pattern = /\d/g;  //Regular expression to find the numbers of the string 
  
  if(strng.search(pattern) === -1) 
    return strng + "1";  // Could be strng + 1 as JS has weird things
  else{
    let strngNumbers = strng.slice(strng.search(pattern));
    strng = strng.slice(0, strng.search(pattern));
    console.log(strng);
    if(strngNumbers.startsWith('0')){
      let sum = parseInt(strngNumbers) + 1;
      if(strngNumbers.length === sum.toString().length) return strng.concat(sum);
      else {
        sum = '0'.repeat(strngNumbers.length - sum.toString().length) + sum;
        return strng.concat(sum);
      }
    }
    else return strng.concat(parseInt(strngNumbers) + 1);
  }
  
}