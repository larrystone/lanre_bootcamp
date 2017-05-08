'use strict';

module.exports = {

 /* list prime numbers from 0 to n */
 getPrimes: (n) => {
   let primes = [];

   if (n == NaN || n < 2)
      return primes;

  iteration: for (let k = 2; k <= n; k++) {
   let half = Math.floor(Math.sqrt(k));

   for (let i = 2; i <= half; i++) {
      if (k % i == 0) {
         continue iteration;
      }
   }
   primes.push(k);
  }
   
   return primes;
 },
}
