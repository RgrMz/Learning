function high(x){
  
  //Get the score of each word into an array
  let words = x.split(" "); let index = 0; let maxScore = 0;
  let scores = words.map((currentValue, index, array) => {
    let score = 0;
    for(const c of currentValue) 
      score += c.charCodeAt(0) - 96;
    return score;
  });
  console.log(scores);
  for(let i=0; i<scores.length; i++) {
    if(scores[i] >  maxScore) {
      maxScore = scores[i];
      index = i;
    }
  }
  
  return words[index];
  
}