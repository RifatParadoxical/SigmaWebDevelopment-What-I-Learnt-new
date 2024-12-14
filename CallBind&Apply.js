//Call 

function abcd() {
    console.log(this);
}
var a = 12
 abcd.call(a)
 //output: [Number: 12] (of console in abcd function.)
 
function abcd2( val1, val2, val3 ) {
    console.log(this, val1, val2, val3); 
}
var b = {age: 24}
abcd2.call(b, 12, 23,34)  //23,34,45 indicating val1, val2, val3
// outout: { age: 24} 12 23 34



//Apply

function abcd2( val1, val2, val3 ) {
    console.log(this, val1, val2, val3); 
}
var b = {age: 24}
abcd2.apply(b, [12, 23,34])  // 12, 23,34 indicating val1, val2, val3
// outout: { age: 24} 12 23 34 //output kintu console e asche kintu ekhane sudhu mangula apply hoise




//Bind

function abcd3() {
    console.log(this);
}
var a = 12
var binded = abcd3.bind(a)
binded()
