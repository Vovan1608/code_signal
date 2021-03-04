/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.
Example
For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4
*/

function avoidObstacles(inputArray) {
  let step = 2;
  while (inputArray.some((el) => el % step === 0)) {
    step += 1;
  }
  return step;
}

// const inputArray = [5, 3, 6, 7, 9];
// const inputArray = [2, 3]; // 4
const inputArray = [1, 4, 10, 6, 2]; // 7
const res = avoidObstacles(inputArray);
console.log(res);
