function isPalindrome(word) {
  let backWordArray = []

  for (let i = (word.length - 1); i>=0; i--){
    backWordArray.push(word[i])
  }  
  const backWord = backWordArray.join("")
  return (word === backWord)
}


/* 
create a function that takes a string as an argument, and checks if the string (a word, lowercase, no spaces) is the same read fwd and bckwd
...
takes a string as an argument
creates a variable and sets it to that string written backwards...
  creates empty array variable for backwards array
  uses for loop to iterate through the letters back to front pushing each letter to the end of the array
  turn array back into string and set to a new variable
returns true if backWord is same as forWard, and false if not - strict equality operator
*/

/*
  Explanation:
  The isPalindrome function is passed a word, as a string.
  It creates a backWordArray variable and sets it to an empty array.
  It iterates through each letter of the passed in string from back to front and pushes each letter to the array.
  It joins the array values into a string, setting this to a new variable backWord: representing the passed in string backwards.
  It returns a Boolean using the strict equality operator comparing the passed in word to the backWord.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
