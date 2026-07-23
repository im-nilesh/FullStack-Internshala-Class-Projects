const string = "MoM";
function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let temp = 0;
  if (str[i] !== str[j]) {
    return `not a palindrome`;
  } else {
    while (i < j) {
      temp = str[i];
      str[i] = str[j];
      str[j] = temp;
      i++;
      j--;
    }
  }
  return `Palindrome`;
}
const res = palindrome(string);
console.log(res);
