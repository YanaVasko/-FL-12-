const two = 2;
const four = 4;

let a = prompt( 'Enter a', '' );
let b = prompt( 'Enter b', '' );
let c = prompt( 'Enter c', '' );

if ( a !== '' && !isNaN(a)
     && b !== '' && !isNaN(b)  
     && c !== '' && !isNaN(c) ) {
  let disc = b * b - four * a * c; 
  if (disc > 0) {
    let x1 = Math.floor((- b + Math.sqrt(disc)) / (two * a));
    let x2 = Math.floor((- b - Math.sqrt(disc)) / (two * a));
    console.log(`x1 = ${x1}  x2 = ${x2}`);
  } else if (disc === 0) {
    let x = - b / (two * a);
    console.log(`x = ${x}`);
  } else {
    console.log('no solution');
  }
} else {
  console.log('Invalid input data');
}
