function makeNumber(str) {
  let numStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      numStr += str[i];
    }
  }
  return numStr;
}

makeNumber();
