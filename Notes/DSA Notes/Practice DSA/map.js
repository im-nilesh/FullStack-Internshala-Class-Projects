function printnums(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);

  printnums(i + 1, n);
}

printnums(1, 10);
