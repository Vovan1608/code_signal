"use strict";

/* 
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
Given a valid email address, find its domain part.
Example
For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";
For address = "fully-qualified-domain@codesignal.com", the output should be
findEmailDomain(address) = "codesignal.com".
*/

function findEmailDomain(address) {
  return address.split("@").pop();
}

// const address = "prettyandsimple@example.com";
// const address = "fully-qualified-domain@codesignal.com";
const address = "example-indeed@strange-example.com";
// const address = '"very.unusual.@.unusual.com"@usual.com';
const res = findEmailDomain(address);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background-color: #61dafb;
	text-align: center;
	font-size: 36px;
	border: 1px solid black;
`;

add.append(el);
