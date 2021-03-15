/* 
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
Example
For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
*/

function alphabeticShift(inputString) {}

const inputString = "crazy";
const res = alphabeticShift(inputString);

const add = document.querySelector(".add");
const elem = document.createElement("div");

elem.innerText = res;
elem.style = "background: #2962ff";

add.appendChild(elem);
