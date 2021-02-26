/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
  let acc = 0;
  const cloneInputArr = [...inputArray];

  cloneInputArr.reduce((cur, next) => {
    if (cur >= next) {
      let tempVar = cur - next + 1;
      acc += tempVar;
      next += tempVar;
    }

    return next;
  });

  return acc;
}

// const inputArray = [3, 1, 1];
const inputArray = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];
const res = arrayChange(inputArray);
console.log(res);
