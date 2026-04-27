function expo(base, power) {
  if (power === 1) {
    return base;
  }
  return base * expo(base, power - 1);
}
console.log(expo(2, 3));
