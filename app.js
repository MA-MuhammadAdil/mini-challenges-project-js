let minusbtn = document.querySelector(".minus-js")
let plusbnt = document.querySelector(".plus-js") 
let count = document.querySelector(".count")
let counter = 0 
let inp = document.querySelector("#inp")
let resetBtn =  document.querySelector(".reset")

minusbtn.addEventListener("click",()=>{
    let countVal = +count.innerText
    let inpValue = +inp.value
    count.innerText = countVal - inpValue
    
})


plusbnt.addEventListener("click",()=>{
      let countVal = +count.innerText
      let inpValue = +inp.value
    count.innerText = countVal + inpValue
})

resetBtn.addEventListener("click",()=>{
    count.innerText = 0
})