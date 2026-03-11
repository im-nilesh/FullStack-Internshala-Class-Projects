// const arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 1, 11, 12, 12, 12);
// console.log(arr);

// ---------------------------------------

// const arr = [5, 4, 3, 2, 1, 6, 7];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr.reverse());

// console.log(Math.min(...arr));

// ---------------------------------------

// const arr = [1, 2, 3, 4, 5];
// function square(x) {
//   return x * x;
// }

// const squaredArr = arr.map(square);
// console.log(squaredArr);

// ---------------------------------------

// const users = [
//   {
//     firstName: "john",
//     lastName: "doe",
//     age: 23,
//   },
//   {
//     firstName: "jane",
//     lastName: "doe",
//     age: 23,
//   },
//   {
//     firstName: "jack",
//     lastName: "doe",
//     age: 23,
//   },
// ];

// const firstnames = users.map((user) => user.firstName);
// console.log(firstnames);

// ---------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9.1];
// const updatedArr = arr.filter((num) => num > 5);
// console.log(updatedArr);

// ---------------------------------------

// const arr = [1, 2, 3, 4, 5];
// const [f, s, ...rest] = arr;
// console.log(f, s, rest);

// ---------------------------------------

// const obj = {

//     x: 10,
//     y : function(){
        
//         console.log(this)
//     }
    
// }

// obj.y();


//--------------------------------------------

// const obj = {
//     x : 10,
//     z : function(){
//         const x = () => { 
//         console.log(this)
//         }
//         x();
//     }
// }

// obj.z()

//--------------------------------------------

function outer(){
    const x = 10;
    const y = function(){
        let z = 10000;
        console.log(z)
        console.log(x)
    }
    console.log(this);
    y();
}

const functionCalls = outer();
// console.log(functionCalls);
