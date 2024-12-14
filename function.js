function myFunction( a, b) {
    return a * b
}
let x = myFunction(2,3)
console.log(x);



let y = function(a, b){
    return a + b
}
console.log(y(5, 8));



console.log(theFunction(5));
function theFunction(z) {
    return z * z;
} // JavaScript functions can be called before they are declared.
 



const abc = (a, b) => a * b; //arrow function
console.log(abc(3,4));



// function thisFunction(a, b) {
//     return a * b;
//   }
//   window.thisFunction(10, 2); //myFunction() and window.myFunction() is the same function



  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName()); 



  function myFunction() {
    a = 4;
  } //Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.