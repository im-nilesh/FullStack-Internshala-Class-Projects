// let p1 = new Promise((resolve, reject) => {
//   let x = 100;
//   if (x) {
//     resolve("Promise Resolved");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// p1.then((data) => {
//   console.log(data, "then");
// }).catch((err) => {
//   console.log("catch");
// });

// -------------------------------------------------------------------------------------------------

// Watch samarth github for code

// async function neel() {
//   let res = true;
//   let result = await setTimeout(() => {
//     fetch("some api");
//   }, 1000);
// }

//--------------------------------------------------------------------------------------------------

async function neel() {
  console.log("start");
  let res = await fetch("https://api.example.com/data");
  let data = await res.json();
  console.log(data);
}
console.log("These lines may print themseleves");
console.log("End of deafult console lines");
