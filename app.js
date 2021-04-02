const input = "balena albastra";

const vowels = ["a", "e", "i", "o", "u"];

///const resultArray = 
let resultArray = [];

for(let i = 0; i < input.length; i++) {

   for(let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j])
      resultArray.push(vowels[j]);
  }
 }
 console.log(resultArray);
