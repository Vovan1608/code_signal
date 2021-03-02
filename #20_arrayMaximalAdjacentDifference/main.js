/* 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
Example
For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3
*/

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDif = 0;
  inputArray.reduce((cur, next) => {
    maxDif = Math.abs(cur - next) > maxDif ? Math.abs(cur - next) : maxDif;
    return next;
  });

  return maxDif;
}

const inputArray = [2, 4, 1, 0];
const res = arrayMaximalAdjacentDifference(inputArray);
console.log(res);
