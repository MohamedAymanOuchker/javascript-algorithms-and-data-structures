function telephoneCheck(str) {
  // Define regular expression for valid US phone number formats
  const validFormat = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  // Test if the input string matches the valid format
  return validFormat.test(str);
}

console.log(telephoneCheck("555-555-5555"));     // Output: true
console.log(telephoneCheck("1 555-555-5555"));   // Output: true
console.log(telephoneCheck("1 (555) 555-5555")); // Output: true
console.log(telephoneCheck("5555555555"));       // Output: true
console.log(telephoneCheck("1 555 555 5555"));   // Output: true
console.log(telephoneCheck("555 5555"));         // Output: false
console.log(telephoneCheck("1 555)555-5555"));   // Output: false
console.log(telephoneCheck("1 555 555 5555"));   // Output: true
console.log(telephoneCheck("1 456 789 4444"));   // Output: true
console.log(telephoneCheck("123**&!!asdf#"));     // Output: false
console.log(telephoneCheck("55555555"));         // Output: false
console.log(telephoneCheck("(6054756961)"));     // Output: false
console.log(telephoneCheck("2 (757) 622-7382"));  // Output: false
console.log(telephoneCheck("0 (757) 622-7382"));  // Output: false
console.log(telephoneCheck("-1 (757) 622-7382")); // Output: false
console.log(telephoneCheck("2 757 622-7382"));    // Output: false
console.log(telephoneCheck("10 (757) 622-7382")); // Output: false
console.log(telephoneCheck("27576227382"));       // Output: false
console.log(telephoneCheck("(275)76227382"));     // Output: false
console.log(telephoneCheck("2(757)6227382"));     // Output: false
console.log(telephoneCheck("2(757)622-7382"));    // Output: false
console.log(telephoneCheck("555)-555-5555"));     // Output: false
console.log(telephoneCheck("(555-555-5555"));     // Output: false
console.log(telephoneCheck("(555)5(55?)-5555"));  // Output: false
console.log(telephoneCheck("55 55-55-555-5"));    // Output: false
console.log(telephoneCheck("11 555-555-5555"));   // Output: false
