document.querySelector(".one").addEventListener("click",()=>{
    alert("Clicked first")
})
document.querySelector(".two").addEventListener("click",()=>{
    alert("Clicked second")
})
document.querySelector(".three").addEventListener("click",(e)=>{
    alert("Clicked last")
    e.stopPropagation()
})