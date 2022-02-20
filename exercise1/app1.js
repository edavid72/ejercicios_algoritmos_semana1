const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNumber(7));

/* true = El numero es primo 
   false = El numero no es primo
*/
