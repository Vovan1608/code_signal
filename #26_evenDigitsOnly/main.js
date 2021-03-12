/* 
Check if all digits of the given integer are even.
Example
For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
 */

function evenDigitsOnly(n) {
  return [...String(n)].every((el) => Number(el) % 2 === 0);
}

const n = 248622;
const res = evenDigitsOnly(n);
document.writeln(res);
