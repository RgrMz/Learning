function order(words){
  
  /* Given a string compound of words with a number inside such as: 'H1ello yo4u 3are how2?' 
     order the string corresponding each number of each word with its new index */
  
  if (words === "") 
      return "";
  let arrayWords = words.split(" ");
  let ordered = new Array(arrayWords.length);
  arrayWords.forEach((currentValue, index, arr) => {
    [...currentValue].forEach(c => {
      if(c >= '0' && c <= '9')
        ordered[parseInt(c,10)-1] = currentValue; 
      return;
    });
  });
  return ordered.join(" ");
  
}