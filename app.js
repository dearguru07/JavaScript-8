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


// var x=1
// a()
// b()
// console.log(x)

// function a(){
//     var x=10
//     console.log(x)
// }
// function b(){
//     var x=100
//     console.log(x)
// }


// let a =45
// console.log(typeof(a))
// console.log(5 + '5'); // Outputs: "55"


// let age=7
// let res=age==1 ?"Telugu":age==2?"English":age==3?"tamil":age==4?"kannada":"malayalam"
// console.log(res)


function Click(){
let input=document.getElementById('input').value
n=input
if(n==1){
    console.log('Telugu')
}
else if(n==2){
console.log('Tamil')
}
else if(n==3){
    console.log('English')
}
else if(n==4){
    console.log('Kannada')
}
else{
    console.log('Malayalam')
}
}


