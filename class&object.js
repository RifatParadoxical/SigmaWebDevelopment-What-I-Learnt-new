let student = {
    fullName: "Rifat",  
    age: 18,
    type: "good",
    study: function () {
        console.log("is a " + this.type + "student"); 
    }
}
console.log(student);


const emploee ={
    calcTax(){
        console.log("tax rate is 10%");
    }
}
console.log(emploee);


class ToyotaCar {
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }
    end(){
        console.log("end");
    }
    // Berand(brand){
    //     this.brandName = brand
    // }
}
let car1 = new ToyotaCar("lexus")
console.log(car1);
// car1.Berand("lexus")



class parent {
    constructor() {
       console.log("hello world"); 
    }
    eat(){
        console.log("eat first");
        
    }
}
class child extends parent{}
let obj = new child()
class gChild extends child{
    constructor(branch){
        super();
        super.eat()
        this.branch = branch;
    }
}
let obj2 = new gChild("engineer")





class user {
    constructor(name, email){
        this.name = name;
        this.email = email
    }
    viewData(){
        console.log(`${this.email}`);
        
    }
}
class admin extends user{
    constructor(name, email){
        super(name,email)
    }
editData(){
    this.name = "ripad"
}
}
let student1 = new user("Rifat", "rifat@mail.com")
console.log(student1);
console.log(student1.viewData());
let admin1 = new admin("admin", "admin@mail.com")
console.log(admin1);


