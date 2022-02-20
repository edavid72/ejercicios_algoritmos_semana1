const sieveEratosthenes = (n) => {
  let primes = [];
  let aux = [];

  // if (n < 2) {
  //   return false;
  // }

  for (let i = 0; i <= n; i++) {
    aux.push(true);
  }

  for (let i = 2; i <= n; i++) {
    if (aux[i]) {
      primes.push(i);

      for (let j = 1; j * i <= n; j++) {
        aux[i * j] = false;
      }
    }
  }

  return primes;
};

console.log(sieveEratosthenes(1));
