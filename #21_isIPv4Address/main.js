/* 
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.
 */

function isIPv4Address(inputString) {
  const arr = inputString.split(".");
  const size = arr.length === 4 || false;
  return size && arr.every(check);
}

function check(str) {
  return (
    str !== "" &&
    Number(str) >= 0 &&
    Number(str) <= 255 &&
    (str.split("").length < 2 ? true : str[0] === "0" ? false : true)
  );
}

// const inputString = ".254.255.0";
const inputString = "64.233.161.00";
// const inputString = "172.16.254.1";
const res = isIPv4Address(inputString);
console.log(res);
