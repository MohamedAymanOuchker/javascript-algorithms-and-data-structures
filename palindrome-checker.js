function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Check if the string is the same when reversed
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(palindrome("eye")); // Output: true
