function function1() {
  var org_txt = document.getElementById("original").value;
  var shft_num = document.getElementById("shift").value;
  var encrypted = ceasar(org_txt, Number(shft_num));

  document.getElementById("encrypted").value = encrypted;
}


function ceasar(str, key) {
  
  if (key < 0)
    return ceasar(str, key + 26);
  
  // variable to store the result
  var result = '';
  // iterate over the string
  for (var i = 0; i < str.length; i++) {
    // Get the character that we are going to add
    var char = str[i];
    // Check if it's a letter
    if (char.match(/[a-z]/i)) {
      // Get the letter's code
      var code = str.charCodeAt(i);
      // Capital letters
      if ((code >= 65) && (code <= 90))
        char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    // Add the character
    result += char;
  }
  // Result
  return result;
};
