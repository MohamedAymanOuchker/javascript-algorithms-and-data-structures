function rot13(str) {
  const decoded = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Z]/.test(char)) {
      const charCode = str.charCodeAt(i);
      let decodedCharCode = charCode - 13;
      
      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }

      decoded.push(String.fromCharCode(decodedCharCode));
    } else {
      decoded.push(char);
    }
  }

  return decoded.join("");
}

// Test case
console.log(rot13("SERR PBQR PNZC"));
