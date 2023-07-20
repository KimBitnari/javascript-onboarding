function problem2(cryptogram) {
  let idx1 = 0, idx2 = 1;
  let str = [cryptogram[0]];

  while (idx2 < cryptogram.length) {
    if (str[idx1] === cryptogram[idx2]) {
      str.pop();
      idx1--;
    }
    else {
      str.push(cryptogram[idx2]);
      idx1++;
    }

    idx2++;
  }

  str = str.join('');

  return str;
}

// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
