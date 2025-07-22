/**
  * Implement a function that finds the longest palindrome in a given string.
  *
  * For example, in the string "My dad is a racecar athlete", the longest
  * palindrome is "a racecar a". Count whitespaces as valid characters. Other
  * palindromes in the above string include "dad", "ete", " dad " (including
  * whitespace on each side of dad).
  *
  * @example
  *   console.log(longestPalindrome('My dad is a racecar athlete'));
  *   => 'a racecar a'
  *
  *
  * Input: string  
  * Output: string that is the longest palindrome in the input string 
  * Constraints: whitespaces as valid characters, strings does not have to actual words 
  * Edge Cases:  if no palindrome found return an empty string return "",
  *
  */

const longestPalindrome = (string) => {
  // TODO: Determine I.O.C.E.
  // TODO: Pseudocode your entire solution before you start coding
  // TODO: Your code 
  
  //intit empty strings to return output palindrome
  let currentLongest = "";
  let currentPalindrome = "";

  //create helper function- expand the test 
  const checkOuterCharacters = (lowerIndex, currentIndex, upperIndex) => {
    //
  }

  //init loop through string start at second index
  // conditions for testing for palindrome
  //if i+1 and i-1 are the same values then there is a palindrome
  for(let i = 1; i < string.length; i++ ){
    if(string[i + 1] === string[i -1]){
      currentPalindrome = string[i -1] + string[i] + string[i + 1];
      //invoke helper function here
    }
  }
  // invoke the helper function to determine if the remaining string has palindromes 
    
  // return output whether is a palindrome or empty string
  

  

};