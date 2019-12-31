function addOne(x) {
  return x + 1;
}

function pipe(n, ...args) {
  for (let arg of args) {
    n = arg(n);
  }
  return n;
}

pipe(1, addOne, addOne);
