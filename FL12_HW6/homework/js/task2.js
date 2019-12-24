let a = prompt( 'Enter a', '' );
let b = prompt( 'Enter b', '' );
let c = prompt( 'Enter c', '' );

if (a !== '' && !isNaN(a)
   && b !== '' && !isNaN(b)  
   && c !== '' && !isNaN(c)) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (a === 0 || b === 0 || c === 0) {
    console.log('A triangle must have 3 sides with a positive definite length');
  } else {
    if (a + b <= c || a + c <= b || b + c <= a) { 
      console.log('Triangle doesn’t exist');
    } else {  
      if (a === b && b === c) {
        console.log('Equilateral triangle');
      } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
      } else {
        console.log('Scalene triangle');
      }  
    }
  }
} else {
  console.log('input values should be ONLY numbers');
}