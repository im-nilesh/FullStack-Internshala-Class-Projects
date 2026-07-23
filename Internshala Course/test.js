// const arr = [1, 2, 3, 4, 5];
// const updatedarr = arr.map((item) => item * 2);
// console.log(updatedarr);

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const squaredArr = arr.map((item) => item * 2);
// const evenArr = arr.filter((item) => item % 2 == 0);
// const evenSum = evenArr.reduce((acc, curr) => {
//   return (acc += curr);
// }, 0);
// console.log(evenSum);

// let p1 = new Promise((resolve, reject) => {
//   let success = true;
//   let data = "HEHE";
//   if (success) {
//     resolve(`Data fetched ${data}`);
//   } else {
//     reject("Data Fetch Failed");
//   }
// });

// p1.then((item) => console.log(item));

// p1.catch((err) => console.log(err));

// function outer() {
//   const name = "Nilesh";

//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }
// const greet = outer();

// greet();

// async function getProducts(req, res) {
//   const response = await fetch(`https://dummyjson.com/products`);
//   const data = await response.json();
//   res.status(200).json({
//     message: "Data fetched",
//     data,
//   });
// }

// async function postProducts(req, res) {
//   let list = [];
//   try {
//     const product = req.body;
//     if (!product) {
//       return res.status(404);
//     }
//     return list.push(product);
//   } catch (error) {
//     return res.status(500);
//   }
// }

// async function getUsers(req, res) {
//   try {
//     if (Object.keys(users).length === 0) {
//       return res.status(400).json({ message: "No products found" });
//     }
//     return res.status(200).json({
//       message: "Data Fetched",
//       users,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// }

async function getOneUser(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Id not found" });
    }
    const user = users.findOne({ id });
    return res.status(200).json({ message: "User Found", user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
