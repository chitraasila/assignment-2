const n1 = 1;
const n2 = 1000;
//checking if number is prime or not
function isPrime(num) {
  let prime = false;
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      count++;
    }
    if (count > 1) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  return prime;
}
//factorial of number
function fact(n) {
  if (n == 0 || n == 1) return 1;
  else return n * fact(n - 1);
}
//funtion for finding factorial of prime numbers
function prime(n1, n2) {
  let res = 0;
  for (i = n1; i <= n2; i++) {
    if (i > 1) {
      if (isPrime(i)) {
        console.log(`prime number : ${i}    and factorial is ${fact(i)}`);
        document.write("\n");
      }
    }
  }
}

prime(n1, n2);
