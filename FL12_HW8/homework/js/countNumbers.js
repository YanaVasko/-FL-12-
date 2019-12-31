function countNumbers(str) {
  let numStr = '';
  let arr = {};

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      numStr += str[i];
    }
  } 
  
  for (let j = 0; j < numStr.length; j++) {
    if (arr[numStr[j]] === undefined) {
      arr[numStr[j]] = 1;
    } else {
      ++arr[numStr[j]];
    }
  }
    return arr;
  }

countNumbers();
  