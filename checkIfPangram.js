const checkIfPangram = (sentence) => {
  let mapOfLetters = new Set()
  for (var i = 0; i < sentence.length; i++) {
    // console.log(sentence[i])
    // console.log(mapOfLetters.has(sentence[i]));
    if (!mapOfLetters.has(sentence[i])) {
      mapOfLetters.add(sentence[i])
      // console.log(mapOfLetters)
    }
  }

  return mapOfLetters.size === 26
};


// Example 1:
// Input: 
let sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram(sentence))
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:
// Input: 
sentence = "leetcode"
console.log(checkIfPangram(sentence))
// Output: false
