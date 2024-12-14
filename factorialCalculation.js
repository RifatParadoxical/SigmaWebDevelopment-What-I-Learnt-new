let a = prompt('Enter a number');
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice())
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    alert(c)
}
factorial(a)