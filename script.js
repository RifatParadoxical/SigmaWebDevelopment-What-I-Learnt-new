

// var ans = new Promise((res,rej)=>{
//     if (true) {
//         return res()
//     }else{
//         return rej()
//     }
// })
// ans
// .then(function(){
//     console.log("resolved")
// })
// .catch(function(){
//     console.log("rejected")
// })

// var ans = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()*10)
//     console.log(n);
//     if (n <= 5) {
//         return res()
//     } return rej()
// })
// ans.then(function(){
//     console.log("below")
// })
// .catch(function(){
//     console.log("above")
// })

// var todo = new Promise(function (res, rej){
//     return res('Come home first');
// })

// todo.then(function(data){
//     console.log(data);
//     var todo2 = new Promise(function(res, rej){
//         return res('open the gate then close it again');
//     })
//     todo2.then(function(data){
//         console.log(data);
//         var todo3 = new Promise(function(res, rej){
//             return res('take your meat');
//         })
//         todo3.then(function(data){
//             console.log(data);
//         })
//     })
// })
// .catch(function(){
//     console.log("rejected")
// })


// function abcd(){                        
//     fetch ('http://api.alquran.cloud/v1/quran/')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data)
//     });
// }

// abcd();


//  async function abcd2(){                        
//    let raw = await fetch('http://api.alquran.cloud/v1/quran/')
//    let answer = await raw.json;
//    console.log(answer);
// }
// abcd2();



// function multiplyBy5(num){
//     this.num = num
//     return num*5
// }
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)



//Prototype

// function createUser(username, score){
//     this.userName = username;
//     this.score = score;
// }
// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
    
// }
// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 15)
// console.log(`score is ${tea.score}`);

// tea.printMe()



// function person(first, last, age, bYear){
//     this.firstName = first
//     this.lastName = last
//     this.age = age
//     this.birth = bYear
//     this.sucess = 100  //stepindex0
//  }
//  let dad = new person("MD", "Zabed", 50, "1979")
//  let mom = new person("Mahinur", "Begum", 45, "1984")
//  console.log(`my dad is ${dad.firstName} ${dad.lastName}. he is ${dad.age}  years old.`)
//  console.log(`my mom is ${mom.firstName} ${mom.lastName}. her sucess rate ${mom.sucess} percent`)


// person.prototype.sucessRate = 100  //stepindex1
//  console.log(`my mom is ${mom.firstName} ${mom.lastName}. her sucess rate ${mom.sucessRate} percent`)


// person.prototype.sucessRate = function () { //stepindex2
//     return this.sucess = 100
// }
//  console.log(`my mom is ${mom.firstName} ${mom.lastName}. her sucess rate ${mom.sucessRate()} percent`)


// let teacher = {
//     makeVideo: true
// }

// let user = {
//     name: "user",
//     mail: "chai@google.com"
// }

// let teachingSupport = {
//     isAvailable: false
// }

// let TASupport = {
//     makeAssignment: 'javascript assignment',
//     fullTime: true ,
//     __proto__: teachingSupport  //teaching support er object gulo teaching support nije to paibo e abr TASupport o paibo.
// }

// teacher.__proto__ = user;   //user er object gulo user nije to paibo e abr teacher o paibo.

// //modern syntex
// Object.setPrototypeOf(teachingSupport, teacher) //teacher er object gulo teacher nije to paibo e abr teaching support o paibo.

// let anotherUserName = "Chai Aur Code    "

// String.prototype.trueLength = function () {
//     console.log(`${this}`);
//     console.log(`true length is ${this.trim().length}`);
// }
// anotherUserName.trueLength()
// "hitesh".trueLength()
// "icetea".trueLength()



//call & this

// function setUserName(username, age) {
//     this.username = username;
//     this.age = 18;
// }
// function createUser(age, email, password){
//     setUserName.call(this, age)
//     this.email = email
//     this.password = password
// }
// const chai = new createUser("chai", "chai@fb.com", "hi@lalF@lah")
// console.log(chai);




// class Animal{
//     constructor(name){
//         this.name = name
//         console.log("object is created...");
//     }
//     eats(){
//         console.log("kha raha hu");
//     }
//     jumps(){
//         console.log("Kud raha hun");
//     }
// }
// let a = new Animal("bunny")
// console.log(a);

// class lion extends Animal{
//     constructor(name){
//         super()
//         this.name = name
//         console.log("object is created...");
//     }
// }
// let l = new lion("sher")
// console.log(l);

//  async function sleep(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
//  }
//  ( async function main(){
//     //  let a = await sleep()
//     //  console.log(a);
//     //  let b = await sleep()
//     //  console.log(b);
    
//     let [x,y] = [1,5]
//     console.log(x,y);
//     let [m,n,...rest] = [1,2,3,4,5]
//     console.log(m,n, rest);
    
//  })()


//  let obj = {
//     a:1,
//     b:2,
//     c:3
//  }
//  let {a,b} = obj;   //a , b re obj thkee ber kore ano
//  console.log(a,b);

//  function sum(a,b,c) {
//     return a+b+c
//  }
//  let arr = [1,2,3]
//  console.log(arr[0]+arr[1]+arr[2])
//  console.log(sum(...arr)); 
//  console.log(sum(arr[0],arr[1],arr[2]))
 
 
