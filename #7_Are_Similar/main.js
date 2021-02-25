/* 
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example
For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.
The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.
We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.
Any swap of any two elements either in a or in b won't make a and b equal.
*/

function areSimilar(a, b) {
  let flag = null;
  const tmpA = [...a];
  const tmpB = [...b];
  const size = a.length;
  for (let i = 0; i < size; i++) {
    if (tmpA[i] === tmpB[i]) {
      flag = true;
    } else {
      replace(tmpA[i], tmpA[i + 1]);
      if (tmpA[i] === tmpB[i]) {
        flag = true;
      } else {
        replace(tmpB[i], tmpB[i + 1]);
        if (tmpA[i] === tmpB[i]) {
          flag = true;
        } else {
          flag = false;
        }
      }
    }
  }
  // console.log(tmpA, tmpB);
  return flag;
}

function replace(num1, num2) {
  return ([num1, num2] = [num2, num1]);
}

const a = [2, 3, 1];
const b = [1, 3, 2];
const res = areSimilar(a, b);
console.log(res);
