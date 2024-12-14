let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    element.style.backgroundColor = getRandomColor()
}


function getRandomColor() {
    let r = Math.trunc(Math.random() * 255);
    let g = Math.trunc(Math.random() * 255);
    let b = Math.trunc(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

Array.from(document.getElementsByClassName("box")).forEach(box => {
    box.style.backgroundColor = getRandomColor();
});

Array.from(document.getElementsByClassName("contain")).forEach(contain => {
    contain.setAttribute("style", "background-color: pink");    //made background-color to pink
    contain.removeAttribute("style")    //removed background color of the class named contain
})

let dataWas = document.querySelector(".contain").dataset;
console.log(dataWas);

let div = document.createElement("div")
div.innerHTML = "<h1>This is Coding world.</h1>"
div.setAttribute("class", "infoGraphics")
div.setAttribute("style", "background-color: pink")
document.body.appendChild(div);

 document.querySelector(".container").classList.add("red") //added "red" to class name
 document.querySelector(".container").classList.remove("red")//removed "red" from class name
 document.querySelector(".container").classList.toggle("red")//toggle is used for do the opposite then now. For example:
//                                                     here, if the container have class "red" already added then it will remove. 
//                                                      and if the container don't have the "red" then it will immediately add it.


function getRandomColor() {
    let r = Math.trunc(Math.random() * 255);
    let g = Math.trunc(Math.random() * 255);
    let b = Math.trunc(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => { //contineuously cholte thake
    document.querySelector(".two").style.backgroundColor = getRandomColor()
    document.querySelector(".one").style.backgroundColor = getRandomColor()
}, 1200);    //setInterval clear korte hole clearInterval use korte hoy

setTimeout(() => { //just ekbar change hoy
    document.querySelector(".two").style.backgroundColor = getRandomColor()
    document.querySelector(".one").style.backgroundColor = getRandomColor()
}, 3000);    //setTimeout clear korte hole clearTimeOut use korte hoy


function loadScript( src , callBack ){
    let script = document.createElement('script')
    script.src = src;
    script.onload = () => callBack(script)
    document.head.append(script)
}
loadScript('https://www.facebook.com/', (script)=>{
    alert("script loaded successfully");
})