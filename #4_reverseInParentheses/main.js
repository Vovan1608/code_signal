/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";

For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";

For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";

For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function reverseInParentheses(inputString) {
  while (inputString.includes("(")) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join("")
    );
  }
  return inputString;
}

// const inputString = "(bar)";
// const inputString = "foo(bar)baz";
// const inputString = "foo(bar)baz(blim)";
const inputString = "foo(bar(baz))blim";

const res = reverseInParentheses(inputString);
console.log(res);
