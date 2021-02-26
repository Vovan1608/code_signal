/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
  let acc = 0;
  inputArray.reduce((cur, next) => {
    acc = Math.abs(cur - next);
    return next;
  });
  return acc;
}

const inputArray = [1, 1, 1];
const res = arrayChange(inputArray);
console.log(res);
