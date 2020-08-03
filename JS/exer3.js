/* Description of the problem: 

Implement a function likes :: [String] -> String, which must take in input array, 
containing the names of people who like an item. 
It must return the display text as shown in the examples:
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
For 4 or more names, the number in and 2 others simply increases.

*/

function likes(names) {
  
  let manyLikes = "";
  let i = 0;
  switch(names.length){
      case 0:
        return "no one likes this";
      case 1:
        return names[0]+" likes this";
      case 2:
        return names[0] + " and " + names[1] + " like this";
      case 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      default:
        return names[0] + ", " + names[1] + " and " + (names.length - 2).toString() + " others like this";
  }
}