function convert() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Number || typeof arguments[i] === 'number') {
      arr[i] = arguments[i].toString();
    } else if (
      arguments[i] instanceof String ||
      typeof arguments[i] === 'string'
    ) {
      arr[i] = Number(arguments[i]);
    }
  }
  return arr;
}

function executeforEach() {
  for (let i = 0; i < arguments[0].length; i++) {
    arguments[1](arguments[0][i]);
  }
}

function mapArray() {
  let arr = [];
  for (let i = 0; i < arguments[0].length; i++) {
    arr[i] = arguments[1](parseInt(arguments[0][i]));
  }
  return arr;
}

function filterArray() {
  let arr2 = [];
  let k = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    if (arguments[1](parseInt(arguments[0][i]))) {
      arr2[k++] = parseInt(arguments[0][i]);
    }
  }
  return arr2;
}

function flipOver(str) {
  let n = str.length;
  let reverse = [];
  for (let i = n - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}


function makeListFromRange() {
  let rangeList = [];
  let k = 0;
  for (let i = arguments[0][0]; i <= arguments[0][1]; i++, k++) {
    rangeList[k] = i;
  }
  return rangeList;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys() {
  let getKey = [];
  executeforEach(arguments[0], item => getKey.push(item[arguments[1]]));
  return getKey;
}

function substitute() {
  const thirty = 30;
  let arr = [];
  arr = mapArray(arguments[0], function(el) {
    if (el < thirty) {
      return '*';
    }
    return el;
  });
  return arr;
}

function getPastDay(date, days) {
  let dateBefore = new Date(date);
  dateBefore.setDate(dateBefore.getDate() - days);
  return dateBefore.getDate();
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours, minutes;
  const nine = 9;
  if (date.getHours() <= nine) {
    hours = '0' + date.getHours();
  } else {
    hours = date.getHours();
  }
  if (date.getMinutes() <= nine) {
    minutes = '0' + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
