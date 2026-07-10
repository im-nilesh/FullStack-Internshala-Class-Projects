// console.log("Hello");
// const abc = 20;
// console.log(abc);
// let baka: number = 200;
// console.log(baka);

// function greet(name: string): void {
//   console.log(`Hello,${name}`);
// }
// greet("Nilesh");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 10));

function findAge(age: number): boolean {
  if (age >= 18) {
    console.log(true);
  }
  return false;
}

console.log(findAge(15));
