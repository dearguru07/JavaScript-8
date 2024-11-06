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

// function Click(){
// let input=document.getElementById('input').value
// n=input
// if(n==1){
//     console.log('Telugu')
// }
// else if(n==2){
// console.log('Tamil')
// }
// else if(n==3){
//     console.log('English')
// }
// else if(n==4){
//     console.log('Kannada')
// }
// else{
//     console.log('Malayalam')
// }
// }

// console.log(name)
// var name='Gurucharamn'

// console.log(data)
// var data=5581

// Guru()

// function Guru(){
//     console.log("heloo world.........")
// }

// function* generator(){
//     yield 1
//     yield 2
//     yield 5
// }
// const res=generator()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// const str="Hello world aeiou"
// const res=['a','e','i','o','u']
// const cout=str.split('').filter((x)=>{
//     return res.includes(x.toLocaleLowerCase)
// })
// console.log("hello")
// console.log(cout.length)

// let a=7
// let res=a>5?'telugu':'english'
// console.log(res)

// let arry=[1,5,7,8,9,5,4,7,0]
// // console.log(arry[2])
// arry[1]=44
// console.log(arry[0]=8)
// arry.pop(47)
// console.log(arry)

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);

// let body=document.getElementById('body')
// let heading=document.createElement('h1')
// heading.innerHTML='Hello world ........'
// body.appendChild(heading)

// const a=[1,5,4,7,8]
// console.log(a.length)

// const a='Hello world..'
// const res=a.replace('Hello',"Namastee")
// console.log(res)

// const str = "   Hello, world!   ";
// const result = str.trim(); // "Hello, world!"
// console.log(result)

// const str = "   Hello, world!   ";
// const trimmedStart = str.trimStart(); // "Hello, world!   "
// const trimmedEnd = str.trimEnd();     // "   Hello, world!"


function greet(name) {
  console.log("Hello, " + name);
}

function sayHello(callback) {
  const name = "Alice";
  callback(name);
}

sayHello(greet); // Output: "Hello, Alice"
