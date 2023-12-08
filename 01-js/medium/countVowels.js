/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;

  for (let i= 0 ; i < str.length; i++)
  {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if(vowels.includes(str[i]))
    {
      vowelCount++;
    }

  }

  return vowelCount;
}

module.exports = countVowels;