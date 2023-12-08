/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const a = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  start = 0;
  end = str.length - 1 
  
  for(let i=0 ; i< str.length ; i++)
  {
     if (a[start] !== a[end])
     {
       return false
     }
     else {
      start++;
      end--;
     }
  }

  return true;
}


module.exports = isPalindrome;
