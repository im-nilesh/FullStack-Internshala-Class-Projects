function anagram(s, t) {
  if (s.length !== t.length) return false;

  let sorteds = s.split("").sort().join("");
  let sortedt = t.split("").sort().join("");

  if (sorteds === sortedt) {
    return true;
  } else {
    return false;
  }
}
