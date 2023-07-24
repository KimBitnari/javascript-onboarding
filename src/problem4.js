function problem4(word) {
  let result = "";

  for (w of word) {
    // 대문자인 경우 (65~90)
    if (isNaN(w) && w === w.toUpperCase()) {
      if (w.charCodeAt(0) <= 77) result += String.fromCharCode(78 + (78 - w.charCodeAt(0)));
      else result += String.fromCharCode(65 + (90 - w.charCodeAt(0)));
    }
    // 소문자인 경우 (97~122)
    else if (isNaN(w) && w === w.toLowerCase()) {
      if (w.charCodeAt(0) <= 99) result += String.fromCharCode(100 + (100 - w.charCodeAt(0)));
      else result += String.fromCharCode(97 + (122 - w.charCodeAt(0)));
    }
    // 문자가 아닌 경우
    else result += w;
  }

  return result;
}

// console.log(problem4("I love you"));
// console.log(problem4("I love you 222"));

module.exports = problem4;
