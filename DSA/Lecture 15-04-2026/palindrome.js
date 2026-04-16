const string = "radar";
function palindrome(str) {
  reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  }
  return `not a palindrome`;
}
const res = palindrome(string);
console.log(res);
//see this as its wrong
