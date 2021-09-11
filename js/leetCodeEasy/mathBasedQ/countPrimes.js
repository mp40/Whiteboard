// Count Primes
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

/*
Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10,
they are 2, 3, 5, 7.
*/

/*
try and use Sieve of Eratosthenes
https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
*/

export const countPrimes = function(n) {
    if(n <= 2){
        return 0;
    }
    const primesArray = [false, false]
    for(let i = 2; i < n; i++) {
        //if not pre-marked as not-prime
        if(primesArray[i] !== false){
            //mark as prime
            primesArray[i] = true
        }
        for(let j = i*i; j <= n; j = j+i) {
            //mark all multiples of i as non-prime
            primesArray[j] = false;
        }
    }
    return primesArray.filter((ele)=>{
        return ele === true;
    }).length
};