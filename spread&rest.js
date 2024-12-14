  //Spread 
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));



const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);



const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); 



const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle} 
  console.log(myUpdatedVehicle);




  
//Rest

function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}
console.log(myBio("John", "Doe", "Developer", "Male"));



const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4]



const { a, b, ...restC } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(restC); // Output: { c: 3, d: 4 }





// That means Rest is exactly the vice versa of Spread operation
