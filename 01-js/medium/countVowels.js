/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    var vowel = ['a', 'e', 'i', 'o', 'u']
    str= str.toLowerCase();
    str = str.split('');
    count =0;
    str.forEach(element => {
      if(vowel.indexOf(element)!= -1)
        count++
    });
    return count;
}

module.exports = countVowels;