/* Description:

Given an array of integers, find the one that appears an odd number of times.

*/

function findOdd(arr) {
  
  let getOccurrence = (arr, value) => arr.filter(aux => (aux === value)).length;
  return arr.find((element, index, array) => getOccurrence(array,element) % 2 != 0);
  
}