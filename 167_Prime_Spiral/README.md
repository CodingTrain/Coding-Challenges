# Prime Spiral

## Some useful facts:

    - All primes except 2 are `odd`.
    - All primes `greater` than 3 can be written in the form  `6k - 1` or `6k + 1`.

Using those facts we can optimaze isPrime function to check only **_numbers 6k - 1 and 6k + 1_**
instead of ~~all the numbers between 1 and the given number~~ .

source :[Project_Euler](https://projecteuler.net/overview=007)

```javascript
// Function to test if number is prime in P5.js
function isPrime(value) {
  if (value < 2) return false;
  else if (value < 4) return true;
  else if (value % 2 == 0 || value % 3 == 0) return false;
  else {
    for (let i = 5; i <= sqrt(value); i += 6) {
      if (value % i == 0 || value % (i + 2) == 0) {
        return false;
      }
    }
  }

  return true;
}
```

Thank you to @MoulatiMehdi for the above note!
