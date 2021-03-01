/* 
Given a string, find out if its characters can be rearranged to form a palindrome.
Example
For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
  return (
    inputString
      .split("")
      .sort()
      .join("")
      .replace(/(\w)\1/g, "").length < 2
  );
}

const inputString = "aabb";
const res = palindromeRearranging(inputString);
console.log(res);
