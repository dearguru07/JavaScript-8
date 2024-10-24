// -------reduces-----------

// let numbers=[1,2,3,4,5,6,7,8,9,25,4,8,2,55,58]
// console.log(numbers)
// let result=numbers.reduce((max,curr)=>{
// if(curr>max){
//   max=curr
// }
// return max
// },0)
// console.log(result)

// 1)---------highvalue----------

// let result=numbers.reduce((x,y)=>{
    
// if (x<y){
//   x=y
// }
// return x
// },0)
// console.log(result)

// 2)------small----------

// let result=numbers.reduce((x,y)=>{
// if(x>y){
//   x=y
// }
// return x
// })
// console.log(result)

// 3)---------total value----------

// let result=numbers.reduce((total,curr)=>{
//   total=total+curr
//  return total
// },0)
// console.log(result)

// ---------normal function and Arrow function------

// let result=numbers.map(function(x){
//   return x*x
// })
// console.log(result)

// let result=numbers.map((x)=>{
//   return x*x
// })
// console.log(result)



// ------------document Object Model--------------


// var n=2
// function data(num){
//     var ans=num*num
//     return ans
// }
// var res=data(n)
// var ress=data(4)
// console.log(res)
// console.log(ress)


var x=1
a()
b()
console.log(x)

function a(){
    var x=10
    console.log(x)
}
function b(){
    var x=100
    console.log(x)
}