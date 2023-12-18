/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length == 0)
    return true;
  str = str.toLowerCase();
  var i =0, j = str.length -1;
  while(i<j){
    if(str[i]==str[j])
      i++, j--;
    else if(str[i] == ' ')
      i++;
    else if(str[j] == ' ')
      j--;
    else if(str.charCodeAt(i) < 97)
      i++;
    else if(str.charCodeAt(j) < 97)
      j--;
    else
      return false
  }
  return true;
}

module.exports = isPalindrome;
