let p1 = new Promise((resolve, reject) => {
  let x = 100;
  if (x > 1000) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

p1.then((data) => {
  console.log(data, "then");
}).catch((err) => {
  console.log("catch");
});
