function anagramH(s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
}
