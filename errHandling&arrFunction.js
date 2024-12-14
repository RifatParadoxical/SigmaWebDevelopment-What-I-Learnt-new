// Error handling

 function putush() { 
     let a = prompt("Enter a number:")
     let b = prompt("Enter another number:")
     let x = 1.5;
     if (isNaN(a) || isNaN(b)) {
         throw SyntaxError("Sorry this is not a number")
        }
        
        let c = parseInt(a)+parseInt(b); //parseInt() use hoy string take number e rupantor korte
        try {
            alert(c+x);
            return true
        } catch (error) {
            alert("we find an error ") 
            return false
            // alert(error.name)
            // alert(error.message)
            // alert(error.stack)
        }finally{
            alert("Good night") //function er vitore return thakle pore nicher code usually chole na, ei problem solve korte use kora hoy finally()
        }
    }
let a = putush()




//Arrow function


let myFunction = (a, b) => a+b;
console.log(
    myFunction(2,4)
);

let hello = () => "Hello World"
console.log(hello());

let hello2 = () => {
    return "Hello world"
}
console.log(hello2());

let hello3 = function () {
    return "Hello world"
}
console.log(
    hello3()
);

let hello4 = (value) => "Hello " + value
console.log(hello4("world"));
