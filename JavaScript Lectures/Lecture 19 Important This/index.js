//1. functional calling 

// function neel(){
//     console.log(this)
// }
// neel()

//--------------------------------------

// 2. Object calling 

// let obj = {
//     a : 100,
//     fn : function(){
//         console.log(this)
//     }
// }
// obj.fn()

//------------------------------------------------------

// 3. Constructor calling 

// function Neel(){
//     this.age = 21
//     this.name = "neel"
// }

// let n1 = new Neel ()

//---------------------------------------------------------

// 4. Indirect calling 

// call bind and apply are used to change the reference of this keyword 

// call

// let obj1 = {
//     a:10,
//     fn: function(x,y,z){console.log(this.a,x,y,z)}  //somewhat written as obj1.a
// }
// obj1.fn() //10


// let obj2 = {
//     a:50,
// }

// // obj2.fn() this will give error because fn is not present in obj2

// obj1.fn.call(obj2, 01,20,20) //50 
// obj1.fn.apply(obj2, [01,20,20])

// apply is 100% same as they call but the only difference is in the way we pass the arguments
// apply accpet arguments in the form of array

//--------------------------------------------------------------------------------------------------------

// 5. Arrow function 

// Exaxmples : 

// function sum(a,b){
//     return a+b 
// }
// console.log(sum(10,20));


// const sum = (a,b) =>{
//     return a+b
// }

// function sqaure(n){
// return n*n
// }

// console.log(sqaure(6));

// // 1st method
// const square = n => {return n*n;}

// // 2nd method 
// const sq = n => n*n 
// console.log(sq(6));

// let obj ={
//     a:10,
//     fn: function(){
//         console.log(this); //obj
//         let sam = () => {
//             console.log(this);//obj
            
//         }
//         sam()
        
//     }
// }

// obj.fn()