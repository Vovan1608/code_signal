/* 
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
Check if the given string is a correct variable name.
Example
For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
*/

function variableName(name) {
  return /^\D\w/g.test(name);
}

// const names = "var_1__Int";
const names = "qq-q";
// const names = "2w2";
const res = variableName(names);

const add = document.querySelector(".add");
const elem = document.createElement("div");
elem.innerText = res;
elem.style = "background: #2962ff";

add.appendChild(elem);
