// // function isLegal(user: { age: number }): boolean {
// //   if (user.age >= 18) {
// //     return true;
// //   }
// //   return false;
// // }

// // console.log(isLegal({ age: 15 }));

// // refer the images for interface example

// class example

// interface x {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Student implements x {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     ((this.name = n), (this.age = a));
//   }
//   greet(phrase: string): void {
//     console.log(`${phrase} : ${this.name}`);
//   }
// }

// let s1 = new Student("nilesh", 100);

// ---------------------------------------------------

// type example

// type DSA = {
//   teacher: string;
//   leetcoded: number;
// };

// type WEB = {
//   teacher: string;
//   project: number;
// };

// type Nilesh = DSA & WEB;

// let Nilesh: Nilesh = {
//   teacher: "WEB",
//   leetcoded: 100,
//   project: 100,
// };

// -------------------------------------------------

// let arr = [10, 20, 30];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

//------------------------------------------------------

// interface User {
//   name: string;
//   marks: number;
// }

// let users: User[] = [
//   { name: "Nilesh", marks: 22 },
//   { name: "Rahul", marks: 19 },
//   { name: "Amit", marks: 25 },
// ];

// let max = users[0];

// for (let i = 1; i < users.length; i++) {
//   if (users[i].marks > max.marks) {
//     max = users[i];
//   }
// }

// console.log(max);

//--------------------------------------------------------
