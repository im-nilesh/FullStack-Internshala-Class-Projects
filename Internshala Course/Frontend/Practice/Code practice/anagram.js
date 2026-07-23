let s = "listen";
let t = "silent";

function anagram(s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return false;
    }
  }
  return true;
}
console.log(anagram(s, t));
