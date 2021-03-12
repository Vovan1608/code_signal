/* 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
Be careful 1000! has 2568 digits...
For more info, see: http://mathworld.wolfram.com/Factorial.html
Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
*/

function zeros(n) {
  let count = 0;

  if (n === 5) {
    return 1;
  }

  /*
	start from 5, multiply j by 5 each loop, but
	stop iterating when number/j is no longer greater
	than 1
	*/
  for (let j = 5; n / j >= 1; j *= 5) {
    /*
	assuming that number/j will just give you the
	integer result of the division of number/j and
	also truncate:
	*/
    count = Math.floor(count + n / j);
  }

  return count;
}

const res = zeros(12);
document.writeln(res);
