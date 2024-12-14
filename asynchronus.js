// setTimeout(() => {
//   console.log("hello");
  
// }, 5000);



// let promise = new Promise(( resolve, reject) => {
//   console.log("I'm a promise");
//   resolve("Ho ho gainza gainza")
// })

//                                           //these or thoose
// //   new Promise((resolve, reject) => {
// //   reject("rejected!")
// //  })


//  const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve(" not rejected!")
//   })
//  }
//  let promised = getPromise();
//  promised.then(() => {    //resolve hole .then ar reject hole .catch hobe
//   console.log("promise status.");
  
//  })


async (params) => {
  
}
async function name(params) {
  
}

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data");
//       resolve("resolved")
//     }, 2000);
//   })
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data");
//       resolve("resolved")
//     }, 2000);
//   })
// }

// asyncFunc1().then((result)=>{
//   console.log(result);

// asyncFunc2().then((result)=>{
//     console.log(result);
//   })
// })



function api() {
    return new Promise((resolve, reject) => {
        console.log("weather data.");
        setTimeout(() => {
            console.log("fetching data.");
            resolve(200)
        }, 2000);
    })
}

async function getApiData() {
    await api()
    await api()
}
getApiData()