const nPrimeSqrt = (n) => {
  if (n < 2) {
    return false;
  }

  let sqrt = parseInt(Math.sqrt(n));
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(nPrimeSqrt(7));
