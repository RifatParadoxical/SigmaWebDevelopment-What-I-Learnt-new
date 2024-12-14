let a1 = [ 12, 13, 14, 15 ]
let a2 = [ 22, 23, 24, 25 ]
let a3 = [ 32, 33, 34, 35 ]
console.log(a1);
console.log(a1.toString())
console.log(a1.join(" and "))
let a = a1.concat(a2 , a3)
console.log(a)
console.log(a1.concat(a2 , a3))


let b1 = [11, 12, 13];
let b2 = [21, 22, 23];
let b3 = [31, 32, 33];
let b = b1.concat(b2 , b3)
console.log(b);

let number = [ 1,2,3,4, 5];
console.log(number.splice( 1, 3 ));
//output: [ 1, 5 ] 
let number = [ 1,2,3,4, 5];
console.log(number.splice( 1, 3, 222, 333 ));    /* first index number 
                                         indicates from where to start,
                                 Second indexNumber indicates how much
                                   index should delete & all of that
                                    will be added until the deleted
                                         indexing not fix to finish */

//output: [ 1, 222, 333, 5 ] 


// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
//output: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


let number = [ 1, 2, 3, 4];
console.log(number.slice(2))
//output: [3, 4]
console.log(number.slice(1))
//output: [2, 3, 4]
let nam = ["Rifat", "Resma", "Mim", "Nasimul", "Mahinur", "Zabed"];
console.log(nam.slice(4))   //start from the index number, dlt all
                            //before that index number.
//output: ["Mahinur", "Zabed"]

let number = [1, 2, 3, 4, 5];
console.log(number.push(6,7))
//output: [1, 2, 3, 4, 5, 6, 7]
console.log(number.pop())
//output: [1, 2, 3, 4, 5, 6]
console.log(number.unshift(0))
//output: [0, 1, 2, 3, 4, 5, 6]
console.log(number.shift())
//output: [1, 2, 3, 4, 5, 6]

let number = [0, 1, 2, 3, 4, 5]
number.forEach((value, index, array)=>{
    console.log(value, index, array)
})


let arr = [1, 2, 3, 4];
let newArr = arr.map((e, index, array)=>{  // e = element;
    return index, array, e;
})
console.log(newArr)
//output:
/* 
0: [ 1, 2, 3, 4 ]
​
1: [ 1, 2, 3, 4 ]
​
2: [ 1, 2, 3, 4 ]
​
3: [ 1, 2, 3, 4 ]
*/

let arr = [1, 2, 3, 4];
let newArr = arr.map((e)=>{  // e = element;
    return e**2 ;
})
console.log(newArr)
//output: [ 1, 4, 9, 16 ]

let arr = [1, 2, 3, 4];
let newArr = [];
const filtered = (e)=>{
    if (e>1) {
        return true;
    }
    return false;
}
console.log(arr.filter(filtered));
//output: [2, 3, 4]

let arr = [1, 2, 3, 4];
let red = (a, b)=>{
    return a*b;
}
console.log(arr.reduce(red))
//output: 24

let arr2 = [1, 2, 3, 4];
let red2 = (a, b)=>{
    return a+b;
}  
console.log(arr2.reduce(red2))
//output:  10

let arr3 = [1, 2, 3, 4];
let red3 = (a, b)=>{
    return b-a;
}
console.log(arr3.reduce(red3))
//output: 2

var arr = Array.from("Harry");  //`Array.from` is used to make array from anything.
console.log(arr);
//output: [ "H", "a", "r", "r", "y" ]

let number = 6;
let ans=1;
for (let i = 1; i <= number; i++) {
    ans = ans * i;
}
console.log(ans)