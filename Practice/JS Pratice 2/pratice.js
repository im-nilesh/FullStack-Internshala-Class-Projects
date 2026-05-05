// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let odd = arr.filter((x) => x % 2 !== 0);
// console.log(odd);

// let sqaure = odd.map((x) => x * x);
// console.log(sqaure);

// let sum = sqaure.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(sum);

// function abc() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const fn = abc();
// fn();
// fn();
// fn();
// const fnn = abc();
// fnn();

// function fn() {
//   let a = 1;

//   function inner() {
//     a++;
//     console.log(a);
//   }

//   return inner;
// }

// let a = fn();
// a();
// a();
// let b = fn();
// b();

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), 1000);
// });

// promise.then()
