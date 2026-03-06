var a = 100;
console.log(a);

function test() {
  console.log(a);
  var a = 200;
}
test();

console.log(a);
