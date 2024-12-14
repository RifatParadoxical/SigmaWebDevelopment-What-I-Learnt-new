let person = {}
    person.name = "Rifat"
    person.age = 18
    person.height = "5'10inch"
console.log(person);



function Person1( name, age, height) { 
    this.name = name
    this.age = age
    this.height = height
    // Person1.haveGf = true
    this.haveGf= true
    // console.log(Peson1.haveGf)
    console.log(this.haveGf);
        //console won't work outside the block
}
let a = new Person1("Rifat", 18 , "5'10inch")
console.log(a.haveGf);
console.log(a);



let person2 = new Object()
person2.name = "Rifat"
person2.age = 18
person2.height = "5'10inch"
console.log(person2);



function Person4(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
}
// Person4.prototype.haveGf = true
Person4.prototype.haveGf = function () {
    return true
}
let b = new Person4("Rifat", 18, "5'10inch");
// console.log(b.haveGf);
console.log(b.haveGf());
console.log(b);



let person5 = {
    Name : "Rifat",
    age : 18,
    height: "5'10inch",
    get bro(){
        return this.Name;
    }
}
console.log(person5.bro);
console.log(person5);



let person6 = {
    theName : "",  
    age : 18,
    height: "5'10inch",
    set bhai(value){
       this.theName = value;
    }
}
person6.bhai = "Rifat"
console.log(person6.theName.toUpperCase());
console.log(person6);

/*
##What's the difference between 'getter(get)/setter(set)' and function(){}?

function(){} is is function where "get(){}/set(){}" is just a property.
JavaScript can secure data quality more efficiently while using getters and setters.
Allow changes without afecting the external changes. Also provide a simpler syntex
 for accessing and modifying properties.
*/
 
 

let person7 = {
    Name: "Rifat"
}
Object.defineProperty(person7, "getName", {
    get: function () {
        return this.Name
    }
})
Object.defineProperty(person7, "changeName", {
    set: function (value) {
        this.Name = value
    }
})
// Object.defineProperty adds a property to an object, or modifies attributes of an existing property.
console.log(person7.getName);
person7.changeName = "Rifat_2.0"
console.log(person7.getName);