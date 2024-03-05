// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example of usage:
  const testPalindrome = "racecar";
  if (isPalindrome(testPalindrome)) {
    console.log(`${testPalindrome} is a palindrome.`);
  } else {
    console.log(`${testPalindrome} is not a palindrome.`);
  }
  