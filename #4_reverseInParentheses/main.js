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

function reverseInParentheses(str) {
  for (let i = str.length; i >= 0; i--) {
    console.log(str[i]);
  }
  // const arrStr = str.split("");
  // const LEFT_SIDE_ROUND_BRACKET = "(";
  // const RIGHT_SIDE_ROUND_BRACKET = ")";

  // const leftBrace = arrInputString.indexOf("(");
  // const rightBrace = arrInputString.indexOf(")");
  // const size = inputString.length;

  // arrInputString.splice(
  //   leftBrace,
  //   rightBrace - leftBrace + 1,
  //   arrInputString
  //     .slice(leftBrace + 1, rightBrace)
  //     .reverse()
  //     .join("")
  // );

  // return arrInputString.join("");
}

// const inputString = "(bar)";
// const inputString = "foo(bar)baz";
const inputString = "foo(bar)baz(blim)";
// const inputString = "foo(bar(baz))blim";

const res = reverseInParentheses(inputString);
console.log(res);
