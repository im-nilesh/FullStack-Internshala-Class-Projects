function printnos(n) {
  if (n > 0) {
    printnos(n - 1);
    console.log(n);
  }
}

printnos(10);
